import React, { useState } from "react";

function Head(){



    return(
        <div className="Head">
            <div className="link"><img src="/images/burger.png"/></div>
            <div className="logo">
                <img src="/images/logo.svg"/>
            </div>
            <div className="email">
                <a className="text">Пишите мне на email</a>
                <img className="mailsvg" src="/images/mail.svg"/><a className="emailAdress">info@diagnistics.by</a>
            </div>
            <div className="phone">
                <a className="text">Есть вопросы? Звоните!</a>
                <a className="phoneNumber">+375 (29) 456-45-45</a>
            </div>
            <hr className="headline"/>
        </div>
    );
}

export default Head;