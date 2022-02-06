import React, { useEffect, useState } from "react";
import Blocks from "../Props/props";


function ThirdComponent(){

    const [blocks, SetBlocks] = useState('');

    useEffect(() => {
        let props = Blocks();
        SetBlocks(props.map(prop => (
            <div className="container" key={prop.id}>
                <img src={prop.image}/>
                <a className="head">{prop.header}</a>
                <div>{prop.text}</div>
                <a className="link">{prop.link}</a><img src={prop.marker}/>
            </div>
        )))
    }, []);

    return(
        <div className="thirdSection">
            <div className="thirdhead">
            Услуги
            </div>
            <div className="thirdtextcontainer">
            Выполняем как комплексное обследование, так и отдельные виды работ
            </div>
            <div className="blocksContainer">
                {blocks}
            </div>
        </div>
    );
}

export default ThirdComponent;