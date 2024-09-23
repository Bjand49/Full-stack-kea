import { HStack } from "@chakra-ui/react"
import { Platform } from "../hooks/useGames"
import GameIcon from "./GameIcon"

interface Props {
    platforms: Platform[]
}

const PlatformList = ({ platforms }: Props) => {
    return <HStack>
        {platforms.map(p => (
            <GameIcon key={p.id} console_name={p.slug} />
        ))}
    </HStack>

}

export default PlatformList