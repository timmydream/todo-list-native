import { NativeRouter, Route, Routes } from "react-router-native";

import ItemsContainer from "./components/ItemsContainer";
import ItemPage from "./components/ItemPage";

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={<ItemsContainer />} />
        <Route path="/:item" element={<ItemPage />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;
