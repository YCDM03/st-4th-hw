import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home page</h2>
      <Link to="/detail/:id">go Detail</Link>
    </div>
  );
}
