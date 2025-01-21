import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Content.scss";
import star from "../../assets/Images/ic_star.svg";
import heart from "../../assets/Images/ic_heart.svg";

// Interface para la receta
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

const ContainerRecetas: React.FC = () => {
  const [recipes, setRecipes] = useState<CardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Llamada a la API de Spoonacular
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/random?number=4&apiKey=7ea3b34835e34bc29744d486b13c3dfc"
        );
        const data = response.data.recipes;

        // Mapear los datos que devuelve la API para ajustarlos a nuestra estructura
        interface SpoonacularRecipe {
          image: string;
          title: string;
          healthScore: number;
          servings: number;
          readyInMinutes: number;
          difficulty?: string;
        }

        const formattedData = data.map(
          (recipe: SpoonacularRecipe, index: number) => ({
            id: index + 1,
            image: recipe.image,
            titles: recipe.title.split(" "),
            rating: recipe.healthScore.toString(),
            icons: [star, heart],
            info: {
              portion: recipe.servings > 1 ? "Grande" : "Pequeña", // A modo de ejemplo
              prepTime: recipe.readyInMinutes + " mins",
              difficulty: recipe.difficulty || "Moderada",
            },
          })
        );

        setRecipes(formattedData);
        setLoading(false);
      } catch {
        setError("Error al cargar las recetas");
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="containerRecetas">
      <h1>Nuevas Recetas</h1>
      {loading ? (
        <div>Cargando...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="recetas">
          {recipes.map((card) => (
            <CardMenu key={card.id} data={card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContainerRecetas;
