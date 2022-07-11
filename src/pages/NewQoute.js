import { useHistory } from "react-router-dom";
import QouteForm from "../components/quotes/QuoteForm";

const NewQoute = () => {
  const history = useHistory();

  const addQouteData = (qouteData) => {
    console.log(qouteData);

    history.replace("/qoutes");
  };

  return <QouteForm onAddQuote={addQouteData} />;
};

export default NewQoute;
