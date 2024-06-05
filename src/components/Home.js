import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img src={process.env.PUBLIC_URL + '/imgs/image1.jpg'} alt="Imagem 1" />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/imgs/image2.jpg'} alt="Imagem 2" />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/imgs/image3.jpg'} alt="Imagem 3" />
        </div>
      </Carousel>
      <div className="description">
        <h2>Bem-vindo ao RessabiadosFut</h2>
        <p>Seu portal definitivo para estatísticas e informações sobre futebol. Aqui você encontra dados ao vivo, artilheiros, detalhes de partidas e muito mais.</p>
        <a href="https://github.com/lucianookdp" target="_blank" rel="noopener noreferrer">Visite nosso GitHub</a>
      </div>
      <div className="features">
        <h3>Principais Funcionalidades</h3>
        <ul>
          <li>Atualização em tempo real dos placares</li>
          <li>Estatísticas detalhadas de jogadores e equipes</li>
          <li>Comparação de jogadores</li>
          <li>Informações sobre transferências recentes</li>
        </ul>
      </div>
      <div className="footer">
        <p>&copy; 2024 RessabiadosFut. Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

export default Home;
