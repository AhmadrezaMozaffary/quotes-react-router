import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQoute from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
  { id: "q1", author: "Ahmad", text: "Learning react is great!" },
  { id: "q2", author: "Ahmadreza", text: "Learning react is fun!" },
];

const QouteDetail = () => {
  const { qouteID: ID } = useParams();

  const qoute = DUMMY_DATA.find((qoute) => qoute.id === ID);

  if (!qoute) {
    return (
      <>
        <h1>404 No Qoute found !</h1>
        <Link to="/qoutes">Home</Link>
      </>
    );
  }

  return (
    <>
      <HighlightedQoute text={qoute.text} author={qoute.author} />
      <Route path={`/qoutes/${ID}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/qoutes/${ID}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`/qoutes/${ID}/comments`} exact>
        <Comments />
        <div className="centered">
          <Link className="btn--flat" to={`/qoutes/${ID}`}>
            Close comments
          </Link>{" "}
        </div>
      </Route>
    </>
  );
};

export default QouteDetail;
