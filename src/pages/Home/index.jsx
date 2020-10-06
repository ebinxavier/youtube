import { Backdrop, CircularProgress } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Video from "../../components/Video";
import { baseUrl, colorBgSecondary } from "../../constants";
import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState();
  const [loading, setLoading] = useState(false);
  const [menuOn, setMenuOn] = useState(true);
  const classes = useStyles();
  const list = useRef();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!searchText) return;
    (async () => {
      setLoading(true);
      const raw = await fetch(`${baseUrl}/search?search=${searchText}`);
      const data = await raw.json();
      setSearchResults(data.result);
      setLoading(false);
    })();
  }, [searchText]);

  useEffect(() => {
    setSearchText(location.search.split("searchText=")[1] || "react.js");
    list.current.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (!list.current) return;
    list.current.addEventListener(
      "scroll",
      function () {
        var scrollTop = list.current.scrollTop;
        var scrollHeight = list.current.scrollHeight; // added
        var offsetHeight = list.current.offsetHeight;
        // var clientHeight = list.current.clientHeight;
        var contentHeight = scrollHeight - offsetHeight; // added
        if (contentHeight <= scrollTop) {
          // modified
          // Now this is called when scroll end!
          console.log("Scroll End");
        }
      },
      false
    );
  }, []);

  return (
    <>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Header
        onMenuClick={() => setMenuOn(!menuOn)}
        onSearch={(txt) => history.push(`/youtube/?searchText=${txt}`)}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {menuOn && (
          <>
            <div className="nav-bar-normal">
              <Navbar type="normal" />
            </div>
            <div className="nav-bar-minimal">
              <Navbar type="minimal" />
            </div>
          </>
        )}
        <div
          ref={list}
          style={{
            flex: 1,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            height: "calc(100vh - 55px)",
            overflow: "auto",
            padding: "0 20px",
            backgroundColor: colorBgSecondary,
          }}
        >
          {searchResults.map((video) => {
            return <Video key={video.videoId} {...video} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
