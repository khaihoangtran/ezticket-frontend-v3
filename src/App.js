import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';


import ClientRoot from "./screens/Layouts/ClientRoot";
import SecondRoot from "./screens/Layouts/SecondRoot";

import { HomeScreen, EventDetailScreen, LoginScreen, BookingScreen } from './screens/Client';
import { CreateEventScreen } from './screens/Admin';




const router = createBrowserRouter([
  {
    path: '/',
    element: <ClientRoot />,
    children: [
      { path: "/", element: <HomeScreen /> },
    ]
  },
  {
    path: '/',
    element: <SecondRoot />,
    children: [
      { path: "/event", element: <EventDetailScreen /> },
      { path: "/event/:event_id/booking", element: <BookingScreen /> },
      { path: "/event/create", element: <CreateEventScreen /> },
      { path: "/login", element: <LoginScreen /> },
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
