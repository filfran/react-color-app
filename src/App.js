import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <h1>Palette list</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={() => <h1>Individual palette</h1>}
        />
      </Switch>
      {/* <Palette palette={generatePalette(seedColors[4])} />; */}
    </div>
  );
}

export default App;
