import { VStack, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres"

const GenreList = () => {
    const { data, error, isLoading } = useGenres();

    return <VStack justifyContent="space-around">
        {
            data.map((g) => (
                <Text>{g.name}</Text>
            ))
        }
    </VStack>
}
export default GenreList