import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

// Pages 📑
import AllQoutes from "./pages/AllQoutes";
import NewQoute from "./pages/NewQoute";
import NotFound from "./pages/NotFound";
import QouteDetail from "./pages/QouteDetail";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/qoutes" />
        </Route>
        <Route path="/qoutes" exact>
          <AllQoutes />
        </Route>
        <Route path="/qoutes/:qouteID">
          <QouteDetail />
        </Route>
        <Route path="/new-qoute">
          <NewQoute />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
