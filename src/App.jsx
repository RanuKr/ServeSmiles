import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FAQ from "./components/FAQS/FAQ";
import Navbar from "./components/Hero/Navbar";
import Home from "./components/Home";
import Events from "./components/Events";
import Donations from './components/Donations';
import DonateFundsForm from './components/DonateFundsForm';
import ItemForm from './components/ItemForm';
import ContactUs from "./components/Hero/ContactUs";
import SignIn from "./components/Profiles/SignIn"; 
import SignUp from "./components/Profiles/SignUp"; 
import Profile from "./components/Profiles/Profile";
import Delivery from './components/FAQS/Delivery'; 
import Account from './components/FAQS/Account'; 
import JoinUs from './components/FAQS/JoinUs'; 
import Findus from './components/FAQS/Findus'; 
import Registration from './components/FAQS/Registration'; 
import AdminPanel from "./components/Hero/Adminpanel";
import Sidebar from "./components/Hero/Sidebar";
import Volunteers from "./components/Pages/Volunteers";
import NewsPage from "./components/Pages/News";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donations />} />
        <Route path="/donatefundsform" element={<DonateFundsForm />} /> 
        <Route path="/itemsform" element={<ItemForm />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/signIn" element={<SignIn />} /> 
        <Route path="/signUp" element={<SignUp />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/account" element={<Account />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/findus" element={<Findus />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/sidebar" element={<Sidebar />} /> 
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/news" element={<NewsPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;