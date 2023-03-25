import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import NotFound from "./NotFound404";
import TableOne from "./Components/Tables/TableOne";
import TableTwo from './Components/Tables/TableTwo'
import TableThree from './Components/Tables/TableThree'
import TableFour from './Components/Tables/TableFour'


function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="tableone" element={<TableOne />} />
        <Route path="tabletwo" element={<TableTwo />} />
        <Route path="tablethree" element={<TableThree />} />
        <Route path="tablefour" element={<TableFour />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  );
}

export default App;
