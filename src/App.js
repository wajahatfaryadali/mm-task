import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { allRoutes } from './routes/allRoutes';
import { routeConstant } from './routes/routeConstants';
import AuthLayout from './components/Layout/AuthLayout/AuthLayout';
import { ThemeProvider } from '@emotion/react';
import { mainTheme } from './utils/main-theme/main-theme';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            {allRoutes.map((route, i) =>
              route.layout === routeConstant.authLayout ?
                <Route path={route.path} element={<AuthLayout Component={route.component} />} key={i} />
                :
                <Route path={route.path} element={route.component} key={i} />
            )}
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider >
    </div>
  );
}

export default App;
