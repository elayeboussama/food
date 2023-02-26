import { createTheme, ThemeProvider } from "@rneui/themed";
import { theme } from "./src/styles";

const AppWrapper = () => {
  
  return (
    <Provider store={store}>
      <Text>Hello chaima !!</Text>
    </Provider>
  );
};



export default AppWrapper;
