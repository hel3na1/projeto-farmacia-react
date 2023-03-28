import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CardContainer } from './components/CardContainer';
import { Card } from './components/Card';


function App() {
  useEffect(() => {
    document.body.style.padding = "0";
    document.body.style.margin = "0";
  }, []);

  const produtos = [
    {
      name: "produtos 01",
      price: 23,
      img: "https://i0.statig.com.br/bancodeimagens/ar/r0/av/arr0avlvtimebdnduyyahl2to.jpg"
    },
    {
      name: "produtos 02",
      price: 50,
      img: "https://i0.statig.com.br/bancodeimagens/ar/r0/av/arr0avlvtimebdnduyyahl2to.jpg"
    },
    {
      name: "produtos 03",
      price: 70,
      img: "https://i0.statig.com.br/bancodeimagens/ar/r0/av/arr0avlvtimebdnduyyahl2to.jpg"
    },
    {
      name: "produtos 04",
      price: 80,
      img: "https://i0.statig.com.br/bancodeimagens/ar/r0/av/arr0avlvtimebdnduyyahl2to.jpg"
    },
    {
      name: "produtos 05",
      price: 66,
      img: "https://i0.statig.com.br/bancodeimagens/ar/r0/av/arr0avlvtimebdnduyyahl2to.jpg"
    },
    {
      name: "produtos 06",
      price: 23,
      img: "https://i0.statig.com.br/bancodeimagens/ar/r0/av/arr0avlvtimebdnduyyahl2to.jpg"
    },
  ]

  return (
    <div>
      <Header />

      <CardContainer>
        {produtos.map((produto) => (
          <Card
            name={produto.name}
            price={produto.price}
            img={produto.img}
          />
        ))}


      </CardContainer>

      <Footer />
    </div>
  );
}

export default App;
