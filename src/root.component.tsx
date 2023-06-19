import Create from "./components/create.component";
import { storeInstance } from "./store/store";
import GEDContext from "./store/GEDContext";
export default function Root(props) {
  // Store instance
  const globalEventDistributor = props.globalEventDistributor;
  console.log(props);
  if (globalEventDistributor) {
    globalEventDistributor.registerStore(storeInstance);
  }

  return (
    <section className="section">
      <h1>Create MicroFrontend</h1>
      <GEDContext.Provider value={globalEventDistributor}>
        <Create></Create>
      </GEDContext.Provider>
    </section>
  );
}
