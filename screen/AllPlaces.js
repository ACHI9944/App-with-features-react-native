import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "../util/database";

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();
  // useEffect(() => {
  //   if (isFocused && route.params) {
  //     setLoadedPlaces((curPlaces) => {
  //       const existingPlace = curPlaces.find(
  //         (existPlace) => existPlace.id === route.params.place.id
  //       );
  //       if (!!existingPlace) {
  //         return [...curPlaces];
  //       } else {
  //         return [...curPlaces, route.params.place];
  //       }
  //     });
  //   }
  // }, [isFocused , route]);
  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }

    if (isFocused) {
      loadPlaces();
      //setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocused]);
  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
