import React, { useContext, useReducer } from 'react';
import AppContext from './data/AppContext';
import AppReducer from './data/AppReducer'
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout.js';
import HomePage from './pages/HomePage.jsx';
import Lab1Page from './pages/Lab1Page.jsx';
import Lab2Page from './pages/Lab2Page.jsx';
import Lab3Page from './pages/Lab3Page.jsx';
import Lab4Page from './pages/Lab4Page.jsx';
import AddCarPage from './pages/AddCarPage.jsx';
import EditCarPage from './pages/EditCarPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { data } from './data/module-data'

const menuItems = [
  { id: 1, label: "Home", url: "/", urlPattern: "/", element: <HomePage /> },
  { id: 2, label: "Laboratorium 1", url: "/lab1", urlPattern: "/lab1", element: <Lab1Page /> },
  { id: 3, label: "Laboratorium 2", url: "/lab2/:id", urlPattern: "/lab2/:id", element: <Lab2Page /> },
  { id: 4, label: "Laboratorium 3", url: "/lab3", urlPattern: "/lab3/", element: <Lab3Page /> },
  { id: 4, label: "Laboratorium 4", url: "/lab4", urlPattern: "/lab4/", element: <Lab4Page /> },
  { id: 5, label: "Add Car", url: "/lab4/add", urlPattern: "/lab4/add", element: <AddCarPage /> },
  { id: 6, label: "Edit Car", url: "/lab4/edit/:id", urlPattern: "/lab4/edit/:id", element: <EditCarPage /> },
];

const peopleData = [
  { name: "Ala", id: 1 },
  { name: "Ela", id: 2 },
  { name: "Karol", id: 3 },
  { name: "Ola", id: 4 },
  { name: "Monik", id: 5 },
  { name: "Robert", id: 6 }
];

function App() {
  const [state, dispatch] = useReducer(AppReducer, data);

  return (
    <AppContext.Provider value={{ items: state, dispatch: dispatch, people: peopleData }}>
      <RootLayout items={menuItems}>
        <Routes>
          {menuItems.map(item => (
            <Route key={item.id} path={item.urlPattern} element={item.element} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </RootLayout>
    </AppContext.Provider>
  );
}

export default App;
