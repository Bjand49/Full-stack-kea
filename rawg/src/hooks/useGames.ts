import useData from "./useData";

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[]
    metacritic: number
}

export interface Platform {
    id: string,
    slug: string,
    name: string
}

const useGames = () => useData<Game>("/games")
export default useGames