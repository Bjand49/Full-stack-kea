import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/navbar"
import axios from "axios"
import { useEffect, useState } from "react";

const instance = axios.create({
  baseURL: "https://api.rawg.io/api",
  timeout: 1000,
  params: {
    key: import.meta.env.VITE_API_KEY
  }
});

interface GameResult {
  id: Number,
  results: Game[]
}

interface Game {
  id: Number,
  name: String
}

const setGames = () => {
  return instance.get("/games")
}

function App() {
  const [games, setGames] = useState<Game[]>([])
  useEffect (() => {
    instance.get<GameResult>("/games")
    .then((response)=> setGames(response.data.results))
    .catch((error) => console.log(error))
  },[])
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      h='200px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' bg='orange.300' area={'header'}>
        <NavBar />
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'nav'}>
        Nav
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'}>
        <ul>
          <li>test</li>
          {games.map(g => (<li>{g.name}</li>))}
        </ul>
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  )
}

export default App
