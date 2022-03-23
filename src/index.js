import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes  } from "react-router-dom";


import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts
import Index from "views/Index.js";


ReactDOM.render(
  
    <BrowserRouter >
      <Routes>
        {/* add routes with layouts */}
        <Route path="admin//*" element={<Admin/>} />
        <Route path="auth//*" element={<Auth/>} />
        {/* add routes without layouts */}
        <Route path="/" element={<Index/>} />
        {/* add Navigate for first page */}
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  ,
  document.getElementById("root")
);
