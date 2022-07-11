import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

// Pages 📑
import AllQoutes from "./pages/AllQuotes";
import NewQoute from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QouteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQoutes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QouteDetail />
        </Route>
        <Route path="/new-quote">
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
