import {FunctionComponent} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {CountryData} from "src/store/entities/country/thunks/get-countries.ts";
import styles from 'src/components/country/slider/countrySlider.module.scss'


type Props = {
  country: CountryData
};

const API_URL = import.meta.env.VITE_API_URL;

const CountrySlider: FunctionComponent<Props> = ({country}) => {

  return (
    <Carousel fade>
      {country.imgs.sliderImgs.map((img:string, index:number) => (
        <Carousel.Item key={index}>
          <img className={styles.countryItemImage} src={`${API_URL}/img/${img}`}/>
          <Carousel.Caption>
            <div className={styles.countryItemAbout}>
              <p className={styles.title}>{country.title}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CountrySlider;
