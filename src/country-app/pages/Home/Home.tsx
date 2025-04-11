import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/countries");
  };
  return (
    <div>
      <button onClick={handleClick}>Get Countries</button>
    </div>
  );
}
