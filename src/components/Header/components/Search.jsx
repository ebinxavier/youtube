import { CircularProgress } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import React, { useRef, useState } from "react";
import { baseUrl, colorBgPrimary } from "../../../constants";
import "../Header.css";
import SearchItem from "./SearchItem";

const Search = ({ onSearch }) => {
  const [timerId, setTimerId] = useState();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const onSearchSuggestions = async (text) => {
    console.log(text);
    setLoading(true);
    const raw = await fetch(`${baseUrl}/suggestions?search=${searchText}`);
    const data = await raw.json();
    setSuggestions(data.result);
    setShowSuggestions(true);
    setLoading(false);
  };

  const onChange = (event) => {
    clearTimeout(timerId);
    const txt = event.target.value;
    setSearchText(txt);
    setTimerId(
      setTimeout(() => {
        if(txt)
        onSearchSuggestions(txt);
      }, 500)
    );
  };
  const onSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };
  const onInputKeyPress = (key) => {
    switch (key.which) {
      case 13:
        onSearch(searchText);
        setShowSuggestions(false);
        break;
      default:
        break;
    }
  };
  const { left, top, width } = inputRef.current
    ? inputRef.current.getBoundingClientRect()
    : {};
  return (
    <>
      <div className="primary-bg" style={{ flex: 5, textAlign: "center" }}>
        <input
          ref={inputRef}
          onChange={onChange}
          value={searchText}
          className="search-input"
          type="text"
          placeholder="Search"
          list="suggestions"
          onFocus={() => setShowSuggestions(true)}
          onKeyPress={onInputKeyPress}
        />
        <span className="search-btn">
          {!loading ? (
            <SearchIcon
              color="secondary"
              style={{ fontSize: 20, marginTop: 6 }}
            />
          ) : (
            <CircularProgress
              size={21}
              style={{ fontSize: 20, marginTop: 5 }}
            />
          )}
        </span>
      </div>

      {showSuggestions && (
        <div
          style={{
            position: "absolute",
            maxHeight: 400,
            width,
            left,
            top: top + 40,
            textAlign: "left",
            overflow: "auto",
            backgroundColor: colorBgPrimary,
            cursor: "pointer",
            zIndex: 999,
          }}
        >
          {suggestions.map((item) => (
            <SearchItem key={item} name={item} onClick={onSuggestionClick} />
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
