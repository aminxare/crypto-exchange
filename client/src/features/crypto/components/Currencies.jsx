import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { usePrice } from "../context/price";

const CurrencyList = () => {
  const { currencies } = usePrice();

  return (
    <TableContainer
      component={Paper}
      elevation={3}
      style={{ minWidth: "15em" }}
    >
      <Table>
        <TableHead>
          <TableRow >
            <TableCell sx={{fontWeight: "bold"}}>Coin</TableCell>
            <TableCell sx={{fontWeight: "bold"}}>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencies.map((currency) => (
            <TableRow key={currency.id}>
              <TableCell primary={currency.name}>{currency.name}</TableCell>
              <TableCell primary={`$${currency.price}`}>
                {`$${currency.price}`}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Typography variant="h6" gutterBottom>
        Currency List
      </Typography>
      <List>
        {currencies.map((currency) => (
          <ListItem key={currency.id}>
            <ListItemText
              primary={currency.name}
            />
            <ListItemText primary={`$${currency.price}`} />
          </ListItem>
        ))}
      </List> */}
    </TableContainer>
  );
};

export default CurrencyList;
