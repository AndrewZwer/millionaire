import React from "react";

import Button from "../button";

import img from "../../img/hand.png";
import "./main-page.css";

const MainPage = () => {
    return (
        <div className="container flex">
            <img className="main-image" alt="Hand and stars" src={img} />
            <div className="heading-col"> 
                <h1 className="main-heading">Who wants to be a millionaire?</h1>
                <Button />
            </div>    
        </div>
    );
};

export default MainPage;