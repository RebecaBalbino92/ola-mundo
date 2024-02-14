import "./styles.css";
import { Link } from "react-router-dom";

const SobrePage = () => {
  return (
    <main className="center">
      <Link className="link" to="/sobre/preta-lab">
        <p>👉 Clique aqui e saiba sobre a PretaLab  </p>
      </Link>
    </main>
  );
};

export default SobrePage;