import type { IFavouriteCategory } from "@/types/general";
import { FaBook, FaMusic, FaFilm, FaTv, FaPlayCircle } from "react-icons/fa";

export const favouritesCategories: Array<IFavouriteCategory> = [
  {
    slug: "books",
    title: "Books",
    description: "My favourite books that have influenced my thinking and development journey.",
    image: "/images/favourites/entities/books.jpg",
    icon: FaBook,
  },
  {
    slug: "playlists",
    title: "Playlists",
    description: "Curated playlists that keep me focused and inspired during coding sessions.",
    image: "/images/favourites/entities/playlists.jpg",
    icon: FaMusic,
  },
  {
    slug: "animations",
    title: "Animations",
    description: "Captivating animated films and series that showcase the power of storytelling.",
    image: "/images/favourites/entities/animations.jpg",
    icon: FaFilm,
  },
  {
    slug: "series",
    title: "Series",
    description: "Engaging TV series that have kept me entertained and inspired.",
    image: "/images/favourites/entities/series.jpg",
    icon: FaTv,
  },
  {
    slug: "anime",
    title: "Anime",
    description: "My favourite anime series that combine stunning visuals with compelling narratives.",
    image: "/images/favourites/entities/anime.jpg",
    icon: FaPlayCircle,
  },
  // { title: "Poems", description: "Beautiful poems that resonate with me and inspire my creative thinking.", image: "/images/favourites/entities/poems.jpg", id: "poems", icon: "poems" },
];
