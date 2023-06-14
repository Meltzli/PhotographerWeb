import "./PhotoAbout.css";
import cat from "../photos/cat.jpg";
export const PhotoAbout = () => {
  return (
    <div className="PhotoAbout">
      <div className="photo">
        <img className="PhotoCat" src={cat} alt="cat" />
      </div>
      <div className="AboutTextContainer">
        <p className="AboutText">
          Меня зовут Диана. Я начинающий фотограф. Мне 17 лет.
        </p>
      </div>
    </div>
  );
};
