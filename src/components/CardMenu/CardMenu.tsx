import "./CardMenu.scss";
import carrots from "../../assets/Images/ic_vegetarianos.svg";
import principales from "../../assets/Images/ic_principales.svg";
import tortas from "../../assets/Images/ic_tortas.svg";
import rapida from "../../assets/Images/ic_rapida.svg";
import menuNiños from "../../assets/Images/ic_menu_ninos.svg";
import sopas from "../../assets/Images/ic_sopas.svg";

const menuData = [
  { img: carrots, alt: "vegetarianos", title: "Vegetarianos" },
  { img: principales, alt: "principales", title: "Principales" },
  { img: tortas, alt: "tortas", title: "Tortas" },
  { img: rapida, alt: "rapida", title: "Rápida" },
  { img: menuNiños, alt: "Menu Niños", title: "Menú Niños" },
  { img: sopas, alt: "sopas", title: "Sopas" },
];

const CardMenu = () => {
  return (
    <div className="card-menu-container">
      {menuData.map((item, index) => (
        <div className="card-menu" key={index}>
          <div className="card-menu-image">
            <img src={item.img} alt={item.alt} />
          </div>
          <div className="card-menu-content">
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardMenu;
