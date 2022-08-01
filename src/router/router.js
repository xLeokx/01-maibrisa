import {createRouter, createWebHashHistory} from 'vue-router'
import Snacks from "../pages/SnacksMenu.vue";
import Beverages from "../pages/BeveragesMenu.vue";
import NonAlcoholicCocktails from "../pages/NonAlcoholicCocktails.vue";
import CocktailsMenu from "../pages/CocktailsMenu.vue";
import Menu from "../pages/Menu.vue";
import Error404Page from "../pages/Menu.vue";

const routes = [
  { path: "/", component: Menu },
  { path: "/Snacks", component: Snacks },
  { path: "/Beverages", component: Beverages },
  { path: "/NonAlcoholicCocktails", component: NonAlcoholicCocktails },
  { path: "/CocktailsMenu", component: CocktailsMenu },
  { path: "/:pathMatch(.*)*", component: Error404Page },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
