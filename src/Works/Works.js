import "./Works.css";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import { worksImages1 } from "./worksImages";
import { worksImages2 } from "./worksImages";
import { worksImages3 } from "./worksImages";
import { worksImages4 } from "./worksImages";
import { worksImages5 } from "./worksImages";
import { worksImages6 } from "./worksImages";
import { worksImages7 } from "./worksImages";
import { worksImages8 } from "./worksImages";
import "@brainhubeu/react-carousel/lib/style.css";
// import { useState } from "react";
let coruselPluginsObj = {
  plugin1: "arrows",
  plugin2: "infinite",
  // Создал обьект с названием coruselPluginsObj, с 2 ключами plugin1/2 со значениями arrows и infinite
};
export const Works = ({ innerref }) => {
  // const [modalActive, setModalActive] = useState(true);
  function callBack(work, index) {
    return (
      <div key={work} className="WorkContainer">
        <img className="Work" src={work} alt={`${index}`} />
      </div>
    );
  }
  const mapResult1 = worksImages1.map(callBack);
  const mapResult2 = worksImages2.map(callBack);
  const mapResult3 = worksImages3.map(callBack);
  const mapResult4 = worksImages4.map(callBack);
  const mapResult5 = worksImages5.map(callBack);
  const mapResult6 = worksImages6.map(callBack);
  const mapResult7 = worksImages7.map(callBack);
  const mapResult8 = worksImages8.map(callBack);
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
          {mapResult1}
        </Carousel>
        <Carousel className="Carousel" plugins={coruselPlugins}>
          {mapResult2}
        </Carousel>
        <Carousel className="Carousel" plugins={coruselPlugins}>
          {mapResult3}
        </Carousel>
        <Carousel className="Carousel" plugins={coruselPlugins}>
          {mapResult4}
        </Carousel>
        <Carousel className="Carousel" plugins={coruselPlugins}>
          {mapResult5}
        </Carousel>
        <Carousel className="Carousel" plugins={coruselPlugins}>
          {mapResult6}
        </Carousel>
        <Carousel className="Carousel" plugins={coruselPlugins}>
          {mapResult7}
        </Carousel>
        <Carousel className="Carousel" plugins={coruselPlugins}>
          {mapResult8}
        </Carousel>
      </div>
      {/* <Modal active={modalActive} setActive={setModalActive} /> */}
    </div>
  );
};
