import React, { useState, memo } from 'react';

const Basliq = memo(({ title }) => {
  console.log("Başlıq render oldu!"); 
  return <h1>{title}</h1>;
});
const App = () => {

  const [count, setCount] = useState(0)

  const Min_Limit = -10;
  const Max_Limit = 10;

  let textColor = "black";

  if (count > 0) {
    textColor = "green";
  } else if (count < 0) {
    textColor = "red";
  }

  const artır = () => {
    setCount(count + 1);
  };

  const azalt = () => {
    setCount(count - 1);
  };

  const sifirla = () => {
    setCount(0);
  };

  const reqemeBas = () => {
    console.log("Nagarmaq fikrin var");
  }

  console.log ("App render oldu");


  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'center' }}>
      <Basliq title="Counter Tətbiqi" />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <button onClick={azalt} style={{ padding: '5px 15px' }} disabled={count === Min_Limit}>Azalt (-)</button>

        <span
          onClick={reqemeBas}
          style={{
            color: textColor,
            fontSize: '30px',
            fontWeight: 'bold',
            width: '50px',
            display: 'inline-block',
            cursor: 'pointer'
          }}>
          {count}
        </span>

        <button onClick={artır} style={{ padding: '5px 15px' }} disabled={count === Max_Limit}>Artır (+)</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={sifirla} style={{ backgroundColor: '#f0ad4e', border: 'none', padding: '10px 20px', cursor: 'pointer', borderRadius: '5px' }}>
          Sıfırla (Reset)
        </button>
      </div>

    </div>
  );
}

export default App