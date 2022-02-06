import React, { useState } from "react";
import End from "./end";

function Body(){



    return(
        <div className="Body">
            <button><img src="/images/download.svg" className="downloadsvg"/>получить коммерческое</button>
            <div className="text">
                <p>
                Отправьте техзадание и получите коммерческое предложение в течении 15 минут на свой email или в мессенджер
                </p>
            </div>
            <div className="h1">
            Независимое обследование зданий и сооружений
            </div>
            <div className="h3">
            антенн, труб, теплосетей, канализаций и других объектов строительства
            </div>
            <div className="video">
                <img src="/images/706181.png" className="videoimg"/>
                <img src="/images/Polygon.png" className="Polygon"/>
            </div>
            <End/>
        </div>
    );
}

export default Body;