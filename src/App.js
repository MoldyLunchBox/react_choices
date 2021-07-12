import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import YoutubeEmbed from "./components/YoutubeEmbed";
 
function App() {
  return (
    <Router>
      <Switch>
      <div className="container">
        <Route path="/YoutubeEmbed" component={YoutubeEmbed} />
        <Route path="/" exact component={Header} />
    </div>
      </Switch>
    </Router>
  );
}

export default App;
