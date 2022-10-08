import { BrowserRouter as Router,  Routes,  Route,  Navigate,} from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home/Home";
import Header from "./Header";
import Wellness from "./Wellness";
import FindCenters from "./FindCenters";
import Articles from "./Articles";
import Signin from "./Signin";
import Footer from "./Footer";
import AdminProfile from "./Admin features/AdminProfile";
import AddCenter from "./Admin features/AddCenter";

const App = () => {
  return (
    <Router>
      
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/admin" element={<AdminProfile />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/findcenters" element={<FindCenters />}  />
        <Route path="/articles/:Id" element={<Articles/>} />
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/addcenter" element={<AddCenter/>} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
