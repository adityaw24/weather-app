// import './App.css'
import { Grid } from "semantic-ui-react";
import { Home } from "./components/page";
import { Sidebar as SidebarComponent } from "./components/organism";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { useWindowSize } from "@react-hook/window-size";
// import Home from './components/page/home/home'
import "./style/app.scss";
import { sizeWidth } from "./utils/const";

function App() {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD5Xaw9uirQ_KoI6IlUlnKWAOupu_Pc7gk",
    authDomain: "apps-weather.firebaseapp.com",
    projectId: "apps-weather",
    storageBucket: "apps-weather.appspot.com",
    messagingSenderId: "692780408516",
    appId: "1:692780408516:web:9c3d763a8c7d8678c27391",
    measurementId: "G-LVVSC89KPB",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  logEvent(analytics, "notification_received");

  const [width] = useWindowSize();

  console.log(width);

  return (
    <Grid className="root-grid">
      <Grid.Row stretched className="">
        <Grid.Column width={width < sizeWidth.laptop ? 16 : 12} stretched>
          <Home />
          {/* home */}
        </Grid.Column>
        {width > sizeWidth.tablet && (
          <Grid.Column width={4} stretched>
            <SidebarComponent />
          </Grid.Column>
        )}
      </Grid.Row>
    </Grid>
  );
}

export default App;
