import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
interface Response<T> {
    count: number,
    results: T[]
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        apiClient.get<Response<T>>(endpoint)
            .then((response) => setData(response.data.results))
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false))
    }, [])
    return { data, error, isLoading };
}

export default useData