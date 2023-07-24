// import './App.css'
import { Grid } from "semantic-ui-react";
import { Home } from "./components/page";
import { Sidebar as SidebarComponent } from "./components/organism";
// import Home from './components/page/home/home'
import "./style/app.scss";

function App() {
  return (
    <Grid className="root-grid">
      <Grid.Row stretched className="">
        <Grid.Column width={12} stretched>
          <Home />
          {/* home */}
        </Grid.Column>
        <Grid.Column width={4} stretched>
          <SidebarComponent />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
