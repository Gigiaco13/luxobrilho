import Carousel from 'react-bootstrap/Carousel';

function Carrosel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/layout-plano-de-estilo-de-vida-de-joias-com-lugar-para-texto-banner-de-maquete-de-fundo-de-joias-acessorios-de-moda_460848-12598.jpg?size=626&ext=jpg&ga=GA1.1.1951658191.1699359168&semt=sph"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Jóias nacionais e importadas</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/joias-de-ouro-brilhantes-um-simbolo-de-riqueza-gerada-pela-ia_188544-10733.jpg?size=626&ext=jpg&ga=GA1.1.1951658191.1699359168&semt=sph"
        />

        <Carousel.Caption>
          <h3>Jóias nacionais e importadas</h3>
         
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/exibicao-de-corrente-dourada-brilhante-e-luxuosa_23-2149635268.jpg?size=626&ext=jpg&ga=GA1.1.1951658191.1699359168&semt=sph"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Jóias nacionais e importadas</h3>
        
        </Carousel.Caption>
      </Carousel.Item>

      
     
    </Carousel>
  );
}

export default Carrosel;