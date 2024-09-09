import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/react.svg"
import ColorSwitch from "./ColorSwitch"

const NavBar = () => {
    return <HStack justifyContent="space-between">
        <Image src={logo} boxSize={10} />
        <h2>header</h2>
        <ColorSwitch />
    </HStack>
}
export default NavBar