import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { cursiveHeaders } from "./theme";
import { mainTabs } from "./theme";
import { ThemeProvider } from "@emotion/react";
import CarouselProperty from "./CarouselProperty";

export default function Property() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  const [tabName, setTabName] = useState("GROUND FLOOR");

  const handleTabClick = (event) => {
    let clickedTabLabel = event.currentTarget.textContent;
    setTabName(clickedTabLabel);
  };

  return (
    <Box
      sx={{
        marginTop: "-200px",
        bgcolor: "#2e323b",
        width: "100%",
      }}
    >
      <Box
        sx={{
          bgcolor: "#2e323b",
          display: "flex",
          justifyContent: "space-between",
          margin: "0 7% 0 10%",
        }}
      >
        <Box
          sx={{
            marginLeft: "-25%",
          }}
        >
          <img
            style={{ height: "100%" }}
            src={process.env.PUBLIC_URL + "ropehook.svg"}
            alt="header-house"
          />
        </Box>
        <Box
          sx={{
            flexDirection: "column",
            marginLeft: "20%",
            marginTop: "7%",
          }}
        >
          <ThemeProvider theme={mainTabs}>
            <div
              style={{
                fontFamily: mainTabs.typography.fontFamily,
              }}
            >
              <span
                style={{
                  fontSize: "6vw",
                  fontWeight: "bold",
                  color: "#9C9DA0",
                  opacity: "0.15",
                }}
              >
                02
              </span>
              <span
                style={{
                  fontSize: "2vw",
                  marginLeft: "-6vw",
                  color: "#87898F",
                }}
              >
                SHIPPEN HOUSE
              </span>
            </div>
          </ThemeProvider>
          <ThemeProvider theme={cursiveHeaders}>
            <div
              style={{
                fontFamily: cursiveHeaders.typography.fontFamily,
                fontSize: "7vw",
                lineHeight: "1.0",
                color: "#FFFFFD",
                marginBottom: "2.5vh",
              }}
            >
              <div>The Property</div>
            </div>
          </ThemeProvider>

          <ThemeProvider theme={mainTabs}>
            <div
              style={{
                fontFamily: mainTabs.typography.fontFamily,
                fontWeight: "bold",
                justifyContent: "start",
              }}
            >
              <Tabs
                value={tabIndex}
                onChange={handleTabChange}
                orientation="vertical"
              >
                <Tab
                  onClick={(event) => handleTabClick(event)}
                  sx={{ alignItems: "start" }}
                  label="GROUND FLOOR"
                />
                <Tab
                  onClick={(event) => handleTabClick(event)}
                  sx={{ alignItems: "start" }}
                  label="FIRST FLOOR"
                />
                <Tab
                  onClick={(event) => handleTabClick(event)}
                  sx={{ alignItems: "start" }}
                  label="TOP FLOOR"
                />
                <Tab
                  onClick={(event) => handleTabClick(event)}
                  sx={{ alignItems: "start" }}
                  label="OUTSIDE"
                />
              </Tabs>
            </div>
          </ThemeProvider>
        </Box>

        <Box sx={{ marginTop: "5%", marginLeft: "2vw" }}>
          <CarouselProperty tabName={tabName} />
        </Box>
      </Box>
    </Box>
  );
}
