import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Layout from "./components/Layout"
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route exact path = "/blogs">
             <Blogs />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App;
