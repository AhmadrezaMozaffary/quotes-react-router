import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQoute from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
  { id: "q1", author: "Ahmad", text: "Learning react is great!" },
  { id: "q2", author: "Ahmadreza", text: "Learning react is fun!" },
];

const QouteDetail = () => {
  const { qouteID: ID } = useParams();
  const { path } = useRouteMatch();

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
      <Route path={path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${path}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${path}/comments`} exact>
        <Comments />
        <div className="centered">
          <Link className="btn--flat" to={path}>
            Close comments
          </Link>{" "}
        </div>
      </Route>
    </>
  );
};

export default QouteDetail;
