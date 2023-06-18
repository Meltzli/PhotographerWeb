import "./PhotoAbout.css";
import DianaAvatar from "../photos/DianaAvatar.jpg";
export const PhotoAbout = (props) => {
  return (
    <div ref={props.innerref} className="PhotoAboutContainer">
      <div className="PhotoAbout">
        <div className="photo">
          <img className="DianaAvatar" src={DianaAvatar} alt="Avatar" />
        </div>
        <div className="AboutTextContainer">
          <p className="AboutText">
            Меня зовут Диана. Я начинающий фотограф. Мне 17 лет.
          </p>
        </div>
      </div>
    </div>
  );
};
