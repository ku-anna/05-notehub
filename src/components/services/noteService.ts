import axios from "axios";

const BASE_URL = "https://notehub-public.goit.study/api/";

const VITE_NOTEHUB_TOKEN = import.meta.env.VITE_NOTEHUB_TOKEN;
if (!VITE_NOTEHUB_TOKEN) {
  throw new Error(
    "NOTEHUB API token is missing. Please set VITE_TMDB_TOKEN in your environment."
  );
}
