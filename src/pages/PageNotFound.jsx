import { useRouteError } from "react-router-dom";

export default function PageNotFound() {
  const error = useRouteError()
  return (
    <div>
      <h1>Oops</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
