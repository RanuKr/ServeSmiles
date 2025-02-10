import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FAQ from "./components/FAQ";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Events from "./components/Events";
import Donations from './components/Donations';
// import DonateFundsForm from './components/DonateFundsForm'; // Uncomment if needed
import ItemForm from './components/ItemForm';
import ContactUs from "./components/ContactUs";
import SignIn from "./components/SignIn"; // Uncommented
import SignUp from "./components/SignUp"; // Uncommented
import Profile from "./components/Profile";
import Delivery from './components/Delivery'; // Import your Delivery component
import Account from './components/Account'; // Import your Account component
import JoinUs from './components/JoinUs'; // Import your JoinUs component
import Findus from './components/Findus'; // Import your Findus component
import Registration from './components/Registration'; // Import your Registration component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donations />} />
        {/* <Route path="/donatefundsform" element={<DonateFundsForm />} /> */} {/* Uncomment if needed */}
        <Route path="/itemsform" element={<ItemForm />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/signIn" element={<SignIn />} /> {/* Uncommented */}
        <Route path="/signUp" element={<SignUp />} /> {/* Uncommented */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/account" element={<Account />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/findus" element={<Findus />} />
        <Route path="/registration" element={<Registration />} />
        {/* <AboutUs/> */} {/* Uncomment if needed */}
      </Routes>
    </Router>
  );
}

export default App;