import { Box, Paper, Typography, Stack, Divider, Grid } from "@mui/material";
import {
  IconUsers,
  IconSchool,
  IconBook2,
  IconCurrencyRupee,
} from "@tabler/icons-react";
import AdminLayout from "../../components/layout/AdminLayout";

const StatCard = ({
  label,
  value,
  icon,
  color,
}: {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: 2,
            display: "grid",
            placeItems: "center",
            bgcolor: color,
            color: "primary.contrastText",
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography variant="overline" sx={{ color: "text.secondary" }}>
            {label}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {value}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

/**
 * Admin dashboard page with sidebar and content section
 */
const AdminDashboard = () => {
  return (
    <AdminLayout title="Admin Dashboard" activeItemId="overview">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            label="Total Students"
            value="12,480"
            icon={<IconUsers size={20} />}
            color="#1976d2"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            label="Institutes"
            value="312"
            icon={<IconSchool size={20} />}
            color="#2e7d32"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            label="Courses"
            value="1,245"
            icon={<IconBook2 size={20} />}
            color="#9c27b0"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            label="Revenue (MoM)"
            value="₹ 8.4M"
            icon={<IconCurrencyRupee size={20} />}
            color="#ed6c02"
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              minHeight: 280,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
              Overview
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              This is the admin dashboard content area. Add charts, tables, and
              analytics here.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              minHeight: 280,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
              Recent activity
            </Typography>
            <Stack spacing={1.5}>
              {[
                "New institute onboarded",
                "Course published: Data Science 101",
                "Marketing campaign launched",
                "5 new admin users invited",
              ].map((text) => (
                <Box key={text}>
                  <Typography variant="body2">{text}</Typography>
                  <Divider sx={{ mt: 1 }} />
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </AdminLayout>
  );
};

export default AdminDashboard;
