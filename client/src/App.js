import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Books from "./Pages/Books"
import Add from "./Pages/Add"
import Update from "./Pages/Update"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Books />} />
        <Route path='/add' element={<Add />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
