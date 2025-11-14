/**
 * Minimal auth service with localStorage-backed persistence and OTP simulation.
 * Designed for client-only demos; replace with real API calls in production.
 */
export type RegistrationInit = {
  name: string;
  email: string;
  phone: string;
};

export type OtpSession = {
  sessionId: string;
  email: string;
  name: string;
  phone: string;
  otp: string;
  expiresAt: number; // epoch ms
  verified: boolean;
  profile?: StudentProfile;
  documents?: DocumentVerification;
};

export type StudentProfile = {
  // Personal
  dateOfBirth?: string;
  gender?: string;
  houseNumber?: string;
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  // Education
  college?: string;
  grade?: string;
  // Interests
  interests?: string[];
  // Guardian
  parentName?: string;
  guardianEmail?: string;
  guardianPhone?: string;
  guardianRelation?: string;
  // Optional
  invitationCode?: string;
};

export type UserRecord = {
  id: string;
  name: string;
  email: string;
  phone: string;
  profile?: StudentProfile;
  documents?: DocumentVerification;
  passwordHash: string;
  createdAt: number;
};

export type DocumentVerification = {
  documentType: string;
  documentNumber: string;
  frontPhotoName?: string;
  backPhotoName?: string;
  profilePhotoName?: string;
  videoName?: string;
  skipped?: boolean;
};

const LS_USERS = "app.users";
const LS_CURRENT_USER = "app.currentUser";
const LS_OTP_SESSION = "app.otp.session";

const getUsers = (): UserRecord[] => {
  try {
    const raw = localStorage.getItem(LS_USERS);
    return raw ? (JSON.parse(raw) as UserRecord[]) : [];
  } catch {
    return [];
  }
};

const setUsers = (users: UserRecord[]) => {
  localStorage.setItem(LS_USERS, JSON.stringify(users));
};

const saveCurrentUser = (userId: string) => {
  localStorage.setItem(LS_CURRENT_USER, userId);
};

export const getCurrentUser = (): UserRecord | null => {
  const id = localStorage.getItem(LS_CURRENT_USER);
  if (!id) return null;
  return getUsers().find((u) => u.id === id) || null;
};

export const logout = () => {
  localStorage.removeItem(LS_CURRENT_USER);
};

const randomId = () => crypto.randomUUID();
const generateOtp = () =>
  Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join("");

export const requestOtp = async (
  payload: RegistrationInit
): Promise<{ sessionId: string; maskedEmail: string; maskedPhone: string }> => {
  // Simulate async latency
  await delay(400);
  // Basic uniqueness check
  const emailExists = getUsers().some(
    (u) => u.email.toLowerCase() === payload.email.toLowerCase()
  );
  if (emailExists) {
    throw new Error("An account with this email already exists.");
  }

  const session: OtpSession = {
    sessionId: randomId(),
    email: payload.email.trim(),
    name: payload.name.trim(),
    phone: payload.phone.trim(),
    otp: generateOtp(),
    expiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes
    verified: false,
  };
  localStorage.setItem(LS_OTP_SESSION, JSON.stringify(session));

  // In a real app, send the OTP via email/SMS. Here we log it for dev use.
  // eslint-disable-next-line no-console
  console.info("[DEV] OTP for", session.email, "=", session.otp);

  return {
    sessionId: session.sessionId,
    maskedEmail: maskEmail(session.email),
    maskedPhone: maskPhone(session.phone),
  };
};

export const verifyOtp = async (otp: string): Promise<OtpSession> => {
  await delay(300);
  const session = readSession();
  if (!session) throw new Error("No OTP session found. Restart registration.");
  if (Date.now() > session.expiresAt) {
    throw new Error("OTP has expired. Request a new code.");
  }
  if (otp !== session.otp) {
    throw new Error("Invalid OTP code.");
  }
  const updated = { ...session, verified: true };
  localStorage.setItem(LS_OTP_SESSION, JSON.stringify(updated));
  return updated;
};

export const submitProfile = async (
  profile: StudentProfile
): Promise<OtpSession> => {
  await delay(250);
  const session = readSession();
  if (!session || !session.verified) {
    throw new Error("OTP not verified.");
  }
  const updated = { ...session, profile };
  localStorage.setItem(LS_OTP_SESSION, JSON.stringify(updated));
  return updated;
};

export const submitDocuments = async (
  documents: DocumentVerification
): Promise<OtpSession> => {
  await delay(250);
  const session = readSession();
  if (!session || !session.verified) {
    throw new Error("OTP not verified.");
  }
  const updated = { ...session, documents };
  localStorage.setItem(LS_OTP_SESSION, JSON.stringify(updated));
  return updated;
};

export const finalizeRegistration = async (password: string) => {
  await delay(350);
  const session = readSession();
  if (!session || !session.verified) {
    throw new Error("Registration session is invalid or unverified.");
  }
  const passwordHash = await hashPassword(password);
  const users = getUsers();
  const user: UserRecord = {
    id: randomId(),
    name: session.name,
    email: session.email,
    phone: session.phone,
    profile: session.profile,
    documents: session.documents,
    passwordHash,
    createdAt: Date.now(),
  };
  users.push(user);
  setUsers(users);
  saveCurrentUser(user.id);
  // Clear session
  localStorage.removeItem(LS_OTP_SESSION);
  return user;
};

export const login = async (email: string, password: string) => {
  await delay(350);
  const users = getUsers();
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) throw new Error("Invalid email or password.");
  const hash = await hashPassword(password);
  if (hash !== user.passwordHash) throw new Error("Invalid email or password.");
  saveCurrentUser(user.id);
  return user;
};

// Utilities
const readSession = (): OtpSession | null => {
  try {
    const raw = localStorage.getItem(LS_OTP_SESSION);
    return raw ? (JSON.parse(raw) as OtpSession) : null;
  } catch {
    return null;
  }
};

const maskEmail = (email: string) => {
  const [local, domain] = email.split("@");
  if (!domain) return email;
  const head = local.slice(0, 2);
  return `${head}${"*".repeat(Math.max(local.length - 2, 1))}@${domain}`;
};

const maskPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  if (digits.length <= 4) return phone;
  return `${"*".repeat(digits.length - 4)}${digits.slice(-4)}`;
};

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function hashPassword(password: string): Promise<string> {
  const enc = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", enc);
  const bytes = Array.from(new Uint8Array(digest));
  return bytes.map((b) => b.toString(16).padStart(2, "0")).join("");
}
