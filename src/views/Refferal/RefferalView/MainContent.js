import TopContentSection from "./TopContentSection";
import TableContent from "./TableContent";

import { styled } from "@mui/material/styles";

const RefferalContentArea = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  paddingTop: "15%",
  width: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#000",
  paddingRight: "3rem",
  paddingLeft: "3rem",
  transition: "0.3s",
  borderBottom: "1px solid #ffffff14",
  backgroundColor: "#ffff",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    paddingRight: "1rem",
    paddingLeft: "1rem",
  },
}));

const MainContent = () => {
  return (
    <RefferalContentArea>
      <TopContentSection></TopContentSection>
      <TableContent></TableContent>
    </RefferalContentArea>
  );
};

export default MainContent;
