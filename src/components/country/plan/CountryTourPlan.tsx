import {FunctionComponent} from 'react';
import {useParams} from "react-router-dom";
import {useGetCountriesQuery} from "src/store/services/api.ts";
import styles from 'src/components/country/plan/countryTourPlan.module.scss'
import done_icon from 'src/img/done_icon.svg'
import {useTranslation} from "react-i18next";

type Props = {};

const CountryTourPlan: FunctionComponent<Props> = () => {
  const {countryId} = useParams()
  const {i18n} = useTranslation();
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
    <div className={styles.programItems}>
      {country.program.map(({title, plan}, index) => (
          <div key={index} className={styles.programItem}>
            <div className={styles.titleContainer}>
              <p className={styles.title}>{title}</p>
              <img src={done_icon} width={30} height={30}/>
            </div>
            <ul>
              {plan.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default CountryTourPlan;
