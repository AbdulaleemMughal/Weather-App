import { Provider } from "react-redux";
import "./App.css";
import WeatherApp from "./Components/WeatherApp";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <WeatherApp />
    </Provider>
  );
}

export default App;