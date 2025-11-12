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
  IconHome,
  IconBook,
  IconUsers,
  IconInfoCircle,
  IconMail,
  IconSchool,
  IconCertificate,
  IconChartBar,
} from "@tabler/icons-react";
import { NAVIGATION_ITEMS } from "../../constants/constants";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Sidebar navigation component
 * Responsive drawer that slides in from the left on mobile/tablet
 */
const Sidebar = ({ open, onClose }: SidebarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Icon mapping for navigation items
  const iconMap: Record<string, React.ReactNode> = {
    home: <IconHome size={20} />,
    book: <IconBook size={20} />,
    users: <IconUsers size={20} />,
    "info-circle": <IconInfoCircle size={20} />,
    mail: <IconMail size={20} />,
  };

  const drawerContent = (
    <Box sx={{ width: 280, height: "100%" }}>
      {/* Header */}
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
          RomanLearn
        </Typography>
        {isMobile && (
          <IconButton onClick={onClose} size="small">
            <IconX size={20} />
          </IconButton>
        )}
      </Box>

      {/* Navigation Items */}
      <List sx={{ pt: 2 }}>
        {NAVIGATION_ITEMS.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{
                py: 1.5,
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
                {iconMap[item.icon] || <IconHome size={20} />}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Additional Menu Items */}
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              py: 1.5,
              px: 2,
              "&:hover": {
                backgroundColor: "action.hover",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <IconSchool size={20} />
            </ListItemIcon>
            <ListItemText
              primary="My Learning"
              primaryTypographyProps={{
                fontWeight: 500,
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              py: 1.5,
              px: 2,
              "&:hover": {
                backgroundColor: "action.hover",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <IconCertificate size={20} />
            </ListItemIcon>
            <ListItemText
              primary="Certificates"
              primaryTypographyProps={{
                fontWeight: 500,
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              py: 1.5,
              px: 2,
              "&:hover": {
                backgroundColor: "action.hover",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <IconChartBar size={20} />
            </ListItemIcon>
            <ListItemText
              primary="Progress"
              primaryTypographyProps={{
                fontWeight: 500,
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer
      variant={isMobile ? "temporary" : "persistent"}
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile
      }}
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

export default Sidebar;
