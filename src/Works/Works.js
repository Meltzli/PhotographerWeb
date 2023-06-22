import "./Works.css";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import { worksImages } from "./worksImages";
import "@brainhubeu/react-carousel/lib/style.css";
let coruselPluginsObj = {
  plugin1: "arrows",
  plugin2: "infinite",
  // Создал обьект с названием coruselPluginsObj, с 2 ключами plugin1/2 со значениями arrows и infinite
};
export const Works = ({ innerref }) => {
  function callBack(work, index) {
    return (
      <div key={work} className="WorkContainer">
        <img className="Work" src={work} alt={`${index}`} />
      </div>
    );
  }
  const mapResult = worksImages.map(callBack);
  const myWorksText = "Мои работы";
  const coruselPlugins = [
    coruselPluginsObj.plugin1,
    coruselPluginsObj.plugin2,
    // использовал свойста обьекта
    {
      resolve: slidesToShowPlugin,
      options: {
        numberOfSlides: 3,
      },
    },
  ];

  return (
    <div ref={innerref}>
      <div className="WorksText">
        <p className="MyWorksText"> {myWorksText} </p>
      </div>
      <div className="Works">
        <Carousel className="Carousel" plugins={coruselPlugins}>
          {mapResult}
        </Carousel>
      </div>
    </div>
  );
};
