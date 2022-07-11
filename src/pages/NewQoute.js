import QouteForm from "../components/quotes/QuoteForm";

const NewQoute = () => {
  const addQouteData = (qouteData) => {
    console.log(qouteData);
  };

  return <QouteForm onAddQoute={addQouteData} />;
};

export default NewQoute;
