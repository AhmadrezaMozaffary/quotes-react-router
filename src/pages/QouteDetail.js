import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QouteDetail = () => {
  const { qouteID: ID } = useParams();

  return (
    <>
      <Route path={`/qoutes/${ID}`} exact>
        <p>QouteDetail</p>
        <h1> ID : {ID}</h1>
      </Route>
      <Route path={`/qoutes/${ID}/comments`} exact>
        <Comments />
      </Route>
    </>
  );
};

export default QouteDetail;
