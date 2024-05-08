import {FunctionComponent} from 'react';
import {Container} from "react-bootstrap";
import Title from "src/utils/title/Title.tsx";
import {useGetCountriesQuery} from "src/store/services/api.ts";
import CountryCard from "src/components/home/countryCards/card/CountryCard.tsx";
import {useTranslation} from "react-i18next";
import styles from 'src/components/home/countryCards/card/countryCard.module.scss'
interface OwnProps {
}

type Props = OwnProps;

const CountryCards: FunctionComponent<Props> = () => {
  const {t, i18n} = useTranslation();
  const {data: countries} = useGetCountriesQuery(i18n.language)
  if (!countries) {
    return null
  }
  return (
    <Container>
      <Title name={t('ourDirections')}/>
      <div className={styles.allCards}>
          {countries.map(country => (
            <CountryCard key={country.id} country={country}/>
          ))}
      </div>
    </Container>
  );
};

export default CountryCards;
