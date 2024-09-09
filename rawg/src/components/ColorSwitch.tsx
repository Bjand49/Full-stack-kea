import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

const ColorSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return <HStack>
        <Switch 
        colorScheme="green" 
        checked={colorMode === "dark"}
        onChange={toggleColorMode}> </Switch>
        <Text>Toggle colorscheme</Text>
    </HStack>
}

export default ColorSwitch;