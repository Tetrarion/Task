import React, { useEffect, useState } from "react";
import instruments from '../Props/instruments';

function StepTwo(){
    const [blocks, SetBlocks] = useState('');

    useEffect(() => {
        let blocks = instruments();
        SetBlocks(blocks.map(block => (
            <div className='instrument' key={block.id}>
                <img src={block.image}/>
                <div className="name">{block.text}</div>
            </div>
        )))
    }, []);

    return(
        <div className="steptwo">
            <div className="imagelable">
                <img src="/images/шаг №2..png"/>
            </div>
            <a className="head">Детальное инструментальное обследование</a>
            <div className="text">Мы понимаем насколько важны сроки и сколько может стоить день задержки. Поэтому Вы никогда не услышите от нас слов “надо подождать пару дней, пока освободится арендное оборудование” - мы укомплектованы всем необходимым</div>
            <div className="blockscontainer">
                {blocks}
            </div>
        </div>
    );
}

export default StepTwo