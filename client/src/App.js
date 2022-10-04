import { BrowserRouter as Router,  Routes,  Route,  Navigate,} from "react-router-dom";
import AddCenter from "./AddCenter";
import GlobalStyles from "./GlobalStyles";
import Home from "./FindCenters";
import Header from "./Header";
import Wellness from "./Wellness";
import FindCenters from "./FindCenters";
import Articles from "./Articles";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/admin" element={<AddCenter />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/findcenters" element={<FindCenters />}  />
        
        
        <Route path="/articles/:Id" element={<Articles/>} />
        <Route path="/signin" />
        <Route path="/search" />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
