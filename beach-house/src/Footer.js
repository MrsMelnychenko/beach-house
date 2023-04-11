import { ThemeProvider } from "@emotion/react";
import { mainTabs } from "./theme";
import { Box } from "@mui/system";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "white" }}>
      <ThemeProvider theme={mainTabs}>
        <Box
          sx={{
            margin: "auto",
            marginTop: "-300px",
            paddingTop: "100px",
            display: "flex",
            width: "65%",
            lineHeight: "1.8",
            position: "relative",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontFamily: mainTabs.typography.fontFamily,
              fontSize: "4vw",
            }}
          >
            "
          </span>
          <p
            style={{
              fontFamily: mainTabs.typography.fontFamily,
              fontSize: "1.5vw",
            }}
          >
            What an incredible week! We’ve had such a relaxing time at Shippen
            exploring the beaches, walking along the coastal paths and just
            sitting enjoying the view. Thank you for having us, we’re already
            looking forward to next year’s stay.
          </p>
          <span
            style={{
              fontFamily: mainTabs.typography.fontFamily,
              fontSize: "4vw",
            }}
          >
            "
          </span>
        </Box>
        <p
          style={{
            fontFamily: mainTabs.typography.fontFamily,
            fontSize: "1.5vw",
            margin: "auto",
            textAlign: "center",
            color: "#5E7084",
          }}
        >
          LORNA EDWARDS
        </p>

        <img
          style={{
            display: "flex",
            margin: "auto",
          }}
          src={process.env.PUBLIC_URL + "shell.png"}
          alt="shell"
        />
      </ThemeProvider>
      <img
        style={{
          marginTop: "-200px",
          width: "100%",
          zIndex: "0",
        }}
        src={process.env.PUBLIC_URL + "footer.png"}
        alt="brush"
      />
    </Box>
  );
}
