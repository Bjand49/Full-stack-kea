import { Text, List, VStack, Image, HStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres"

const GenreList = () => {
    const { data } = useGenres();

    return <List>
        <VStack>
            {
                data.map((g) => {
                    return <HStack>

                        <Image h={2} w={2} src={g.image_background}></Image>
                        <Text>{g.name}</Text>
                    </HStack>
                }
                )
            }
        </VStack>
    </List>
}
export default GenreList