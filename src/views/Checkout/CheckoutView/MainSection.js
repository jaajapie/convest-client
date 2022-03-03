import React from "react";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const CheckoutArea = styled("div")(({ theme }) => ({
  marginTop: "5%",
  width: "100%",
  paddingLeft: "10%",
  paddingRight: "10%",
  paddingBottom: "5%",
  display: "flex",
  flexDirection: "row",

  [theme.breakpoints.down("sm")]: {},
}));
const CheckoutLeftArea = styled("div")(({ theme }) => ({
  width: "60%",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "120vh",
  [theme.breakpoints.down("sm")]: {},
}));
const CheckoutRightArea = styled("div")(({ theme }) => ({
  width: "30%",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "120vh",
  position: "fixed",
  right: 0,
  marginRight: "10%",
  [theme.breakpoints.down("sm")]: {},
}));
const H5Head = styled("h5")(({ theme }) => ({
  fontSize: "22px",
  color: "#515a6e",

  [theme.breakpoints.down("sm")]: {},
}));
const H5SubHead = styled("h5")(({ theme }) => ({
  fontSize: "22px",
  color: "#515a6e",

  [theme.breakpoints.down("sm")]: {},
}));
const CardArea = styled("div")(({ theme }) => ({
  position: "relative",
  marginBottom: "2rem",

  [theme.breakpoints.down("sm")]: {},
}));
const CardInnerArea = styled("div")(({ theme }) => ({
  borderRadius: "1rem",
  height: "auto",
  minHeight: "initial",
  width: "100%",
  background: "rgb(255, 255, 255)",
  transition: "height 0.2ms ease-out 0s",
  border: "1px solid rgb(228, 232, 239)",
  boxSizing: "border-box",
  padding: "15px",

  [theme.breakpoints.down("sm")]: {},
}));
const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "100%",

  [theme.breakpoints.down("sm")]: {},
}));
const SelectCurrency = styled(TextField)(({ theme }) => ({
  marginTop: "8px",

  [theme.breakpoints.down("sm")]: {},
}));
const CurrencyListArea = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  position: "relative",

  [theme.breakpoints.down("sm")]: {},
}));

const InsuranceLogo = styled("img")(({ theme }) => ({
  width: "auto",
  height: "40px",
  marginRight: "10px",
}));
const InsuranceName = styled("h4")(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "700",
  marginLeft: "5px",
  lineHeight: "1px",
  marginRight: "10px",
}));

const KeyValueArea = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  minWidth: "20%",
}));
const KeyText = styled("h4")(({ theme }) => ({
  fontSize: "16px",
  color: "rgb(122, 110, 170)",
  textAlign: "left",
  lineHeight: "26px",
  margin: "0px",
}));

const ValueText = styled("h4")(({ theme }) => ({
  fontSize: "12px",
  color: "rgb(40, 13, 95);",
  textAlign: "left",
  lineHeight: "26px",
  margin: "0px",
}));

const RadioCustom = styled(FormControlLabel)(({ theme }) => ({
  fontSize: "12px",
  color: "rgb(40, 13, 95);",
  textAlign: "left",
  lineHeight: "26px",
  margin: "0px",
}));
const PresetAreaArea = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  minWidth: "20%",
}));
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    color: "#1db371",
    borderLeft: "1px solid #1db371 !important",
    border: "1px solid #1db371",

    fontSize: "12px",
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
  "& .Mui-selected": {
    backgroundColor: "#1db371",
    color: "#ffff",
    borderRadius: "8px",
    fontSize: "12px",
  },
}));

const currencies = [
  {
    value: "ETH",
    label: "ETH",
  },
  {
    value: "mUSD",
    label: "mUSD",
  },
  {
    value: "WETH",
    label: "WETH",
  },
  {
    value: "DAI",
    label: "DAI",
  },
];

const MainSection = () => {
  const [alignment, setAlignment] = React.useState("0");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [currency, setCurrency] = React.useState("ETH");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <CheckoutArea>
      <CheckoutLeftArea>
        <CardArea>
          <CardInnerArea>
            <H5Head>Save 54%: Reduce the cost of cover with wNXM</H5Head>
            <p>
              wNXM can be bought at 0.0153 ETH instead of 0.0335 ETH and
              redeemed 1:1 to NXM. Here s how:
            </p>
            <p>1. Get a quote below and choose to pay in NXM.</p>
            <p>2. Buy the equivalent amount of wNXM on CowSwap.</p>
            <p>3. Unwrap wNXM to NXM here.</p>
            <p>4. Proceed with the cover purchase on this page.</p>
          </CardInnerArea>
        </CardArea>
        <CardArea>
          <CardInnerArea>
            <H5Head>Quote details</H5Head>
            <p>
              This product covers any token or combination of tokens you have in
              the protocol. In case of a claim, you ll receive the equivalent of
              your lost funds in ETH up to the covered amount. Alternatively you
              can select DAI.
            </p>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <PresetAreaArea>
                  <StyledToggleButtonGroup
                    size="small"
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                  >
                    <ToggleButton value="30" aria-label="left aligned">
                      39D
                    </ToggleButton>
                    <ToggleButton value="90" aria-label="centered">
                      90D
                    </ToggleButton>
                    <ToggleButton value="360" aria-label="right aligned">
                      1Y
                    </ToggleButton>
                  </StyledToggleButtonGroup>
                </PresetAreaArea>
              </Grid>
              <Grid item xs={12} md={6}>
                <PresetAreaArea>
                  <StyledToggleButtonGroup
                    size="small"
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                  >
                    <ToggleButton value="Max" aria-label="left aligned">
                      Max
                    </ToggleButton>
                  </StyledToggleButtonGroup>
                </PresetAreaArea>
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomTextField
                  fullWidth
                  label="Period"
                  id="outlined-start-adornment"
                  sx={{ m: 1 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">kg</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomTextField
                  fullWidth
                  label="Amount"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "32ch" }}
                />
                <SelectCurrency
                  id="outlined-select-currency"
                  select
                  value={currency}
                  onChange={handleChange}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </SelectCurrency>
              </Grid>
            </Grid>
          </CardInnerArea>
        </CardArea>
        <CardArea>
          <CardInnerArea>
            <H5Head>Terms and conditions</H5Head>
            <p>Covered:</p>
            <p>
              <ul>
                <li>contract bugs</li>
                <li>economic attacks, including oracle failures</li>
                <li>governance attacks</li>
              </ul>
            </p>
            <p>Supported chains:</p>
            <p>
              <CurrencyListArea>
                <InsuranceLogo src="https://app.insurace.io/asset/product/Biswap.png"></InsuranceLogo>
                <InsuranceName>Ethereum</InsuranceName>
                <InsuranceLogo src="https://app.insurace.io/asset/product/Biswap.png"></InsuranceLogo>
                <InsuranceName>Arbitrum</InsuranceName>
                <InsuranceLogo src="https://app.insurace.io/asset/product/Biswap.png"></InsuranceLogo>
                <InsuranceName>Avalanche</InsuranceName>
              </CurrencyListArea>
            </p>
            <p>Claiming:</p>
            <p>
              <ul>
                <li>
                  You must provide proof of the incurred loss at claim time.
                </li>
                <li>
                  You should wait 72 hours after the event, so assessors have
                  all details to make a decision.
                </li>
                <li>
                  You can claim up to 35 days after the cover period expires,
                  given your cover was active when the incident happened.
                </li>
              </ul>
            </p>
            <p>
              Protocol Cover for OlympusDAO covers assets in OlympusDAO v1 and
              OlympusDAO v2.
            </p>
            <p>
              This cover is not a contract of insurance. Cover is provided on a
              discretionary basis with Nexus Mutual members having the final say
              on which claims are paid. Check out full details here.
            </p>
          </CardInnerArea>
        </CardArea>
      </CheckoutLeftArea>
      <CheckoutRightArea>
        <CardArea>
          <CardInnerArea>
            <H5Head>Summary</H5Head>
            <p>
              <CurrencyListArea>
                <InsuranceLogo src="https://app.insurace.io/asset/product/Biswap.png"></InsuranceLogo>
                <InsuranceName>OlympusDAO</InsuranceName>
              </CurrencyListArea>
            </p>

            <KeyValueArea>
              <KeyText>Capacity:</KeyText>
              <ValueText>1.5k ETH / 4m DAI </ValueText>
            </KeyValueArea>
            <KeyValueArea>
              <KeyText>Pay in:</KeyText>
              <ValueText>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  defaultValue="eth"
                >
                  <RadioCustom value="eth" control={<Radio />} label="ETH" />
                  <RadioCustom value="nxm" control={<Radio />} label="NXM" />
                </RadioGroup>
              </ValueText>
            </KeyValueArea>
            <KeyValueArea>
              <KeyText>You ll pay:</KeyText>
              <ValueText>0.0000 ETH </ValueText>
            </KeyValueArea>
          </CardInnerArea>
        </CardArea>
      </CheckoutRightArea>
    </CheckoutArea>
  );
};

export default MainSection;
