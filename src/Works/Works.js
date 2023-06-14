import "./Works.css";
import dog1 from "../photos/dog1.jpg";
import dog2 from "../photos/dog2.jpg";
export const Works = () => {
  return (
    <div>
      <div className="WorksText">
        <p className="MyWorksText">Мои работы</p>
      </div>
      <div className="Works">
        <div className="WorkContainer">
          <img className="Work" src={dog1} alt="dog1" />
        </div>
        <div className="WorkContainer">
          <img className="Work" src={dog2} alt="dog2" />
        </div>
      </div>
    </div>
  );
};
