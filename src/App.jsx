import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout.js';
import HomePage from './pages/HomePage.jsx';
import Lab1Page from './pages/Lab1Page.jsx';
import Lab2Page from './pages/Lab2Page.jsx';
import Lab3Page from './pages/Lab3Page.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const menuItems = [
  { id: 1, label: "Home", url: "/", urlPattern: "/", element: <HomePage /> },
  { id: 2, label: "Laboratorium 1", url: "/lab1", urlPattern: "/lab1", element: <Lab1Page /> },
  { id: 3, label: "Laboratorium 2", url: "/lab2/:id", urlPattern: "/lab2/:id", element: <Lab2Page /> },
  { id: 4, label: "Laboratorium 3", url: "/lab3", urlPattern: "/lab3/", element: <Lab3Page /> }
];

function App() {
  return (
    <RootLayout items={menuItems}>
      <Routes>
        {menuItems.map(item => (
          <Route key={item.id} path={item.urlPattern} element={item.element} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
