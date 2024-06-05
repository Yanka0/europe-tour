import {FunctionComponent} from 'react';
import styles from "src/components/home/countryCards/card/countryCard.module.scss";
import Button from "src/utils/button/Button.tsx";
import {Col, Container} from "react-bootstrap";
import {CountryData} from "src/store/entities/country/thunks/get-countries.ts";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

type Props = {
  country: CountryData
};
const API_URL = import.meta.env.VITE_API_URL;
const CountryCard: FunctionComponent<Props> = ({country}) => {
  const {t} = useTranslation();

  return (
    <Container>
     <Col className={styles.countryCard}>
      <NavLink to={`/country/${country.id}`}>
        <div className={styles.countryCardOverlay}>
          <img src={`${API_URL}/img/${country.imgs.mainImg}`}alt={country.name} className={styles.countryCardImage}/>
          <div className={styles.countryCardText}>
            <p className={styles.countryCardsTitle}>{country.name}</p>
            <Button children={t('moreDetails')} className={styles.countryCardBtn}/>
          </div>
        </div>
      </NavLink>
     </Col>
    </Container>
  );
};

export default CountryCard;
