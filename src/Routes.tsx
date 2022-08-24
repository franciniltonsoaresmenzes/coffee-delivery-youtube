import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import CompliteOrder from "./pages/CompliteOrder";
import HomePage from './pages/Home/index'
import OrderConfirmed from "./pages/OrderConfirmed";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<HomePage/>} /> 
        <Route path="/completeOrder" element={<CompliteOrder/>} />
        <Route path="/orderConfirmed" element={<OrderConfirmed/>} />
      </Route>
    </Routes>
  )    
}
