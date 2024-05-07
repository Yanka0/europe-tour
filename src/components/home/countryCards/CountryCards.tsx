import {FunctionComponent} from 'react';
import {Container, Row} from "react-bootstrap";
import Title from "src/utils/title/Title.tsx";
import {useGetCountriesQuery} from "src/store/services/api.ts";
import CountryCard from "src/components/home/countryCards/card/CountryCard.tsx";
import {CountryData} from "src/store/entities/country/thunks/get-countries.ts";
import {useTranslation} from "react-i18next";

interface OwnProps {
}

type Props = OwnProps;

const CountryCards: FunctionComponent<Props> = () => {
  const {t, i18n} = useTranslation();
  const {data: countries} = useGetCountriesQuery(i18n.language)
  if (!countries) {
    return null
  }
  const pairsOfCountries: CountryData[][] = [];

  for (let i = 0; i < countries.length; i += 2) {
    pairsOfCountries.push(countries.slice(i, i + 2));
  }

  return (
    <Container>
      <Title name={t('ourDirections')}/>
      {pairsOfCountries.map((pair, index) => (
        <Row key={index}>
          {pair.map(country => (
            <CountryCard key={country.id} country={country}/>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default CountryCards;
