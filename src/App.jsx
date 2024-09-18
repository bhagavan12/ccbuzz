import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MatchList from './comp/comp2'; // Assuming MatchList component is in src/comp
// import MatchDetail from './comp/comp1'; // Component for individual match details
import Comp3 from './comp/comp3';
import Navbar from './comp/navbar/Navbar';
import Tabs from './comp/pages/Tabs';
const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          {/* <Route path="/" element={<MatchList />} />  Match List component */}
          {/* <Route path="/match/:id" element={<MatchDetail />} />  Match Detail component */}
          <Route path='/comp3' element={<Comp3 />} />
          <Route path='/livep' element={<Tabs />} />
          
        </Routes>
      </Router>
    </>
  );
};

export default App;
