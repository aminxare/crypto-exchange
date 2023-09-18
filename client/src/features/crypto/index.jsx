import CryptoList from "./components/CryptoList";
import PriceProvider from "./context/price";

function index() {
  return (
    <PriceProvider>
      <CryptoList />
    </PriceProvider>
  );
}

export default index;
