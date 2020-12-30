import Vue from "vue";
import VueRouter from "vue-router";
import HotelCardDetail from "../components/HotelCardDetail";
import LandingPage from "../views/LandingPage";
import ConfirmationPage from "../views/ConfirmationPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: LandingPage
  },

  {
    path: "/hotel/:id",
    component: HotelCardDetail
  },
  {
    path: "/hotel/:id/checkout",
    component: ConfirmationPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
