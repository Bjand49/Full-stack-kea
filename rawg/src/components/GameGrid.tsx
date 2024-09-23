import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
    const { data, error, isLoading } = useGames();
    const skeletonCount = isLoading && data.length === 0 ? 20 : data.length;

    // Create an array for mapping skeletons or games
    const itemsToDisplay = Array.from({ length: skeletonCount });


    return (
        <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            spacing={10}
            padding={10}
        >
            {error && <p>{error}</p>}

            {itemsToDisplay.map((_, index) => (
                <Skeleton isLoaded={!isLoading} fadeDuration={5} height="19rem" key={index}>
                    <GameCard game={data[index]} />
                </Skeleton>
            ))}

        </SimpleGrid>
    );
};

export default GameGrid;