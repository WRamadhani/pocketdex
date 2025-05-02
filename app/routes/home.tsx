// import React from "react";

// import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";
// import { useGetPokemonListQuery } from "~/infrastructure/react-query/hooks/useGetPokemonListQuery";
// import { useUiStore } from "~/infrastructure/state/uiStore";
// // import { loader } from "./about";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

// export function clientLoader({
//   params,
// }: Route.ClientLoaderArgs) {
//   const {
//     data,
//     error,
//     fetchNextPage,
//     hasNextPage,
//     isFetchingNextPage,
//     status,
//   } = useGetPokemonListQuery();

//   if (status === "error") {
//     return <div>Error: {error.message}</div>;
//   }

//   // return data?.pages.map((group, i) => group.results);
// }

// export default function Home({
//   loaderData,
// }: Route.ComponentProps) {
//   // return <Welcome />;
//   const data = loaderData;
//   console.log(data);

//   const searchTerm = useUiStore((state) => state);
//   const setSearchTerm = useUiStore((state) => state.setSearchTerm);

//   const handleSearchTermChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setSearchTerm(event.target.value);
//   };

  

//   // console.log(data?.pages.map((group, i) => group.results));

//   return (
//     <div>
//       <h2>Pokemon List</h2>
//       {data?.pages.map((group, i) => (
//         <React.Fragment key={i}>
//           {group.results.map((pokemon) => (
//             <div key={pokemon.name}>
//               <div>{pokemon.name}</div>
//               <div>{pokemon.color}</div>
//             </div>
//           ))}
//         </React.Fragment>
//       ))}
//       <a href="/about">asd</a>
//     </div>
//   );
// }
