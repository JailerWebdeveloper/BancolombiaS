import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import RetirarDinero from './pages/RetirarDinero';
import TransferirDinero from './pages/TransferirDinero';

const isAuthenticated = () => {
  // return localStorage.getItem('authToken') !== null;
  return true
};

function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}

function PrivateRoutes() {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/Retiro"
        element={
          <PrivateRoute>
            <RetirarDinero />
          </PrivateRoute>
        }
      />
      <Route
        path="/Transferencia"
        element={
          <PrivateRoute>
            <TransferirDinero />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PrivateRoutes;
