import {FunctionComponent} from 'react';
import CountryDetails from "src/components/country/details/CountryDetails.tsx";
import CountryTourTabsContainer from "src/components/country/tourTabs/CountryTourTabsContainer.tsx";


type Props = {};

const CountryPage: FunctionComponent<Props> = () => {
  return (
    <div>
      <CountryDetails/>
      <CountryTourTabsContainer/>
    </div>
  );
};

export default CountryPage;
