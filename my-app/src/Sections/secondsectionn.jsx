import React, { useEffect, useState } from "react";
import Lefthalf from "../ComponentSecond/lefthalf";
import Righthalf from "../ComponentSecond/righthalf";

function SecondComponent(){

    return(
        <div className="secondSection">
            <Lefthalf/>
            <img src="/images/tv.png"/>
            <Righthalf/>
        </div>
    );
}

export default SecondComponent;