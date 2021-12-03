import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import ArtDetail from "./components/ArtDetail.vue";
import Art from "./components/Art.vue";
import NotFound from "./components/NotFound.vue";
import ReviewCreate from "./components/ReviewCreate.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue";
import Artist from "./components/Artist.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/account", component: Account },
    { path: "/login", component: Login },
    { path: "/art", component: Art },
    {
      path: "/art/:pk",
      component: ArtDetail,
      children: [{ path: "review", component: ReviewCreate }],
    },
    { path: "/artist", component: Artist },
    { path: "/signup", component: Signup },
    { path: "/:invalidroute(.*)", component: NotFound },
  ],
});

export default router;
