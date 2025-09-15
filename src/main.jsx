import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "swiper/css";

// All extra global CSS in src/c/
import "./c/e106afa7b21e01c4.css";
import "./c/2a51bd9a57b07b4d.css";
import "./c/7a1ff1b3cbfa1e37.css";
import "./c/8d7812367497383c.css";
import "./c/alertify.min.css";
import "./c/dc1770d68e9c756a.css";
import "./c/default.min.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
