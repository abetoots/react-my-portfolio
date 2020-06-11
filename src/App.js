import React, { useEffect, useState } from "react";

//Routing
import { BrowserRouter } from "react-router-dom";

//Components
import RoutesList from "./core/RoutesList/RoutesList";

//Misc
import { list } from "./misc/shared/link-list";
import { uniqueRoutes } from "./misc/shared/helper-funcs";

const App = () => {
  const routes = uniqueRoutes(list.flat());
  const [mounted, setMounted] = useState(false);

  //ComponentDidMount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <BrowserRouter>
      {mounted ? <RoutesList routes={routes} /> : ""}
    </BrowserRouter>
  );
};

export default App;
