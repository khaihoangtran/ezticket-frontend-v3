import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';


import ClientRoot from "./screens/Layouts/ClientRoot";
import SecondRoot from "./screens/Layouts/SecondRoot";
import AdminRoot from "./screens/Layouts/AdminRoot";

import { HomeScreen, EventDetailScreen, LoginScreen, BookingScreen, RegisterScreen, OTPScreen } from './screens/Client';
import { AdminScreen } from './screens/Admin';





const router = createBrowserRouter([
  {
    path: '/business',
    element: <AdminRoot />,
    children: [
      { path: '/business', element: <AdminScreen /> }
    ]
  },
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
      // { path: "/event/create", element: <CreateEventScreen /> },
      { path: "/login", element: <LoginScreen /> },
      { path: "/register", element: <RegisterScreen /> },
      { path: "/confirm_otp", element: <OTPScreen /> },
    ]
  },
  
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
