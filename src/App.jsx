import './App.scss';
import Kanye from "./components/Kanye/Kanye";
import Pokemon from "./components/Pokemon/Pokemon";

const App = () => {
  return (
    <div className="App">
      <h1>API Interactions</h1>

      <div className="api">
        <Kanye heading="1) Kanye West" />

        {/* <hr /> */}

        <Pokemon heading="2) Pokemon" />
      </div>

    </div>
  );
}

export default App;