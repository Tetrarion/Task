import React from "react";
import Head from "../ComponentsFirst/head";
import End from "../ComponentsFirst/end";
import Body from "../ComponentsFirst/body";

function FirstComponent(){

    return(
        <div className="firstSection">
            <Head/>
            <Body/>
        </div>
    );
}

export default FirstComponent;