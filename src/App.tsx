import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "./shared/hooks/scrollToTop";

// Lazy loading для страниц
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Promotions = lazy(() => import("./pages/Promotions"));
const Services = lazy(() => import("./pages/Services"));
const Contacts = lazy(() => import("./pages/Contacts"));
const FAQ = lazy(() => import("./pages/FAQ"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const Barbecue = lazy(() => import("./pages/Barbecue"));
const Restaurant = lazy(() => import("./pages/Restourant"));
const RoomService = lazy(() => import("./pages/RoomService"));
const RentBike = lazy(() => import("./pages/RentBike"));
const Breakfast = lazy(() => import("./pages/Breakfast"));
const Laundry = lazy(() => import("./pages/Laundry"));
const Personal = lazy(() => import("./pages/Personal"));

const queryClient = new QueryClient();

// Компонент загрузки
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/barbecue" element={<Barbecue />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/room-service" element={<RoomService />} />
            <Route path="/rent-bike" element={<RentBike />} />
            <Route path="/breakfast" element={<Breakfast />} /> 
            <Route path="/laundry" element={<Laundry />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
