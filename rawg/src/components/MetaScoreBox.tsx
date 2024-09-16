import { Badge, Text } from "@chakra-ui/react"

interface Props {
    metacriticNumber: number;
}

const MetaScoreBox = ({ metacriticNumber }: Props) => {
    let metaColor;

    if (metacriticNumber > 75)
        metaColor = "green"
    else if (metacriticNumber > 50)
        metaColor = "yellow"
    else
        metaColor = "red"

    return <Badge variant='outline' colorScheme={metaColor}>
        <Text>{metacriticNumber}</Text>
    </Badge>
}
export default MetaScoreBox