import { createTheme, ThemeProvider } from "@rneui/themed";
import { Text } from "react-native";
import { theme } from "./src/styles";


const AppWrapper = () => {
  
  return (
    <ThemeProvider  >
      <Text>Hello chaima !!</Text>
    </ThemeProvider>
  );
};



export default AppWrapper;
