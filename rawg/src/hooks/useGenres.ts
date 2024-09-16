import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import useData from "./useData";

export interface Genre {
    id: number,
    name: string,
    slug: string;
    image_background: string
}

interface GenreResponse {
    results: Genre[],
    count:number
}

const useGenres = () => useData<Genre>("/genres")


export default useGenres