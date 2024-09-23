import { Card, CardBody, Image, Heading, Flex, Spacer } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformList from "./PlatformList"
import MetaScoreBox from "./MetaScoreBox"

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    const background_image_url = game?.background_image.replace("/media/","/media/crop/600/400/") ?? ""
    return <Card minH='300px'>
        <Image src={background_image_url} />
        <CardBody>
            <Flex>
                <PlatformList platforms={game?.parent_platforms?.map(p => p.platform) ?? []} />
                <Spacer />
                <MetaScoreBox metacriticNumber={game?.metacritic ?? 0} />
            </Flex>
            <Heading as='h5' size='md'>{game?.name ?? "Game not available"}</Heading>
        </CardBody>
    </Card>;
}

export default GameCard