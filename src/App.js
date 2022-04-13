
import PortfolioCard from "./components/portfolio";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container spacing={2}>
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
