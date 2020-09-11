import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {FlatList} from "react-native-gesture-handler";
import ResultsDetail from "./ResultsDetail";
const ResultList = ({fatchData, restuaruant, title, navigation}) => {
  return (
    <View style={{flexDirection: "column"}}>
      <Text style={Styles.styleTitle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restuaruant}
        keyExtractor={(restuaruant) => {
          return restuaruant.id;
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Results", {id: item.id});
              }}
            >
              <ResultsDetail
                image={item.image_url}
                name={item.name}
                rating={item.rating}
                review={item.review_count}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  styleTitle: {
    fontSize: 25,
    padding: 14,
    color: "#dc143c",
    fontWeight: "bold",
  },
});

export default ResultList;
