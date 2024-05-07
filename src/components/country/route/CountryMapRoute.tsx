import {FunctionComponent} from 'react';
import Map from "src/utils/map/Map.tsx";
import {useParams} from "react-router-dom";
import {useGetCountriesQuery} from "src/store/services/api.ts";

interface OwnProps {
}

type Props = OwnProps;

const CountryMapRoute: FunctionComponent<Props> = () => {
  const {countryId} = useParams()

  const {data: country} = useGetCountriesQuery('en', {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({id}) => countryId === id)
    })
  });

  if (!country || !countryId) {
    return null
  }

  return <Map waypoints={country.waypoints}/>;
};

export default CountryMapRoute;
