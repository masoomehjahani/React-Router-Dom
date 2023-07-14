import {  BrowserRouter, Link, Route,Routes} from "react-router-dom";
import Layout from "./Layout/Layout";

import routes from "./routes";

//BrowserRouter componenty le tamame router ha ra shamel mishavad

function App() {
  return (
    <BrowserRouter>
    {/* can render layout here just once as parent routes!  */}
    <Layout>
    <Routes>
    {routes.map(route =>
      <Route {...route} />
    )}
    </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
