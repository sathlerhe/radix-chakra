import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Layout from "../container/Layout";
import Radix from "../pages/Radix";
import Chakra from "../pages/Chakra";

function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Radix />} />

          <Route path="/chakra" element={<Chakra />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRoutes;
