import React from 'react';

function UserCard({ ad, pese, yas, maas }) {

   
    const reng = maas > 1500 ? "red" : "green"
  return (  
    <div style={{...styles.card, backgroundColor: reng }}>
      <h3>Ad: {ad} <br/>
        {maas > 1600 && <span>(Senior)</span>}
        {maas < 1600 && <span>(Junior)</span>}
      </h3>
      <p>Peşə: {pese} </p>
      <span>Yaş: {yas}</span>
      <p>Maaş: {maas} $</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
    width: '200px'
  }
};

export default UserCard;