import { useNavigate } from "react-router-dom";
import "./homepage.css";

export default function Homepage() {
  const navigate = useNavigate();

  const handleSimulator = () => {
    navigate("/gate-simulator");
  };

  const handleComparator = () => {
    navigate("/gate-comparator");
  };

  return (
    <div className="homepage">
      <h1 className="homepage-title">HOMEPAGE</h1>

      <button onClick={handleSimulator} className="homepage-button">
        Go to Gate Simulator
      </button>
      <button onClick={handleComparator} className="homepage-button">
        Go to Gate Comparator
      </button>
    </div>
  );
}
