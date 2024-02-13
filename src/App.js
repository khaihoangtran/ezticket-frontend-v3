import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';


import ClientRoot from "./screens/Layouts/ClientRoot";
import SecondRoot from "./screens/Layouts/SecondRoot";
import AdminRoot from "./screens/Layouts/AdminRoot";

import { HomeScreen, EventDetailScreen, LoginScreen, BookingScreen, RegisterScreen, OTPScreen, SuccessScreen } from './screens/Client';
import { AdminScreen } from './screens/Admin';
import CheckoutScreen from "./screens/Client/CheckoutScreen";


const router = createBrowserRouter([
  {
    path: '/business',
    element: <AdminRoot />,
    children: [
      { path: '/business', element: <AdminScreen page={"Dashboard"} /> },
      { path: '/business/info', element: <AdminScreen page={"Tổ chức"} /> },
      { path: '/business/event', element: <AdminScreen page={"Sự kiện"} /> },
      { path: '/business/ticket', element: <AdminScreen page={"Vé"} /> },
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
      { path: "/event/:event_slug", element: <EventDetailScreen /> },
      { path: "/event/:event_slug/booking", element: <BookingScreen /> },
      { path: "/event/:event_slug/booking/:booking_id/checkout", element: <CheckoutScreen /> },
      // { path: "/event/create", element: <CreateEventScreen /> },
      { path: "/login", element: <LoginScreen /> },
      { path: "/register", element: <RegisterScreen /> },
      { path: "/confirm_otp", element: <OTPScreen /> },
      { path: "/checkout/success", element: <SuccessScreen /> },
    ]
  },
  
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
