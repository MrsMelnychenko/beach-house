import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import { underPhoto } from "./theme";
import { mainTabs } from "./theme";
import { mainTopic } from "./theme";
import { cursiveHeaders } from "./theme";

export default function Location() {
  return (
    <>
      <Box
        sx={{
          display: "flex ",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            border: "0.25rem solid #eeeeef",
            minWidth: "40%",
            maxWidth: "100px",
            maxHeight: "430px",
            marginLeft: "10%",
          }}
        >
          <div>
            <img
              style={{
                width: "105%",
                height: "100%",
                margin: "auto",
                position: "relative",
                top: "-40px",
                left: "-70px",
                zIndex: "10",
              }}
              src={process.env.PUBLIC_URL + "main.jpg"}
              alt="main"
            />
          </div>
          <ThemeProvider theme={underPhoto}>
            <p
              style={{
                fontFamily: underPhoto.typography.fontFamily,
                fontSize: "2vw",
                position: "relative",
                top: "-65px",
                right: "-40px",
              }}
            >
              On the edge of the Sandy Beach at Hope Cove in South Devon
            </p>
          </ThemeProvider>
        </Box>
        <Box
          sx={{
            marginLeft: "3rem",
            textAlign: "left",
            maxWidth: "400px",
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
                  color: "lightgrey",
                }}
              >
                01
              </span>
              <span
                style={{
                  fontSize: "2vw",
                  marginLeft: "-6vw",
                }}
              >
                HOPE COVE
              </span>
            </div>
          </ThemeProvider>
          <ThemeProvider theme={cursiveHeaders}>
            <div
              style={{
                fontFamily: cursiveHeaders.typography.fontFamily,
                fontSize: "6vw",
                lineHeight: "1.0",
              }}
            >
              <div>
                Unique <br />
                Location
              </div>
            </div>
          </ThemeProvider>
          <ThemeProvider theme={mainTopic}>
            <div
              style={{
                fontFamily: mainTopic.typography.fontFamily,
                lineHeight: "1.7",
              }}
            >
              <p>
                Whatever season you choose to visit, you’ll quickly realise
                Shippen is so much more than just a holiday home, it truly is an
                unforgettable seaside escape where memories are forged for a
                lifetime.
              </p>
            </div>
          </ThemeProvider>
        </Box>
      </Box>
      <Box
        sx={{
          border: "0.1rem solid black",
          width: "12rem",
          height: "3rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "3rem",
        }}
      >
        <ThemeProvider theme={mainTabs}>
          <div
            style={{
              fontFamily: mainTabs.typography.fontFamily,
              textAlign: "center",
              letterSpacing: "0.2rem",
              padding: "1rem",
            }}
          >
            VIEW PHOTOS
          </div>
        </ThemeProvider>
      </Box>

      <img
        style={{
          margin: "auto",
          width: "35%",
          position: "relative",
          left: "-15%",
          top: "-20rem",
          zIndex: "0",
        }}
        src={process.env.PUBLIC_URL + "ship.svg"}
        alt="boat"
      />
    </>
  );
}
