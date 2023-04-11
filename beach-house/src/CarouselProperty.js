import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/system";
import { mainTabs } from "./theme";
import { ThemeProvider } from "@emotion/react";
import {
  RestaurantOutlined,
  ChairOutlined,
  LocalLaundryServiceOutlined,
  WashOutlined,
  WcOutlined,
  DoorSlidingOutlined,
  KingBedOutlined,
  LightOutlined,
  ShowerOutlined,
  DeckOutlined,
  GrassOutlined,
  LocalParkingOutlined,
} from "@mui/icons-material";

export default function CarouselProperty(props) {
  const groundFloorItems = [
    {
      id: "1",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/gr-floor.jpg",
    },
    {
      id: "2",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/gr-floor1.jpg",
    },
    {
      id: "3",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/gr-floor2.jpg",
    },
  ];
  const firstFloorItems = [
    {
      id: "1",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/f-floor.jpg",
    },
    {
      id: "2",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/f-floor1.jpg",
    },
    {
      id: "3",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/f-floor2.jpg",
    },
  ];
  const topFloorItems = [
    {
      id: "1",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/t-floor.jpg",
    },
    {
      id: "2",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/t-floor1.jpg",
    },
    {
      id: "3",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/t-floor2jpg.jpg",
    },
  ];
  const outsideItems = [
    {
      id: "1",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/view.jpg",
    },
    {
      id: "2",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/view2.jpg",
    },
    {
      id: "3",
      imageUrl:
        "https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/main/view3.jpg",
    },
  ];
  const groundFloorFacilities = [
    {
      id: "1",
      icon: <RestaurantOutlined />,
      text: "Kitchen Dining Room",
    },
    {
      id: "2",
      icon: <ChairOutlined />,
      text: "Sitting Room",
    },
    {
      id: "3",
      icon: <LocalLaundryServiceOutlined />,
      text: "Utility Room",
    },
    {
      id: "4",
      icon: <WashOutlined />,
      text: "Wet Room",
    },
    {
      id: "5",
      icon: <WcOutlined />,
      text: "W/C",
    },
    {
      id: "6",
      icon: <DoorSlidingOutlined />,
      text: "Front Porch",
    },
  ];
  const firstFloorFacilities = [
    {
      id: "1",
      icon: <KingBedOutlined />,
      text: "Bedroom 1 - Super King",
    },
    {
      id: "2",
      icon: <KingBedOutlined />,
      text: "Bedroom 2 - King",
    },
    {
      id: "3",
      icon: <KingBedOutlined />,
      text: "Bedroom 3 - Twin",
    },
    {
      id: "4",
      icon: <LightOutlined />,
      text: "Landing",
    },
    {
      id: "5",
      icon: <WcOutlined />,
      text: "Washroom/WC",
    },
    {
      id: "6",
      icon: <ShowerOutlined />,
      text: "Shower/WC",
    },
  ];
  const topFloorFacilities = [
    {
      id: "1",
      icon: <KingBedOutlined />,
      text: "Bedroom 4 - Twin + Bunk Bed",
    },
    {
      id: "2",
      icon: <ShowerOutlined />,
      text: "Bathroom/WC",
    },
  ];
  const outsideFloorFacilities = [
    {
      id: "1",
      icon: <DeckOutlined />,
      text: "Roof Terrace",
    },
    {
      id: "2",
      icon: <GrassOutlined />,
      text: "Garden",
    },
    {
      id: "3",
      icon: <LocalParkingOutlined />,
      text: "Parking",
    },
  ];

  let items = [];
  let facilities = [];
  if (props.tabName === "GROUND FLOOR") {
    items = [];
    items = [...groundFloorItems];
    facilities = [];
    facilities = [...groundFloorFacilities];
  } else if (props.tabName === "FIRST FLOOR") {
    items = [];
    items = [...firstFloorItems];
    facilities = [];
    facilities = [...firstFloorFacilities];
  } else if (props.tabName === "TOP FLOOR") {
    items = [];
    items = [...topFloorItems];
    facilities = [];
    facilities = [...topFloorFacilities];
  } else {
    items = [];
    items = [...outsideItems];
    facilities = [];
    facilities = [...outsideFloorFacilities];
  }
  return (
    <Box sx={{ width: "800px" }}>
      <Carousel
        animation="slide"
        interval={null}
        navButtonsAlwaysVisible={true}
        indicatorIconButtonProps={{
          style: {
            display: "none",
          },
        }}
        PrevIcon={
          <img
            src="https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/daee530a6ed46ca590748a957797f849047d7c42/arrow_left_white.svg"
            alt="prevBtn"
            width="50% "
          />
        }
        NextIcon={
          <img
            src="https://raw.githubusercontent.com/MrsMelnychenko/beach-house-img/daee530a6ed46ca590748a957797f849047d7c42/arrow_right_white.svg"
            alt="prevBtn"
            width="50% "
          />
        }
        navButtonsProps={{
          style: {
            width: "50px",
            height: "50px",
            opacity: 0.5,
          },
        }}
      >
        {items.map((item) => (
          <img
            key={item.id}
            src={item.imageUrl}
            alt="beach-house-property"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ))}
      </Carousel>
      <Box>
        <ThemeProvider theme={mainTabs}>
          <div
            style={{
              fontFamily: mainTabs.typography.fontFamily,
              fontWeight: "bold",
              justifyContent: "start",
            }}
          >
            <ul
              style={{
                display: "flex",
                justifyContent: " space-between",
              }}
            >
              {facilities.map((facility) => (
                <li
                  key={facility.id}
                  style={{
                    color: "white",
                    display: "flex",
                    width: "30%",
                    lineHeight: 1.2,
                    fontSize: "20px",
                    fontWeight: "lighter",
                    whiteSpace: "normal",
                  }}
                >
                  <span style={{ marginRight: "5%" }}>{facility.icon}</span>
                  {facility.text}
                </li>
              ))}
            </ul>
          </div>
        </ThemeProvider>
      </Box>
    </Box>
  );
}
