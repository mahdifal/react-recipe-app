import Home from "../components/Pages/Home";
import Recipes from "../components/Pages/Recipes";
import SingleRecipe from "../components/Pages/SingleRecipe";
import Default from "../components/Pages/Default";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/recipes",
    component: Recipes
  },
  {
    path: "/recipes/:id",
    component: SingleRecipe
  },
  {
    component: Default
  }
];

export default routes;
