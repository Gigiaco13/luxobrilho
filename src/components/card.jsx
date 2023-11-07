import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = [
  {
    titulo: "Anéis",
    text: "Anéis em ouro",
    img: "https://img.freepik.com/fotos-gratis/anel-de-ouro-caro-com-exibicao-de-suporte-de-mao-humana_23-2150347071.jpg?size=626&ext=jpg&ga=GA1.1.1951658191.1699359168&semt=sph"
  },
  {
    titulo: "Jóias",
    text: "Artigos com esmeralda",
    img: "https://img.freepik.com/fotos-gratis/modelo-mostra-brincos-e-anel-com-lindas-pedras-preciosas-azuis_8353-5043.jpg?size=626&ext=jpg&ga=GA1.1.1951658191.1699359168&semt=sph"
  },
  {
    titulo:"Brincos",
    text:"Brincos em ouro",
    img:"https://img.freepik.com/fotos-gratis/arranjo-estetico-de-brincos-dourados_23-2149846597.jpg?size=626&ext=jpg&ga=GA1.1.1951658191.1699359168&semt=sph"
  }
]

function Carde() {
  return (
    <>
    {Product.map(({titulo, text, img}) => (
      <Card key={titulo} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="secondary">Acesse a página</Button>
      </Card.Body>
    </Card>
    ))}
    </>
  );
}

export default Carde;