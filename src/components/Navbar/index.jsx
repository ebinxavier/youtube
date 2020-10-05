import {
  Home,
  Whatshot,
  Subscriptions,
  VideoLibrary,
  History, WatchLater
} from "@material-ui/icons";
import React from "react";
import ItemList from "./components/ItemList";
import "./Navbar.css";

const mainItems = [
  { name: "Home", icon: <Home className="item" />, selected: true },
  { name: "Trending", icon: <Whatshot className="item" /> },
  { name: "Subscriptions", icon: <Subscriptions className="item" /> },
];

const subItems = [
  { name: "Library", icon: <VideoLibrary className="item" /> },
  { name: "History", icon: <History className="item" /> },
  { name: "Your Videos", icon: <Subscriptions className="item" /> },
  { name: "Watch Later", icon: <WatchLater className="item" /> },
];

const Navbar = ({ type }) => {
  if (type === "normal") {
    return (
      <div style={{ width: 250 }}>
        <ItemList list={mainItems} />
        <div style={{ borderBottom: "1px solid #383838" }} />
        <ItemList list={subItems} />
      </div>
    );
  }
  return <div style={{ width: 50 }}>This is Small</div>;
};

export default Navbar;
