import {
  Box,
  Paper,
  Typography,
  Stack,
  Chip,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  Fab,
  useTheme,
} from "@mui/material";
import {
  IconArrowUp,
  IconArrowDown,
  IconDotsVertical,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import AdminLayout from "../../components/layout/AdminLayout";
import { useState } from "react";

/**
 * Summary card component for dashboard metrics
 */
const StatCard = ({
  label,
  value,
  percentage,
  status,
  description,
  subItems,
  trend,
}: {
  label: string;
  value: string | number;
  percentage?: string;
  status?: string;
  description?: string;
  subItems?: Array<{ label: string; value: string; trend?: "up" | "down" }>;
  trend?: "up" | "down";
}) => {
  const theme = useTheme();
  const isPositive = trend === "up";
  const percentageColor = isPositive
    ? theme.palette.success.main
    : theme.palette.error.main;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        height: "100%",
      }}
    >
      <Stack spacing={1.5}>
        <Typography
          variant="overline"
          sx={{ color: "text.secondary", fontSize: "0.75rem" }}
        >
          {label}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          {value}
        </Typography>
        {percentage && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Chip
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  {isPositive ? (
                    <IconArrowUp size={14} />
                  ) : (
                    <IconArrowDown size={14} />
                  )}
                  {percentage}
                </Box>
              }
              size="small"
              sx={{
                backgroundColor: isPositive
                  ? `${theme.palette.success.main}20`
                  : `${theme.palette.error.main}20`,
                color: percentageColor,
                height: 24,
                fontSize: "0.7rem",
                fontWeight: 500,
              }}
            />
            {status && (
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {status}
              </Typography>
            )}
          </Box>
        )}
        {description && (
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        )}
        {subItems && (
          <Stack spacing={0.5} sx={{ mt: 1 }}>
            {subItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  {item.label}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  {item.trend === "up" && (
                    <IconArrowUp size={12} color={theme.palette.success.main} />
                  )}
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>
                    {item.value}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        )}
      </Stack>
    </Paper>
  );
};

/**
 * User table row data type
 */
interface UserRow {
  id: string;
  uniqueId: string;
  name: string;
  email: string;
  status: "Accepted" | "Pending" | "Rejected";
  phone: string;
  role: string;
}

/**
 * Admin dashboard page with all sections as shown in the image
 */
const AdminDashboard = () => {
  const theme = useTheme();
  const [selectedPeriod, setSelectedPeriod] = useState("3months");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  // Sample user data
  const users: UserRow[] = [
    {
      id: "1",
      uniqueId: "68f2fbc2f3098417873c09d7",
      name: "Akshit Dhakad",
      email: "akshit.mrski@gmail.com",
      status: "Accepted",
      phone: "",
      role: "user",
    },
  ];

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedUsers(users.map((user) => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (userId: string) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const isAllSelected =
    users.length > 0 && selectedUsers.length === users.length;

  return (
    <AdminLayout title="Admin Dashboard" activeItemId="dashboard">
      <Box sx={{ position: "relative", pb: 10 }}>
        {/* Summary Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 2,
            mb: 3,
          }}
        >
          <StatCard
            label="Total Colleges"
            value="0"
            percentage="0.0%"
            status="Needs attention"
            description="Based on monthly growth rate"
            trend="down"
          />
          <StatCard
            label="Total Users"
            value="4"
            percentage="0.0%"
            status="Growth slowing"
            description="Regular user accounts"
            trend="down"
          />
          <StatCard
            label="Upcoming Tours"
            value="1"
            percentage="100.0%"
            trend="up"
            subItems={[
              { label: "0 Active Tours", value: "Total Tours: 1", trend: "up" },
            ]}
          />
          <StatCard
            label="Active Users"
            value="5"
            percentage="125.0%"
            trend="up"
            subItems={[
              {
                label: "Verified accounts",
                value: "Of total registered users",
                trend: "up",
              },
            ]}
          />
        </Box>

        {/* Registration Trends Section */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 3,
            borderRadius: 2,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 2,
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                Registration Trends
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                College and user registrations over time
              </Typography>
            </Box>
            <Stack direction="row" spacing={1}>
              <Button
                variant={
                  selectedPeriod === "3months" ? "contained" : "outlined"
                }
                size="small"
                onClick={() => setSelectedPeriod("3months")}
                sx={{
                  textTransform: "none",
                  minWidth: 100,
                  backgroundColor:
                    selectedPeriod === "3months"
                      ? theme.palette.primary.main
                      : "transparent",
                }}
              >
                Last 3 months
              </Button>
              <Button
                variant={selectedPeriod === "30days" ? "contained" : "outlined"}
                size="small"
                onClick={() => setSelectedPeriod("30days")}
                sx={{
                  textTransform: "none",
                  minWidth: 100,
                  backgroundColor:
                    selectedPeriod === "30days"
                      ? theme.palette.primary.main
                      : "transparent",
                }}
              >
                Last 30 days
              </Button>
              <Button
                variant={selectedPeriod === "7days" ? "contained" : "outlined"}
                size="small"
                onClick={() => setSelectedPeriod("7days")}
                sx={{
                  textTransform: "none",
                  minWidth: 100,
                  backgroundColor:
                    selectedPeriod === "7days"
                      ? theme.palette.primary.main
                      : "transparent",
                }}
              >
                Last 7 days
              </Button>
            </Stack>
          </Box>
          {/* Chart area placeholder */}
          <Box
            sx={{
              height: 300,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px dashed",
              borderColor: "divider",
              borderRadius: 2,
              backgroundColor: "background.default",
            }}
          >
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Chart will be displayed here
            </Typography>
          </Box>
        </Paper>

        {/* User Table */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 2,
            border: "1px solid",
            borderColor: "divider",
            overflow: "hidden",
          }}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "background.default" }}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      indeterminate={selectedUsers.length > 0 && !isAllSelected}
                      checked={isAllSelected}
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Unique ID
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Email
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Status
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Phone
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Role
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Actions
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} hover>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleSelectUser(user.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{user.uniqueId}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {user.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{user.email}</Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={user.status}
                        size="small"
                        sx={{
                          backgroundColor: `${theme.palette.success.main}20`,
                          color: theme.palette.success.main,
                          fontWeight: 500,
                          height: 24,
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {user.phone || "-"}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{user.role}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="small">
                        <IconDotsVertical size={18} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Floating WhatsApp Button */}
        <Fab
          color="primary"
          aria-label="WhatsApp"
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            backgroundColor: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          <IconBrandWhatsapp size={24} />
        </Fab>
      </Box>
    </AdminLayout>
  );
};

export default AdminDashboard;
