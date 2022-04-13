import { Grid, Paper, Typography, Box } from "@mui/material";
import { AccessTime } from "@mui/icons-material"

const PortfolioCard = () => {
  return (
    <Grid item xs={6}>
      <Paper elevation={5}>
          <Box paddingX={1}>
          <Typography variant="h4" component="h2">
              TITLE
          </Typography>
          </Box>
          <Box>
          <img src="/images/lighttrails.jpg" alt="missing pic" />
          </Box>
          <Box sx={{
              display: "flex",
              alignItems: "center",
          }}>
            <AccessTime />
          </Box>
      </Paper>
    </Grid>
  );
};

export default PortfolioCard;
