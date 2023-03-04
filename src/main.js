import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import axios from "axios";
import VueAxios from "vue-axios";
import materialKit from "./material-kit";

const app = createApp(App);
app.use(VueAxios,axios);
app.use(createPinia());
app.use(router);
app.use(materialKit);
app.mount("#app");
