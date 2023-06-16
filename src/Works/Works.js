import "./Works.css";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import { worksImages } from "./worksImages";
import "@brainhubeu/react-carousel/lib/style.css";
export const Works = () => {
  const mapResult = worksImages.map((work, index) => (
    <div key={work} className="WorkContainer">
      <img className="Work" src={work} alt={`${index}`} />
    </div>
  ));
  const myWorksText = "Мои работы";
  const coruselPlugins = [
    "arrows",
    "infinite",
    {
      resolve: slidesToShowPlugin,
      options: {
        numberOfSlides: 3,
      },
    },
  ];

  return (
    <div>
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
