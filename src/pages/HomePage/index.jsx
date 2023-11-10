import './style.css';
import { useState, useRef, useEffect } from 'react';

export const HomePage = () => {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);

  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();

  useEffect(() => {
    const nextInput = (index) => {
      if (index === 0) {
        inputRef2.current.focus();
      } else if (index === 1) {
        inputRef3.current.focus();
      } else if (index === 2) {
        inputRef4.current.focus();
      }
    };

    for (let i = 0; i < cardNumber.length; i++) {
      if (cardNumber[i].length === 4) {
        nextInput(i);
      }
    }
  }, [cardNumber]);

  const handleInputChange = (index, e) => {
    const newCardNumber = [...cardNumber];
    newCardNumber[index] = e.target.value;
    setCardNumber(newCardNumber);
  }

  return (
    <div className="container">
      <h1>Platba</h1>
      <div className="container2">
        <div className="container3">
          <label>Zadejte číslo kreditní karty:</label>
          <input
            ref={inputRef1}
            value={cardNumber[0]}
            onChange={(e) => handleInputChange(0, e)}
            type="text"
            name="name"
            placeholder=""
            size="4"
            maxLength="4"
          />
          <input
            ref={inputRef2}
            value={cardNumber[1]}
            onChange={(e) => handleInputChange(1, e)}
            type="text"
            name="name"
            placeholder=""
            size="4"
            maxLength="4"
          />
          <input
            ref={inputRef3}
            value={cardNumber[2]}
            onChange={(e) => handleInputChange(2, e)}
            type="text"
            name="name"
            placeholder=""
            size="4"
            maxLength="4"
          />
          <input
            ref={inputRef4}
            value={cardNumber[3]}
            onChange={(e) => handleInputChange(3, e)}
            type="text"
            name="name"
            placeholder=""
            size="4"
            maxLength="4"
          />
        </div>
        <br />
        <div>Číslo karty:  <div className="cislo-karty">{cardNumber.join('')}</div></div>
      </div>
    </div>
  );
};
