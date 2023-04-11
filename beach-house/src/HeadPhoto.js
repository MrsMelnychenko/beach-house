import { Box } from "@mui/system";
import { cursiveHeaders } from "./theme";
import { ThemeProvider } from "@emotion/react";

export default function HeadPhoto() {
  return (
    <>
      <img
        style={{ width: "100%", height: "100%" }}
        src={process.env.PUBLIC_URL + "header1.jpg"}
        alt="header-house"
      />
      <ThemeProvider theme={cursiveHeaders}>
        <span
          style={{
            position: "absolute",
            top: "200px",
            fontFamily: cursiveHeaders.typography.fontFamily,
            fontSize: "7vw",
            left: "37.5%",
            lineHeight: "1.0",
          }}
        >
          That house <br />
          on the beach
        </span>
      </ThemeProvider>
      <img
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          top: "-90px",
          zIndex: 0,
        }}
        src={process.env.PUBLIC_URL + "brush_white.png"}
        alt="brush"
      />
      <Box
        sx={{
          margin: "auto",
          width: "65%",
          lineHeight: "1.8",
          position: "relative",
          top: "-100px",
        }}
      >
        <p>
          Set in an exclusive beachfront position Shippen House, Hope Cove, is a
          one-of-a-kind South Devon property by the sea. With stunning coastal
          vistas across the sandy beach and beyond, the house offers stylish
          self-catering accommodation in the most breathtaking of settings.
          <br />
          <br />
          Whether it’s waking up to the magnificent view of waves crashing on
          the shore or watching family and friends enjoying the beach from the
          comfort of the homely sitting room, or the spacious, social kitchen
          dining room, there are so many reasons our visitors keep returning to
          Shippen House.
        </p>
      </Box>
    </>
  );
}
