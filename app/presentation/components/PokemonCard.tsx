import { Link } from "react-router";

interface PokemonCardProps {
    id: number;
    name: string;
    color: string;
    url: string;
    imageUrl: string;
}

const colorMap: {[key: string]: string} = {
    black: ""
}