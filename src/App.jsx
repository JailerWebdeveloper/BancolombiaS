import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import NotFound from './pages/NotFound.jsx';
import PrivateRoutes from './routes.jsx';
import Register from './pages/Register.jsx';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Registro" element={<Register />} />
          {/* Rutas privadas */}
          <Route path="/*" element={<PrivateRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
