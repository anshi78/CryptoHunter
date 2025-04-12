import {
    AppBar,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography,
    createTheme,
    ThemeProvider,
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  import { CryptoState } from "../CryptoContext"; 

  
  const darkTheme = createTheme({
    palette: {
      mode: "dark", 
      primary: {
        main: "#fff",
      },
    },
  });
  
  const Header = () => {
    const navigate = useNavigate();
    const { currency, setCurrency } = CryptoState();
  
    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography
                onClick={() => navigate("/")}
                variant="h6"
                sx={{
                  flex: 1,
                  color: "gold",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Crypto Hunter
              </Typography>
  
              <Select
                variant="outlined"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                sx={{
                  width: 100,
                  height: 40,
                  marginLeft: 2,
                  color: "white",
                  borderColor: "white",
                  backgroundColor: "#2b2b2b",
                }}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    );
  };
  
  export default Header;
  