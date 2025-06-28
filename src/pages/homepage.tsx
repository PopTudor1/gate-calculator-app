import { useNavigate } from "react-router-dom";
import "./homepage.css";

export default function Homepage() {
  const navigate = useNavigate();

  const handleComparator = () => {
    navigate("/gate-comparator");
  };

  const handleSimulator = () => {
    navigate("/gate-simulator");
  };

  return (
    <div className="homepage">
      <h1 className="homepage-title">This is the homepage</h1>

      <button onClick={handleComparator} className="homepage-button">
        Go to Gate Comparator
      </button>

      <button onClick={handleSimulator} className="homepage-button">
        Go to Gate Simulator
      </button>
    </div>
  );
}
