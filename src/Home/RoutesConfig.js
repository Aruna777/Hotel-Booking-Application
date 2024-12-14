import Login from "../navbar/Login";
import Register from "../navbar/Register";
import Home from "./Home";

import Chicago from "./destinations/Chicago";
import Lasvegas from "./destinations/Lasvegas";
import Losangeles from "./destinations/Losangeles";
import Miami from "./destinations/Miami";
import Newyork from "./destinations/Newyork";

import Apartments from "./properties/Apartments";
import Cabins from "./properties/Cabins";
import Farmstays from "./properties/FarmStays";
import GuestHouses from "./properties/GuestHouses";
import HotelsPage from "./properties/HotelsPage";
import LuxuryTents from "./properties/LuxuryTents";
import Motels from "./properties/Motels";
import Resorts from "./properties/Resorts";
import Villas from "./properties/Villas";

export const routes = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/", element: <Home /> },
  { path: "/hotelsPage", element: <HotelsPage /> },
  { path: "/apartments", element: <Apartments /> },
  { path: "/resorts", element: <Resorts /> },
  { path: "/cabins", element: <Cabins /> },
  { path: "/villas", element: <Villas /> },
  { path: "/motels", element: <Motels /> },
  { path: "/guesthouses", element: <GuestHouses /> },
  { path: "/Luxurytents", element: <LuxuryTents /> },
  { path: "/farmstays", element: <Farmstays /> },
  { path: "/nyc", element: <Newyork /> },
  { path: "/miami", element: <Miami /> },
  { path: "/lasvegas", element: <Lasvegas /> },
  { path: "/losangeles", element: <Losangeles /> },
  { path: "/chicago", element: <Chicago /> },
];
