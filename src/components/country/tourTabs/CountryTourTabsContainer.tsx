import  { FunctionComponent } from 'react';
import {Container} from "react-bootstrap";
import CountryTourTabs from "src/components/country/tourTabs/CountryTourTabs.tsx";
import {Outlet} from "react-router-dom";

interface OwnProps {}

type Props = OwnProps;

const CountryTourTabsContainer: FunctionComponent<Props> = () => {

  return (
    <div style={{backgroundColor: '#faf9f9', paddingBottom: '20px'}}>
      <Container>
        <CountryTourTabs/>
        <Outlet/>
      </Container>
    </div>
  );
};

export default CountryTourTabsContainer;
