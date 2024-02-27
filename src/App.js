import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import AllProducts from "./pages/Category/AllProducta/AllProducts";
import Furniture from "./pages/Category/Furniture/Furniture";
import Electronics from "./pages/Category/Electronics/Electronics";
import Clothes from "./pages/Category/Clothes/Clothes";
import Bags from "./pages/Category/Bags/Bags";
import HomeAppliances from "./pages/Category/HomeAppliances/HomeAppliances";
import Pay from "./pay/Pay";
import Paymentsuccess from "./pages/payment/Paymentsuccess";
import Apple from "./pages/brand/apple/Apple";
import Hm from "./pages/brand/hm/Hm";
import Samsung from "./pages/brand/samsung/Samsung";
import Dior from "./pages/brand/dior/Dior";
import Gucci from "./pages/brand/gucci/Gucci";

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* <Route path="/journal" element={<Journal />}></Route> */}
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentgateway" element={<Payment />}></Route>
      <Route path="/allproducts" element={<AllProducts/>}></Route>
      <Route path="/furniture" element={<Furniture/>}></Route>
      <Route path="/electronic" element={<Electronics/>}></Route>
      <Route path="/clothes" element={<Clothes/>}></Route>
      <Route path="/bags" element={<Bags/>}></Route>
      <Route path="/homeappliances" element={<HomeAppliances/>}></Route>

      {/* ===================brand links ====================== */}
      <Route path="/apple" element={<Apple/>}/>
      <Route path="/dior" element={<Dior/>}/>
      <Route path="/samsung" element={<Samsung/>}/>
      <Route path="/hm" element={<Hm/>}/>
      <Route path="/gucci" element={<Gucci/>}/>
      </Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/pay" element={<Pay/>}></Route>
      <Route path="/succe" element={<Paymentsuccess/>}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
