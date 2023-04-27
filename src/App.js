import React, { useState } from "react";
import { InputsCheckbox } from './Inputs';
import { Panel } from "./styled";
import InputPanel from "./InputPanel";


function App() {

  const [count, setCount] = useState(
    new Array(InputsCheckbox.length).fill(false)
  ); // [],{},"",numeros,booleano "
  const [suma, setSuma] = useState(0);
  const [total, setTotal] = useState(0);
  
  
  const handleInputChange = (e) => {
    
    const updatedCheckedState = count.map((item, index) =>
    index === e ? !item : item
    );
    
    setCount(updatedCheckedState);
    
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + InputsCheckbox[index].price;
        }
        
        return sum;
      },
      0
      );

      setTotal(totalPrice);
      
    };
    
  return (
    <div className="App">

      <p>¿Qué quieres hacer?</p>
      {InputsCheckbox.map(({ name, price, text, id }, index) => {
        
        return (

          <section key={name}>
            <input
              name={name}
              type="checkbox"
              checked={count[index]}
              onChange={() => handleInputChange(index)}
            />
            <label>{text} {price} €</label>

            {count[0] === true && id === 1 && <Panel isActive={count[0] === true}>
            <InputPanel onComenzar={(textOne, textTwo) => {
             const perro = (textOne * textTwo) * 30;
             setSuma(perro);
           }} />
      
            </Panel>}

          </section>
        );
      })}
      <p>Precio: {total + suma} €</p>

    

    </div>
  );
}

export default App;

