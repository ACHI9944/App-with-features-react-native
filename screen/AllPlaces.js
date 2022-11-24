import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";

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
    if (route.params) {
      setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [route]);
  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
