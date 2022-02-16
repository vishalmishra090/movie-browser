import React, { useEffect } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Home, Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import searchActions from "../../../actions/searchActions";

import "./style.scss";

function Header({
  searchText,
  setSearchText
}) {
  const navigate = useNavigate();

  const handelChange = (e) => {
    const query = e.target.value
    setSearchText(query)
    if(!query)
       navigate(`/search`)
  };

  const handelHomeClick = (e) => {
    setSearchText("")
    navigate("/")
  }

  useEffect(() => {
    let timerId 
    if(searchText){
      timerId = setTimeout(() => {
        navigate(`/search/${searchText}`);
      }, 500);
    }
    return () => {
      clearTimeout(timerId)
    }
  }, [searchText])
  return (
    <header>
      <TextField
        placeholder="Search movie by title"
        autoComplete="true"
        size="small"
        onChange={handelChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{
          width: '100%',
          maxWidth: '600px',
          marginRight: '30px'
        }}
        value={searchText}
      />
      <IconButton onClick={handelHomeClick}>
        <Home />
      </IconButton>
    </header>
  );
}

const mapStateToProps = ({ searchReducer }) => ({
  searchText: searchReducer.searchText,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchText: (text) => dispatch(searchActions.setSearchText({text}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
