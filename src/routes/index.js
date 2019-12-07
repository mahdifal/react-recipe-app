import Home from "../Pages/Home";
import Recipes from "../Pages/Recipes";
import SingleRecipe from "../Pages/SingleRecipe";
import Default from "../Pages/Default";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/recipes",
    exact: true,
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
