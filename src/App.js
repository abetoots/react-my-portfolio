import React from 'react';

//Routing
import { BrowserRouter } from 'react-router-dom';

//Components
import RoutesList from './core/RoutesList/RoutesList';

//Misc
import { list } from './misc/shared/link-list';
import { uniqueRoutes } from './misc/shared/helper-funcs';

import '@fontsource/pt-sans';
import '@fontsource/oswald';

const App = () => {
  const routes = uniqueRoutes(list.flat());

  return (
    <BrowserRouter>
      <RoutesList routes={routes} />
    </BrowserRouter>
  );
};

export default App;
