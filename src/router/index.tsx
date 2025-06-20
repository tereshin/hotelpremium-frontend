import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';

// Lazy loading для страниц
const Index = lazy(() => import('../pages/Index'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Promotions = lazy(() => import('../pages/Promotions'));
const Services = lazy(() => import('../pages/Services'));
const Contacts = lazy(() => import('../pages/Contacts'));
const FAQ = lazy(() => import('../pages/FAQ'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('../pages/TermsOfUse'));
const Barbecue = lazy(() => import('../pages/Barbecue'));
const Restaurant = lazy(() => import('../pages/Restourant'));
const RoomService = lazy(() => import('../pages/RoomService'));
const RentBike = lazy(() => import('../pages/RentBike'));
const Breakfast = lazy(() => import('../pages/Breakfast'));
const Laundry = lazy(() => import('../pages/Laundry'));
const Personal = lazy(() => import('../pages/Personal'));
const Sauna = lazy(() => import('../pages/Sauna'));

export const router = (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Index />} />
      <Route path="promotions" element={<Promotions />} />
      <Route path="services" element={<Services />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="personal" element={<Personal />} />
      <Route path="terms" element={<TermsOfUse />} />
      <Route path="barbecue" element={<Barbecue />} />
      <Route path="restaurant" element={<Restaurant />} />
      <Route path="room-service" element={<RoomService />} />
      <Route path="rent-bike" element={<RentBike />} />
      <Route path="breakfast" element={<Breakfast />} />
      <Route path="laundry" element={<Laundry />} />
      <Route path="sauna" element={<Sauna />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
); 