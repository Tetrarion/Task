import React, { useEffect, useState } from "react";
import Head from "../ComponentFourth/Head";
import StepOne from "../ComponentFourth/Stepone";
import StepTwo from "../ComponentFourth/Steptwo";



function FourthComponent(){


    return(
        <div className="fourthSection">
            <Head/>
            <StepOne/>
            <StepTwo/>
        </div>
    );
}

export default FourthComponent;