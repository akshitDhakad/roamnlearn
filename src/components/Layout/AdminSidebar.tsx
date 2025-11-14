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
        width: open ? 280 : 64,
        height: "100vh",
        maxHeight: "100vh",
        backgroundColor: "#424242",
        color: "white",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "space-between" : "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          minHeight: 64,
        }}
      >
        {open ? (
          <>
            <Typography variant="h6" sx={{ fontWeight: 700, color: "white" }}>
              Admin
            </Typography>
            {isMobile && (
              <IconButton
                onClick={onClose}
                size="small"
                sx={{ color: "white" }}
              >
                <IconX size={20} />
              </IconButton>
            )}
          </>
        ) : (
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: 1,
              backgroundColor: theme.palette.primary.main,
            }}
          />
        )}
      </Box>

      <List
        sx={{
          pt: 1,
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "2px",
          },
        }}
      >
        {ADMIN_NAV_ITEMS.map((item) => {
          const isSelected = activeItemId === item.id;
          const handleClick = () => {
            onItemSelect?.(item.id);
            window.location.hash = "admin";
            if (isMobile) {
              onClose();
            }
          };

          return (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={handleClick}
                selected={isSelected}
                sx={{
                  py: 1.25,
                  px: open ? 2 : 1.5,
                  justifyContent: open ? "flex-start" : "center",
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
                    minWidth: open ? 40 : 0,
                    justifyContent: "center",
                  },
                }}
              >
                <ListItemIcon>
                  {iconMap[item.icon] || <IconGauge size={20} />}
                </ListItemIcon>
                {open && (
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isSelected ? 600 : 500,
                      color: "white",
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
      <Box
        sx={{
          p: open ? 2 : 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "flex-start" : "center",
          gap: open ? 1.5 : 0,
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          minHeight: 80,
        }}
      >
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: theme.palette.primary.main,
            color: "white",
            flexShrink: 0,
          }}
        >
          <IconUser size={18} />
        </Avatar>
        {open && (
          <Box sx={{ flex: 1, ml: 1.5 }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, color: "white" }}
            >
              Admin
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "rgba(255, 255, 255, 0.7)" }}
            >
              admin@roannlearn.com
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant={isMobile ? "temporary" : "persistent"}
      open={open || !isMobile}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        width: open ? 280 : 64,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 280 : 64,
          boxSizing: "border-box",
          borderRight: "none",
          backgroundColor: "#424242",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          maxHeight: "100vh",
          overflow: "hidden",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default AdminSidebar;
