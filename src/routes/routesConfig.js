import Menu from "../modules/Menu";
import Cart from "../modules/Cart";

//isSecure =true for logged in secure screens which are only accessible by logged in user
//forSuperAdminOnly =true for route that are only for superAdmin

const routes = [
  {
    path: "/menu",
    component: GameDetails,
    exact: true,
  },
  {
    path: "/cart",
    component: Game,
    exact: true,
  },
];

export default routes;
