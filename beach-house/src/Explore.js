import { Box } from "@mui/system";
import { mainTabs } from "./theme";
import { cursiveHeaders } from "./theme";
import { ThemeProvider } from "@emotion/react";
import Carousel from "react-material-ui-carousel";

export default function Explore() {
  const photos = [
    {
      id: "1",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/Gallery.jpg",
    },
    {
      id: "2",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/Gallery1.jpg",
    },
    {
      id: "3",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/Gallery2.jpg",
    },
    {
      id: "4",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/Gallery3.jpg",
    },
    {
      id: "5",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/Gallery4.jpg",
    },
    {
      id: "6",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/Gallery5.jpg",
    },
    {
      id: "7",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/Gallery6.jpg",
    },
    {
      id: "8",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/Gallery7.jpg",
    },
    {
      id: "9",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/Gallery8.jpg",
    },
    {
      id: "10",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/Gallery9.jpg",
    },
    {
      id: "11",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/Gallery10.jpg",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#E4E6E9",
      }}
    >
      <Box
        sx={{
          margin: "auto",
          textAlign: "center",
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
              03
            </span>
            <span
              style={{
                fontSize: "2vw",
                marginLeft: "-6vw",
              }}
            >
              EXPLORE
            </span>
          </div>
        </ThemeProvider>
        <ThemeProvider theme={cursiveHeaders}>
          <div
            style={{
              fontFamily: cursiveHeaders.typography.fontFamily,
              fontSize: "7vw",
              lineHeight: "1.0",
              marginBottom: "2.5vh",
            }}
          >
            <div>Photo Gallery</div>
          </div>
        </ThemeProvider>
      </Box>

      <ThemeProvider theme={cursiveHeaders}>
        <Box
          sx={{
            margin: "auto",
            width: "600px",
            height: "400px",
            border: "0.25rem solid #D5D7DB",
            zIndex: 2,
            marginBottom: "7%",
          }}
        >
          <Carousel
            interval={null}
            navButtonsAlwaysVisible={true}
            sx={{
              position: "relative",
              top: "30px",
              right: "50px",
              zIndex: 10,
            }}
            indicatorIconButtonProps={{
              style: {
                display: "none",
              },
            }}
            PrevIcon={
              <img src="https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/daee530a6ed46ca590748a957797f849047d7c42/arrow_left_white.svg" />
            }
            NextIcon={
              <img src="https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/daee530a6ed46ca590748a957797f849047d7c42/arrow_right_white.svg" />
            }
            navButtonsProps={{
              style: {
                width: "50px",
                height: "50px",
                opacity: 0.5,
              },
            }}
          >
            {photos.map((item) => (
              <div key={item.id}>
                <img
                  src={item.imageUrl}
                  alt="beach-house-property"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    fontFamily: cursiveHeaders.typography.fontFamily,
                    fontSize: "4vw",
                    textAlign: "center",
                    marginLeft: "30px",
                  }}
                >
                  {item.id}/11
                </div>
              </div>
            ))}
          </Carousel>
        </Box>
      </ThemeProvider>

      <Box
        sx={{
          margin: "auto",
          width: "65%",
          lineHeight: "1.8",
          position: "relative",
          textAlign: "center",
          zIndex: "10",
        }}
      >
        <p>
          Each time of year has its own unique charms; summer offers a bustling
          and vibrant sea side atmosphere with boats, ice cream, sandcastles,
          and laughter; autumn’s golden sun inspires long coastal walks, slow
          cooked stews, nostalgic board games and the sharing of stories around
          the kitchen table; winter brings dramatic scenery, crashing waves,
          woolly hats and hot chocolate beside the roaring log fire; and with
          spring comes new life on the shoreline, bobbing seal heads in the
          harbour, birdsong in the air and the peace to lose yourself in a good
          novel.
        </p>
      </Box>
      <img
        style={{
          margin: "auto",
          width: "25%",
          position: "relative",
          left: "40%",
          top: "-30rem",
          zIndex: "0",
        }}
        src={process.env.PUBLIC_URL + "chair.svg"}
        alt="boat"
      />
    </Box>
  );
}
