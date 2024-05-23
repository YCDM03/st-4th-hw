import { useParams } from "react-router-dom";

useParams;

export default function Detail() {
  const params = useParams();
  console.log(params.id);
  return (
    <div>
      <h2>Detail page</h2>
    </div>
  );
}
