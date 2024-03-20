import "./App.css";
import data from "./assets/movies_rnexgr.json";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Section data={data} />
    </>
  );
}

export default App;
