import React, { useState } from "react";
import { InputsCheckbox } from './Inputs';

function App() {

  const [count, setCount] = useState(
    new Array(InputsCheckbox.length).fill(false)
  ); // [],{},"",numeros,booleano "
  console.log(InputsCheckbox);


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
      {InputsCheckbox.map(({ name, price, text }, index) => {
        return (

          <section key={name}>
            <input
              name={name}
              type="checkbox"
              checked={count[index]}
              onChange={() => handleInputChange(index)}
            />
            <label>{text} {price}</label>
          </section>
        );
      })}

      <p>Precio: {total}</p>

    </div>
  );
}

export default App;

