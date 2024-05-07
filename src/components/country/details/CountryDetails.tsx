import {FunctionComponent} from 'react';
import styles from 'src/components/country/details/countryDetails.module.scss'
import CountrySlider from "src/components/country/slider/CountrySlider.tsx";
import {useParams} from "react-router-dom";
import {useGetCountriesQuery} from "src/store/services/api.ts";
import {Container} from "react-bootstrap";
import calendar_icon from 'src/img/time_icon.svg'
import info_icon from 'src/img/info_icon.svg'
import map_icon from 'src/img/map_icon.svg'
import {useTranslation} from "react-i18next";


type Props = {}

const CountryDetails: FunctionComponent<Props> = () => {
  const {countryId} = useParams()
  const {t, i18n} = useTranslation();

  const {data: country} = useGetCountriesQuery(i18n.language, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({id}) => countryId === id)
    })
  });
  if (!country || !countryId) {
    return null
  }

  return (
    <div key={country.id}>
      <CountrySlider country={country}/>
      <Container>
        <div className={styles.countryItem}>
          <div className={styles.countryItemInfo}>
            <img src={calendar_icon} height={23} width={23}/>
            <p className={styles.countryItemTitle}>{t('duration')}</p>
            <p>{country.duration}</p>
          </div>
          <div className={styles.countryItemInfo}>
            <img src={map_icon} height={23} width={23}/>
            <p className={styles.countryItemTitle}>{t('itemCountries')}</p>
            <p>{country.countries}</p>
          </div>
          <div className={styles.countryItemInfo}>
            <img src={info_icon} height={23} width={23}/>
            <p className={styles.countryItemTitle}>{t('description')}</p>
            <p>{country.description}</p>
          </div>
        </div>
      </Container>
    </div>
  )
};

export default CountryDetails;
