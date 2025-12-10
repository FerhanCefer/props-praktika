import React from 'react';
import UserCard from './components/UserCard'; 

function App() {
  const isciler = [
    { id: 1, ad: "Fərhan", pese: "Front-End Developer", yas: 22, maas: 1500 },
    { id: 2, ad: "Əli", pese: "Dizayner", yas: 25, maas: 1200 },
    { id: 3, ad: "Aysel", pese: "Layihə Meneceri", yas: 28, maas: 1800 }
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      
      {isciler.map((isci) => (
        
        <UserCard 
          key={isci.id}       
          ad={isci.ad}        
          pese={isci.pese}    
          yas={isci.yas}
          maas={isci.maas}      
        />

      ))}

    </div>
  );
}

export default App;