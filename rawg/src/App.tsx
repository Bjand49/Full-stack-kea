import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'200px 1fr'}
      h='200px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' bg='orange.300' area={'header'}>
        <NavBar />
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'nav'}>
        <GenreList/>
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'}>
        <GameGrid/>
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  )
}

export default App
