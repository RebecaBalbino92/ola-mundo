import "./styles.css"
import * as React from 'react';


const InicioPage = () => {
  return (
    <div className="container">
    <div className="profile">
      <img className="profile-picture" src="IMG_20230920_150127892copia.jpg" alt="Imagem do Perfil" />
      <h2>Rebeca Balbino</h2>
      <p> Olá conexões! Que bom tê-lx aqui! 🤗 <br />

       Sou uma profissional da área de produto com background em designer de interface e experiência do usuário, <br />
        bastante criativa e motivada. Minhas principais habilidades e conhecimentos são design de UI/UX, colaboração <br />
        multidisciplinar, liderança em projetos, pesquisas de usuários, análise de métricas, teste de usabilidade, <br />
        construção de fluxos de usabilidade, mapeamento de processos, resolução de problemas, comunicação, <br />
        documentação e aplicação de metodologias ágeis. <br /> 
      </p>

      <p>
       Atualmente sou associate product manager na Thinkr, uma plataforma completa para quem atua no segmento de <br /> 
       Educação a Distância. Estou focada em aprimorar minhas habilidades de gestão de produtos para impulsionar <br /> 
       o sucesso dos projetos da Thinkr e alcançar resultados excepcionais para a equipe e os usuários finais ✨. <br /> 
        </p>
        <p> Vamos conversar, tomar um café ☕ e construir um networking incrível. <br /> 
        Contribuindo com a gestão ágil de desenvolvimento de produtos 🚀. <br /> 
      </p>

      <h4>Meus Projetos</h4>
        <a className="links" href="https://portfoliorebecabalbino.notion.site/Estudo-de-caso-7de1fe24aead4bb08526b5d758897e2b" target="=_blank">Casa Verde</a>
          <p class="subparagrafo">
          Case de estudo desenvolvida para aplicar conhecimentos <br />
          de design de interface e experiência do usuário. <br /> 
          </p>
        <a className="links" href="https://portfoliorebecabalbino.notion.site/Instituto-Bushido-b26e354c4248474abd79317218ddff84" target="=_blank">Apoie uma ONG|Vagas UX</a>
          <p class="subparagrafo">
          Um desafio organizado pela Vagas UX e JovensUX&UI, na qual participamos de equipes <br />
          formadas por pessoas que assumiram diferentes cargos/funções com o objetivo de todas as equipes <br />
          serem equilibradas e cada um executar atividades que havia selecionado previamente. <br />
          O Foco era estudar um ONG real, entender a sua problemática e desenvolver uma solução. <br /> 
          </p>
    </div>
  </div>

  );
}

export default InicioPage;


