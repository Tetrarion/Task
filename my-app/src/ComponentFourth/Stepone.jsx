import React, { useEffect, useState } from "react";

function StepOne(){


    return(
        <div className="stepone">
            <div className="imageing">
                <img src="/images/henry-co-180108-unsplash.png"/>
            </div>
            <div className="stepcontainer">
                <div className="imagelable">
                    <img src="/images/шаг №1.png"/>
                </div>
                <a className="labeltext">Подготовительные работы</a>
                <div className="text">
                Мы осматриваем здание, делаем замеры и проверяем наличие визуально заметных дефектов: трещин, коррозии, повреждения фундамента и т.д.
                </div>
                <div className="authorimg">
                    <img src="/images/706181.png"/>
                </div>
                <div className="comment">
                “Задача этого этапа получить максимально полное представление о конструкции здания, условиях его эксплуатации и возможных слабых местах“
                </div>
                <a className="author">
                Алексей, обследователь и главный инженер проектов
                </a>
            </div>
        </div>
    );
}

export default StepOne
