import QuoteList from "../components/quotes/QuoteList";

const DUMMY_DATA = [
  { id: "q1", author: "Ahmad", text: "Learning react is great!" },
  { id: "q2", author: "Ahmadreza", text: "Learning react is fun!" },
];

const AllQoutes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQoutes;
