import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Wundt }  from "./Components/Wundt";
import { Psychsex }  from "./Components/Psychsex";
import { Anna } from "./Components/Anna";
import { Titch } from "./Components/Titch";
import { Timeline } from "./Components/Timeline";
import { James } from "./Components/James";
import { Functionalism } from "./Components/Functionalism";
import { Iceberg } from "./Components/Iceberg";


function App() {
      return (
    
      <Router>
          <Routes>        
             <Route exact path="/Wundt" element={<Wundt />} />
             <Route exact path="/Psychsex" element={<Psychsex />} />
              <Route exact path="/Anna" element={<Anna  />} />
              <Route exact path="/Titch" element={<Titch  />} />
              <Route exact path="/James" element={<James />} />
              <Route exact path="/Functionalism" element={<Functionalism />} />
              <Route exact path="/Iceberg" element={<Iceberg />} />
              <Route exact path="/*" element={<Timeline />} />
          </Routes>
      </Router>
  
)};

export default App;
