import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, Image, TextInput} from "react-native";
import SearchBar from "./SearchBar";
import Yelp from "../Components/Yelp";
import ResultList from "../Components/ResultList";
import {ScrollView} from "react-native-gesture-handler";

const SearchScreen = ({navigation}) => {
  const [input, setInput] = useState("");
  const [restuaruant, setRestuarant] = useState([]);
  const [error, setError] = useState("");
  const [location, setLocation] = useState("");

  const fatchData = async (aninput) => {
    try {
      const response = await Yelp.get("/search", {
        params: {
          limit: 50,
          term: aninput,
          location: "San Francsico",
        },
      });
      setRestuarant(response.data.businesses);
    } catch (err) {
      setError(error);
    }
  };

  useEffect(() => {
    fatchData("");
  }, []);
  const cheap = restuaruant.filter((restuaruant) => {
    return restuaruant.price === "$";
  });
  const avarage = restuaruant.filter((restuaruant) => {
    return restuaruant.price === "$$";
  });
  const expensive = restuaruant.filter((restuaruant) => {
    return restuaruant.price === "$$$";
  });
  return (
    <>
      <ScrollView>
        <SearchBar
          input={input}
          onInputChage={(input) => {
            setInput(input);
          }}
          onInputSubmitted={() => {
            fatchData(input);
          }}
        />

        <ResultList
          fetchData={fatchData}
          title="Best Price"
          restuaruant={cheap}
          navigation={navigation}
        />
        <ResultList
          fetchData={fatchData}
          title="Avarge Price"
          restuaruant={avarage}
          navigation={navigation}
        />
        <ResultList
          fetchData={fatchData}
          title="More Expensive"
          restuaruant={expensive}
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
