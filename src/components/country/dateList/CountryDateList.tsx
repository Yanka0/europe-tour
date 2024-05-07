import {FunctionComponent} from "react";
import {useGetDatesByCountryIdQuery,} from "src/store/services/api.ts";
import CountryDateItem from "src/components/country/dateList/CountryDateItem.tsx";
import {useParams} from "react-router-dom";
import {isIdExist} from "src/utils/functions.ts";
import styles from 'src/components/country/dateList/countryDate.module.scss'
import {useAuth} from "src/contexts/Auth.tsx";
import {useTranslation} from "react-i18next";

type Props = {}
const CountryDateList: FunctionComponent<Props> = () => {
  const {countryId} = useParams();
  isIdExist(countryId);
  const {user} = useAuth();
  const {t} = useTranslation();

  const {data: dates} = useGetDatesByCountryIdQuery(countryId)
  if (!dates || !countryId) {
    return null;
  }

  return (
    <div>
      {!user && (
        <p className={styles.dateListTitle}>
        {t('dateListTitle')}
      </p>
      )}
      <p className={styles.title}>{t("availableDates")}</p>
      <div className={styles.dateList}>
        {dates.map(({id, name, price}) => (
          <CountryDateItem key={id} id={id} name={name} price={price}/>
        ))}
      </div>
    </div>
  );

};
export default CountryDateList