import { useState, useContext } from "react";
import GEDContext from "../store/GEDContext";

const Create = (props) => {
  const [name, setName] = useState("");
  const globalEventDistributor = useContext(GEDContext);

  const handleSubmit = () => {
    console.log(`Name Of ToDO is ${name}`);
    if (globalEventDistributor) {
      globalEventDistributor.dispatch({ type: "ADD", data: { name } });
    }
  };

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          onChange={(event) => {
            //@ts-ignore
            setName(event.target.value);
          }}
        />
      </label>
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};
export default Create;
