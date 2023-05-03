import React, { Fragment, useState } from "react";
import ButtonPanel from "./ButtonPanel";
import { Label } from './Styled';


function InputPanel(props) {
    const [textOne, setTextOne] = useState(0);
    const [textTwo, setTextTwo] = useState(0);

    function handleChangeTextOne(e) {
        setTextOne(Number(e.target.value));
    };

    function handleChangeTextTwo(event) {
        setTextTwo(Number(event.target.value));
    };

    function onComenzarPropsOne(e) {
        props.onComenzar(e.target.value, textTwo);
        handleChangeTextOne(e);
    };

    function onComenzarPropsTwo(event) {
        props.onComenzar(event.target.value, textOne);
        handleChangeTextTwo(event);
    };

    function onSumar() {
        props.onComenzar(textOne + 1, textTwo);
        setTextOne(textOne + 1);
    };

    function onRestar() {
        props.onComenzar(textOne - 1, textTwo)
        setTextOne(textOne - 1);
    };

    function onSumarTwo() {
        props.onComenzar(textTwo + 1, textOne)
        setTextTwo(textTwo + 1);
    };

    function onRestarTwo() {
        props.onComenzar(textTwo - 1, textOne)
        setTextTwo(textTwo - 1);
    };


    return (
        <Fragment>
            <Label >
                Número de páginas:

                <ButtonPanel onProps={onComenzarPropsOne}
                    value={textOne}
                    onSumar={onSumar}
                    onRestar={onRestar} 
                    />

            </Label>

            <hr />

            <Label>
                Número de idiomas:

            <ButtonPanel onProps={onComenzarPropsTwo}
                value={textTwo}
                onSumar={onSumarTwo}
                onRestar={onRestarTwo} 
                />
          
            </Label>

        </Fragment>
    );
};

export default InputPanel;