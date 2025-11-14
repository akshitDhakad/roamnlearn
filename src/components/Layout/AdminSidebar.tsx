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
} from "@mui/material";
import {
  IconX,
  IconGauge,
  IconUsers,
  IconSchool,
  IconBook2,
  IconChartBar,
  IconSettings,
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
    users: <IconUsers size={20} />,
    school: <IconSchool size={20} />,
    book: <IconBook2 size={20} />,
    // Fallback to a supported icon for marketing; IconMegaphone is not available in this package version
    megaphone: <IconUsers size={20} />,
    "chart-bar": <IconChartBar size={20} />,
    settings: <IconSettings size={20} />,
  };

  const drawerContent = (
    <Box sx={{ width: 280, height: "100%" }}>
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "primary.main" }}
        >
          Admin
        </Typography>
        {isMobile && (
          <IconButton onClick={onClose} size="small">
            <IconX size={20} />
          </IconButton>
        )}
      </Box>

      <List sx={{ pt: 1 }}>
        {ADMIN_NAV_ITEMS.map((item) => {
          const isSelected = activeItemId === item.id;
          const handleClick = () => {
            onItemSelect?.(item.id);
            // keep simple: ensure we're on admin route (hash-based)
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
                  "&:hover": {
                    backgroundColor: "action.hover",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "primary.light",
                    color: "primary.contrastText",
                    "&:hover": {
                      backgroundColor: "primary.main",
                    },
                    "& .MuiListItemIcon-root": {
                      color: "primary.contrastText",
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  {iconMap[item.icon] || <IconGauge size={20} />}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Divider sx={{ my: 2 }} />
      <Box sx={{ px: 2, pb: 2, color: "text.secondary" }}>
        <Typography variant="caption">
          Manage content, users, and platform settings
        </Typography>
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
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 280,
          borderRight: `1px solid ${theme.palette.divider}`,
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default AdminSidebar;
