import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { Avatar, IconButton } from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { auth } from "./firebase";

import { selectUser, logout } from "./features/userSlice";

import "./Header.css";

function Header() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    function signOut() {
        auth
        .signOut()
        .then(() => {
            dispatch(logout());
        });
    };

    return (
        <div className="header">

            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img 
                    src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="gmail__icon"
                />
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar src={user?.photoUrl} onClick={signOut} style={{ cursor: "pointer" }}/>
            </div>

        </div>
    )
}

export default Header;
