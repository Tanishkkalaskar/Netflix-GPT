export const AUTH_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const DEFAULT_AVATAR_URL =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const GET_MOVIE_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const MOVIE_POSTER_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const POPULAR_MOVIE_URL = "https://api.themoviedb.org/3/movie/popular";

export const TOP_RATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const UPCOMING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/upcoming";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hin", name: "Hindi" },
  { identifier: "spa", name: "Spanish" },
];
