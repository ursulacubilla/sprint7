import React, { useState } from "react";


function InputPanel(props) {
    const [textOne, setTextOne] = useState(0);
    const [textTwo, setTextTwo] = useState(0);

    function handleChangeTextOne(e) {
        setTextOne(e.target.value);
    };
    
    function handleChangeTextTwo(event) {
        setTextTwo(event.target.value);
    };
    
    function onComenzarPropsOne(e) {
        props.onComenzar(e.target.value, textTwo);
        handleChangeTextOne(e);
    };

    function onComenzarPropsTwo(event) {
        props.onComenzar(event.target.value, textOne);
        handleChangeTextTwo(event);
    };

    return (
        <div>
            <label className="input-panel-check">
                Número de páginas:
                <input
                    value={textOne}
                    id="input-panel-one"
                    type="text"
                    onChange={onComenzarPropsOne}
                />
            </label>

            <hr />

            <label className="input-panel-check">
                Número de idiomas:
            </label>
            <input
                value={textTwo}
                id="input-panel-two"
                type="text"
                onChange={onComenzarPropsTwo}
            />

        </div>
    );
};

export default InputPanel;