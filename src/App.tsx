import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Promotions from "./pages/Promotions";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./hooks/scrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse" 
import Barbecue from "./pages/Barbecue";
import Restourant from "./pages/Restourant";
import RoomService from "./pages/RoomService";
import RentBike from "./pages/RentBike";
import Breakfast from "./pages/Breakfast";
import Laundry from "./pages/Laundry";
import Personal from "./pages/Personal";
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
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/barbecue" element={<Barbecue />} />
          <Route path="/restaurant" element={<Restourant />} />
          <Route path="/room-service" element={<RoomService />} />
          <Route path="/rent-bike" element={<RentBike />} />
          <Route path="/breakfast" element={<Breakfast />} /> 
          <Route path="/laundry" element={<Laundry />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
