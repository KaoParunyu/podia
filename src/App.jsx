import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout";
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<MainLayout/>}/>
        <Route path=""/>
      
    </Routes>
   </Router>
  )
}

export default App