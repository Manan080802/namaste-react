import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="res-error">
      <h1>Oops!!</h1>
      <h2>Some Error</h2>
      <h3>
        status:{err.status} statusText:{err.statusText}
      </h3>
    </div>
  );
};
export default Error;
