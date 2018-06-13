import { AppRegistry } from "react-native";
import App from "./__client__/App";

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
