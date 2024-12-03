import { Header } from "../../components/Header/Header";
import { PetsFeed } from "../../components/PetsFeed/PetsFeed";
import { useAuth } from "../../contexts/AuthContext";
import landingPageImage from "../../../public/img/landing-page.jpg";
import missionImg from "../../../public/img/mission.jpg";
import visionImg from "../../../public/img/vision.jpg";
import valuesImg from "../../../public/img/values.jpg";

import "./Root.css";

function Root() {
  const { isLogged } = useAuth();
  return (
    <>
      <Header />
      {isLogged ? (
        <PetsFeed />
      ) : (
        <div className="container">
          <div className="main-container">
            <div className="main-info">
              <h1>Bem-vindo ao AnimaVenire</h1>
              <p>
                AnimaVenire é uma plataforma dedicada a ajudar animais perdidos
                a encontrarem seus lares. Aqui você pode adicionar informações
                sobre animais e ajudar a comunidade a encontrá-los.
              </p>
              <p>
                Faça login para adicionar informações de um animal ou visualizar
                o feed de animais.
              </p>
              <button>Crie a sua conta aqui</button>
            </div>
            <div className="image-container">
              <img
                src={landingPageImage}
                alt="Uma pessoa abraçando o cachorro."
              />
            </div>
          </div>
          <div className="container-section-2">
            <div className="wrapper">
              <div className="section">
                <img src={missionImg} alt="" />
                <div className="section-text">
                  <p className="section-title">Missão</p>
                  <p>
                    Reconectar famílias com seus animais de estimação,
                    centralizando informações de forma acessível e eficiente.
                    Nossa plataforma utiliza tecnologia para criar uma rede
                    colaborativa entre tutores, ONGs, veterinários e a
                    comunidade, sempre priorizando o bem-estar e a união entre
                    humanos e seus pets.
                  </p>
                </div>
              </div>
              <div className="section">
                <div className="section-text">
                  <p className="section-title">Visão</p>
                  <p>
                    Ser a principal referência em soluções para localização de
                    animais perdidos. Almejamos ser reconhecidos pela inovação,
                    confiabilidade e impacto positivo, reduzindo
                    significativamente o tempo necessário para reunir tutores e
                    seus pets.
                  </p>
                </div>
                <img src={visionImg} alt="" />
              </div>
              <div className="section">
                <img src={valuesImg} alt="" />
                <div className="section-text">
                  <p className="section-title">Valores</p>
                  <p>
                    Nossos valores são baseados na empatia, inovação,
                    colaboração, compromisso e acessibilidade, priorizando o
                    bem-estar dos animais, oferecendo soluções modernas, unindo
                    esforços com parceiros, agindo com responsabilidade e
                    garantindo uma plataforma inclusiva para todos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { Root };
