import {FunctionComponent} from 'react';
import Home from "src/components/home/Home.tsx";
import AboutUsCards from "src/components/home/aboutUsCards/AboutUsCards.tsx";
import CountryCards from "src/components/home/countryCards/CountryCards.tsx";


type Props = {};
const HomePage: FunctionComponent<Props> = () => {
  return (
    <div>
      <Home/>
      <AboutUsCards/>
      <CountryCards/>
    </div>);
};

export default HomePage;
