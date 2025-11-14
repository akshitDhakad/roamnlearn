import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Avatar,
} from "@mui/material";
import {
  IconX,
  IconGauge,
  IconUsers,
  IconSchool,
  IconFile,
  IconBell,
  IconHelp,
  IconList,
  IconBriefcase,
  IconEye,
  IconHelpCircle,
  IconMapPin,
  IconUser,
} from "@tabler/icons-react";
import { ADMIN_NAV_ITEMS } from "../../constants/admin";

interface AdminSidebarProps {
  open: boolean;
  onClose: () => void;
  activeItemId?: string;
  onItemSelect?: (id: string) => void;
}

/**
 * Admin sidebar with sections for managing the platform
 */
const AdminSidebar = ({
  open,
  onClose,
  activeItemId,
  onItemSelect,
}: AdminSidebarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const iconMap: Record<string, React.ReactNode> = {
    gauge: <IconGauge size={20} />,
    "map-pin": <IconMapPin size={20} />,
    users: <IconUsers size={20} />,
    school: <IconSchool size={20} />,
    file: <IconFile size={20} />,
    bell: <IconBell size={20} />,
    help: <IconHelp size={20} />,
    list: <IconList size={20} />,
    briefcase: <IconBriefcase size={20} />,
    eye: <IconEye size={20} />,
    "help-circle": <IconHelpCircle size={20} />,
  };

  const drawerContent = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        backgroundColor: "#424242",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, color: "white" }}>
          Admin
        </Typography>
        {isMobile && (
          <IconButton onClick={onClose} size="small" sx={{ color: "white" }}>
            <IconX size={20} />
          </IconButton>
        )}
      </Box>

      <List sx={{ pt: 1, flex: 1, overflow: "auto" }}>
        {ADMIN_NAV_ITEMS.map((item) => {
          const isSelected = activeItemId === item.id;
          const handleClick = () => {
            onItemSelect?.(item.id);
            window.location.hash = "admin";
            onClose();
          };

          return (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={handleClick}
                selected={isSelected}
                sx={{
                  py: 1.25,
                  px: 2,
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#000000",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#1a1a1a",
                    },
                    "& .MuiListItemIcon-root": {
                      color: "white",
                    },
                  },
                  "& .MuiListItemIcon-root": {
                    color: "white",
                    minWidth: 40,
                  },
                }}
              >
                <ListItemIcon>
                  {iconMap[item.icon] || <IconGauge size={20} />}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: isSelected ? 600 : 500,
                    color: "white",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: theme.palette.primary.main,
            color: "white",
          }}
        >
          <IconUser size={18} />
        </Avatar>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 500, color: "white" }}>
            Admin
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            admin@roannlearn.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant={isMobile ? "temporary" : "persistent"}
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        width: open ? 280 : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 280,
          boxSizing: "border-box",
          borderRight: `1px solid ${theme.palette.divider}`,
          backgroundColor: "#424242",
          ...(isMobile
            ? {}
            : {
                position: "relative",
                height: "100vh",
              }),
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default AdminSidebar;
