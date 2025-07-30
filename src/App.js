import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './Include/Footer';
import Header from './Include/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './Home/Main';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Portfolio from './Portfolio/Portfolio';
import Community from './Community/Community';
import Disclaimer from './Page/Disclaimer';
import Disclosure from './Page/Disclosure';
import GrievanceRedressal from './Page/GrievanceRedressal';
import TermsAndConditions from './Page/TermsAndConditions';
import RefundPolicy from './Page/Refund';
import DosAndDonts from './Page/Do';
import PrivacyPolicy from './Page/Privacy';
import Comingsoon from './Comingsoon';
import GlobalClickScrollTop from './GlobalClickScrollTop';

function App() {
  return (
    <Router>
      <GlobalClickScrollTop/>
      <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/community" element={<Community />} />
           <Route path="/disclaimer" element={<Disclaimer />} />
           <Route path="/disclosure" element={<Disclosure />} />
           <Route path="/grievanceredressal" element={<GrievanceRedressal />} />
           <Route path="/terms-conditions" element={<TermsAndConditions />} />
           <Route path="/refund-policy" element={<RefundPolicy />} />
           <Route path="/do-donots" element={<DosAndDonts />} />
           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
           <Route path="/coming-soon" element={<Comingsoon />} />

           
          
        </Routes>

<Footer/>

    </Router>
  );
}

export default App;
