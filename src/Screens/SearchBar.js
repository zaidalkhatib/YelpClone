import React from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";
import {AntDesign} from "@expo/vector-icons";
const SearchBar = ({onInputChage, input, onInputSubmitted}) => {
  return (
    <View style={styles.viewStyle}>
      <AntDesign
        name="search1"
        size={24}
        color="black"
        style={{paddingTop: 25, paddingLeft: 30}}
      />
      <TextInput
        value={input}
        autoCompleteType="off"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(text) => {
          onInputChage(text);
        }}
        style={styles.textInpuStyle}
        placeholder="Search"
        onEndEditing={() => {
          onInputSubmitted();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    backgroundColor: "#f0eeee",
    borderRadius: 20,
    marginTop: 17,
  },
  textInpuStyle: {
    height: 40,
    width: 300,
    borderColor: "#f0eeee",
    borderWidth: 1,
    margin: 17,
    borderRadius: 8,

    fontSize: 23,
  },
});
export default SearchBar;
