import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { cursiveHeaders } from "./theme";
import { mainTabs } from "./theme";

const navLinksNum = ["01", "02", "03", "04", "05"];
const navLinks = [
  "LOCATION",
  "THE PROPERTY",
  "GALLERY",
  "LOCAL AREA",
  "CONTACT",
];
export default function Navigation() {
  const [value, setValue] = useState(0);
  return (
    <>
      <ThemeProvider theme={mainTabs}>
        <div
          style={{
            fontFamily: mainTabs.typography.fontFamily,
            position: "fixed",
            top: "0",
            width: "100%",
            backgroundColor: "white",
            zIndex: "999",
          }}
        >
          {/* <Tabs centered sx={{ marginBottom: "10px" }}>
            {navLinksNum.map((page, index) => (
              <Tab
                key={page}
                value={index}
                label={page}
                sx={{ color: "#2e323b" }}
              />
            ))}
          </Tabs> */}
          <Tabs
            value={value}
            centered
            sx={{
              marginBottom: "10px",
              position: "static",
            }}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#2e323b",
              },
            }}
          >
            {navLinks.map((page, index) => (
              <Tab
                key={page}
                value={index}
                label={page}
                sx={{ color: "#2e323b" }}
              />
            ))}
          </Tabs>
          <ThemeProvider theme={cursiveHeaders}>
            <div
              style={{
                fontFamily: cursiveHeaders.typography.fontFamily,
              }}
            >
              <Typography
                sx={{
                  fontSize: "5vh",
                  color: "white",
                  backgroundColor: "#2e323b",
                  width: "200px",
                  // height: "100px",
                  paddingLeft: "2vh",
                  paddingRight: "2vh",
                  paddingTop: "5vh",
                  position: "absolute",
                  top: "-1.2vh",
                  left: "-0.5vw",
                }}
              >
                Shippen House .
              </Typography>
            </div>
          </ThemeProvider>
        </div>
      </ThemeProvider>
    </>
  );
}
