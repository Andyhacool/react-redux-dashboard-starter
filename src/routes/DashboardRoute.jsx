// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";

// core components/views
import DashboardPage from "../views/Dashboard/Dashboard.jsx";

const DashboardRoutes = [
  {
    path: "/Dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  { redirect: true, path: "/", to: "/Dashboard", navbarName: "Redirect" }
];

export default DashboardRoutes;
