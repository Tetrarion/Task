import React from "react";

function Head(){

    return(
        <div className="Head">
            <div className="link"><img src="/images/burger.png"/></div>
            <div className="logo">
                <img src="/images/logo.svg"/>
            </div>
            <div className="email">
                <p className="text">Пишите мне на email</p>
                <img className="mailsvg" src="/images/mail.svg"/><p className="emailAdress">info@diagnistics.by</p>
            </div>
            <div className="phone">
                <p className="text">Есть вопросы? Звоните!</p>
                <p className="phoneNumber">+375 (29) 456-45-45</p>
            </div>
            <hr className="headline"/>
        </div>
    );
}

export default Head;