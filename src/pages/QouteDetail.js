import { useEffect } from "react";
import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQoute from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QouteDetail = () => {
  const { quoteId: ID } = useParams();
  // const { path } = useRouteMatch();

  const {
    sendRequest,
    status,
    data: loadedQoutes,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(ID);
  }, [sendRequest, ID]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  // console.log(/);

  if (!loadedQoutes.text) {
    return (
      <>
        <p>No Quote found!</p>
        <Link to="/quotes">Home</Link>
      </>
    );
  }

  return (
    <>
      <HighlightedQoute text={loadedQoutes.text} author={loadedQoutes.author} />
      <Route path={`/quotes/${ID}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${ID}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${ID}/comments`} exact>
        <Comments quoteId={ID} />
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${ID}`}>
            Close comments
          </Link>{" "}
        </div>
      </Route>
    </>
  );
};

export default QouteDetail;
