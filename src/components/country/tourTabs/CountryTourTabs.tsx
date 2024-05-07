import {FunctionComponent} from 'react';
import {NavLink, useParams} from "react-router-dom";
import Button from "src/utils/button/Button.tsx";
import styles from 'src/components/country/tourTabs/countryTourTabs.module.scss'
import {useTranslation} from "react-i18next";

type Props = {};

const CountryTourTabs: FunctionComponent<Props> = () => {
  const {countryId} = useParams()
  const {t} = useTranslation();
  if (!countryId) {
    return null
  }
  return (
    <div className={styles.tabs}>
      <NavLink to={`/country/${countryId}/plan`}>
        {({isActive}) => <Button className={styles.tab} disabled={isActive}>
          {t('tourPlan')}
        </Button>}
      </NavLink>
      <NavLink to={`/country/${countryId}/dates`}>
        {({isActive}) => <Button className={styles.tab} disabled={isActive}>
          {t('dates')}
        </Button>}
      </NavLink>
      <NavLink to={`/country/${countryId}/map`}>
        {({isActive}) => <Button className={styles.tab} disabled={isActive}>
          {t('route')}
        </Button>}
      </NavLink>
      <NavLink to={`/country/${countryId}/reviews`}>
        {({isActive}) => <Button className={styles.tab} disabled={isActive}>
          {t('reviews')}
        </Button>}
      </NavLink>
    </div>
  );
};

export default CountryTourTabs;
