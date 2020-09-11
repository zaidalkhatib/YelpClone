import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Linking,
  Button,
} from "react-native";
import Yelp from "../Components/Yelp";
import openMap from "react-native-open-maps";

const ResultsShowScreen = ({navigation}) => {
  const id = navigation.getParam("id");
  const [photo, setPhoto] = useState([]);
  const [data, setData] = useState({});

  const dirction = () => {
    openMap({
      latitude: data.coordinates.latitude,
      longitude: data.coordinates.longitude,
    });
  };
  const fetchDetails = async () => {
    const response = await Yelp.get(`/${id}`);
    setPhoto(response.data.photos);
    setData(response.data);
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <View>
      <Text style={Style.textStyle}>{data.name}</Text>

      <FlatList
        data={photo}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image style={Style.photoStyle} source={{uri: item}} />;
        }}
      />
      <Text style={Style.infoStyle}>More Info</Text>
      <View
        style={{
          backgroundColor: "#d3edf8",
          padding: 20,
          margin: 10,
        }}
      >
        {data.location ? (
          <Text style={Style.locationStyle}>
            Address: {data.location.display_address[0]},{" "}
            {data.location.display_address[1]}
          </Text>
        ) : null}
        <Text style={{marginLeft: 10, marginBottom: 10, fontWeight: "bold"}}>
          Phone: {data.phone}
        </Text>
        {data.is_closed ? (
          <Text
            style={{
              fontSize: 16,
              color: "red",
              marginLeft: 10,
              fontWeight: "bold",
            }}
          >
            Closed
          </Text>
        ) : (
          <Text
            style={{
              fontSize: 16,
              color: "blue",
              marginLeft: 10,
              fontWeight: "bold",
            }}
          >
            Open
          </Text>
        )}
        <Text
          style={{
            fontSize: 16,
            color: "red",
            margin: 10,
            fontWeight: "bold",
          }}
          onPress={() => Linking.openURL(data.url)}
        >
          Yelp Link
        </Text>
        <Button title="Dirction" onPress={dirction} />
      </View>
    </View>
  );
};
const Style = StyleSheet.create({
  photoStyle: {
    margin: 15,
    width: 330,
    height: 200,
    borderRadius: 10,
  },
  textStyle: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 23,
    fontWeight: "bold",
  },

  infoStyle: {
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    fontSize: 22,
    color: "#dc143c",
  },
  locationStyle: {
    margin: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ResultsShowScreen;
