import "./App.scss";

import Providers from "./config/Providers";
import Router from "./config/Router";

function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}

export default App;
