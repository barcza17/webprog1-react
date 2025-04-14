import Home from "./routes/home";
import App1 from "./routes/app1";
import App2 from "./routes/app2";

const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/app1",
    Component: App1,
  },
  {
    path: "/app2",
    Component: App2,
  },
];

export default routes;
