import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {AntDesign} from "@expo/vector-icons";
const ResultsDetail = ({image, name, rating, review}) => {
  return (
    <View style={Styles.viewStyle}>
      <Image style={Styles.styleImage} source={{uri: image}} />
      <Text style={Styles.styleText}>{name}</Text>
      <Text style={Styles.reviewStyle}> {`${review} Reviews `}</Text>
      <Text style={Styles.reatingStyle}>
        <AntDesign name="star" size={18} color="black" /> {rating}{" "}
      </Text>
    </View>
  );
};
const Styles = StyleSheet.create({
  viewStyle: {},
  styleImage: {
    height: 150,
    width: 250,
    margin: 10,
    borderRadius: 10,
  },
  styleText: {
    fontSize: 15,
    padding: 12,
    fontWeight: "bold",
  },
  reatingStyle: {
    fontSize: 15,
    marginLeft: 8,
    marginBottom: 20,
  },
  reviewStyle: {
    fontSize: 15,
    marginLeft: 8,
    marginBottom: 10,
  },
});

export default ResultsDetail;
