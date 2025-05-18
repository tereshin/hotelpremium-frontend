import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Promotions from "./pages/Promotions";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./hooks/scrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse" 
import Barbecue from "./pages/Barbecue";
import Booking from "./pages/Booking";
import Sauna from "./pages/Sauna";
import Restourant from "./pages/Restourant";
import RoomService from "./pages/RoomService";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/about" element={<About />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/barbecue" element={<Barbecue />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/sauna" element={<Sauna />} />
          <Route path="/restaurant" element={<Restourant />} />
          <Route path="/room-service" element={<RoomService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
