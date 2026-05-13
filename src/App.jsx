import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

const Home=lazy(()=>import('./pages/Home'))
const About=lazy(()=>import('./pages/About'))
const Services=lazy(()=>import('./pages/Services'))
const Portfolio=lazy(()=>import('./pages/Portfolio'))
const Contact=lazy(()=>import('./pages/Contact'))
const NotFound=lazy(()=>import('./pages/NotFound'))
const PortfolioDetails=lazy(()=>import('./pages/PortfolioDetails'))
const ServiceDetails=lazy(()=>import('./pages/ServiceDetails'))
import PageLoader from './components/PageLoader'
function App() {
  return (
   <Suspense fallback={<PageLoader/>}>
      <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about_us" element={<About />} />
        <Route path="services"  >
        <Route index element={<Services />}/>
        <Route path=":id" element={<ServiceDetails />}/>
        </Route>
        <Route path="portfolio"  >
        <Route index element={<Portfolio />}/>
        <Route path=":id" element={<PortfolioDetails />}/>
        </Route>
        <Route path="contact_us" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
   </Suspense>
  );
}

export default App;
