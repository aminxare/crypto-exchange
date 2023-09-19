import CryptoList from "./components/CryptoList";
import PriceProvider from "./context/price";
import CurrencyModal from "./components/CurrencyModal";
import { Grid } from "@mui/material";
import Currencies from "./components/Currencies";

function Crypto() {
  return (
    <PriceProvider>
      <Grid container padding={2} spacing={1} >
        <Grid item xs={12} >
          <CurrencyModal />
        </Grid>
        <Grid item> 
          <Currencies />
        </Grid>
        <Grid item>
          <CryptoList />
        </Grid>
      </Grid>
    </PriceProvider>
  );
}

export default Crypto;
