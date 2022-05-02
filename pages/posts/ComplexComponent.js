import { useState } from "react";
import ComplexComponentData from "./ComplexComponentData";

const styles = {
  button: {
    border: "none",
    padding: "0.5rem 1rem",
    background: "#1122ff",
    borderRadius: "50%",
    opacity: "50%",
    color: "white",
  },
};
const ComplexComponent = () => {
  const [seeDetails, seeDetailsSet] = useState(false);
  const toggleDetails = () => seeDetailsSet((v) => !v);
  return (
    <div>
      <p>
        sit, amet consectetur adipisicing elit. Reiciendis commodi numquam
        incidunt blanditiis quibusdam atque natus inventore sunt autem iusto.
      </p>
      <h1>{ComplexComponentData.title}</h1>
      <button onClick={toggleDetails} style={styles.button}>
        {seeDetails ? "Hide" : "See"} Details
      </button>
      {seeDetails && (
        <ul>
          {ComplexComponentData.stuff.map((s) => (
            <li>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComplexComponent;
