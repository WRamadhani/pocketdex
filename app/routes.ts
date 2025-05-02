import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // index("routes/home.tsx"),
  index("routes/pokemonList.tsx"),
  route("about", "routes/about.tsx"),
  route("pokemon-detail", "routes/pokemonDetail.tsx"),
] satisfies RouteConfig;
