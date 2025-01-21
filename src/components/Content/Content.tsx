import React from "react";
import "./Content.scss";
import Ojingeo from "../../assets/Images/ic_ojingeo_muchim.png";
import colaChicken from "../../assets/Images/ic_cola_chicken.png";
import sweetCherries from "../../assets/Images/ic_cherries.png";
import roastedCarrot from "../../assets/Images/ic_roasted_carrot.png";
import star from "../../assets/Images/ic_star.svg";
import heart from "../../assets/Images/ic_heart.svg";

interface RecipeInfo {
  portion: string;
  prepTime: string;
  difficulty: string;
}

interface CardData {
  id: number;
  image: string;
  titles: string[];
  rating: string;
  icons: string[];
  info: RecipeInfo;
}

const cardsData: CardData[] = [
  {
    id: 1,
    image: Ojingeo,
    titles: ["Ojingeo", "Muchim"],
    rating: "5.0",
    icons: [star, heart],
    info: {
      portion: "Grande",
      prepTime: "30 mins",
      difficulty: "Moderada",
    },
  },
  {
    id: 2,
    image: sweetCherries,
    titles: ["Sweet", "Cherries"],
    rating: "4.0",
    icons: [star, heart],
    info: {
      portion: "Pequeña",
      prepTime: "15 mins",
      difficulty: "Fácil",
    },
  },
  {
    id: 3,
    image: roastedCarrot,
    titles: ["Roasted", "Carrot"],
    rating: "4.5",
    icons: [star, heart],
    info: {
      portion: "Mediana",
      prepTime: "40 mins",
      difficulty: "Moderada",
    },
  },
  {
    id: 4,
    image: colaChicken,
    titles: ["Cola", "Chicken"],
    rating: "5.0",
    icons: [star, heart],
    info: {
      portion: "Grande",
      prepTime: "50 mins",
      difficulty: "Difícil",
    },
  },
];

const CardMenu: React.FC<{ data: CardData }> = ({ data }) => (
  <div className="card-menu">
    <div className="card-menu-image">
      <img src={data.image} alt={data.titles[0]} />
    </div>
    <div className="card-menu-titles">
      <div className="title-poppins">{data.titles[0]}</div>
      <div className="title-dancing">{data.titles[1]}</div>
    </div>
    <div className="card-menu-icons">
      <div className="star">
        <img src={data.icons[0]} alt="estrella" />
      </div>
      <div className="rating">{data.rating}</div>
    </div>
    <div className="heart">
      <img src={data.icons[1]} alt="corazón" />
    </div>
    <div className="card-info">
      <p className="info-title">Porción:</p>
      <p className="info-value">{data.info.portion}</p>
      <p className="info-title">Tiempo de preparación:</p>
      <p className="info-value">{data.info.prepTime}</p>
      <p className="info-title">Dificultad:</p>
      <p className="info-value">{data.info.difficulty}</p>
    </div>
  </div>
);

const ContainerRecetas: React.FC = () => (
  <div className="containerRecetas">
    <h1>Nuevas Recetas</h1>
    <div className="recetas">
      {cardsData.map((card) => (
        <CardMenu key={card.id} data={card} />
      ))}
    </div>
  </div>
);

export default ContainerRecetas;
