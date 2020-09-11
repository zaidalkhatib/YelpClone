import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import ResultsShowScreen from "./src/Screens/ResultsShowScreen";
import SearchScreen from "./src/Screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Results: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
