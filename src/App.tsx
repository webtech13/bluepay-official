
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useUserStore } from "./stores/userStore";
import ChatBot from "./components/ChatBot";
import Index from "./pages/Index";
import Register from "./pages/Register";
import SetupPin from "./pages/SetupPin";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Withdraw from "./pages/Withdraw";
import WithdrawProcessing from "./pages/WithdrawProcessing";
import BuyBPC from "./pages/BuyBPC";
import BuyBPCProcessing from "./pages/BuyBPCProcessing";
import BuyBPCPayment from "./pages/BuyBPCPayment";
import BuyBPCVerifying from "./pages/BuyBPCVerifying";
import BuyBPCConfirmation from "./pages/BuyBPCConfirmation";
import BuyBPCSuccess from "./pages/BuyBPCSuccess";
import AirtimePurchase from "./pages/AirtimePurchase";
import DataPurchase from "./pages/DataPurchase";
import Support from "./pages/Support";
import Admin from "./pages/Admin";
import Faq from "./pages/Faq";
import Platform from "./pages/Platform";
import EarnMore from "./pages/EarnMore";
import TransactionHistory from "./pages/TransactionHistory";

const queryClient = new QueryClient();

// Theme management component
const ThemeManager = () => {
  const { themeMode } = useUserStore();
  
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove all theme classes first
    root.classList.remove('dark', 'light', 'system', 'device');
    
    if (themeMode === 'dark') {
      root.classList.add('dark');
    } else if (themeMode === 'system') {
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add('dark');
      } else {
        root.classList.add('light');
      }
      
      // Add listener for system theme changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          root.classList.remove('light');
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
          root.classList.add('light');
        }
      };
      
      // Add listener
      mediaQuery.addEventListener('change', handleChange);
      
      // Clean up
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    } else if (themeMode === 'device') {
      root.classList.add('device');
    } else {
      // Light mode is default
      root.classList.add('light');
    }
  }, [themeMode]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeManager />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/setup-pin" element={<SetupPin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pin" element={<SetupPin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/withdraw/processing" element={<WithdrawProcessing />} />
          <Route path="/buy-bpc" element={<BuyBPC />} />
          <Route path="/buy-bpc/processing" element={<BuyBPCProcessing />} />
          <Route path="/buy-bpc/payment" element={<BuyBPCPayment />} />
          <Route path="/buy-bpc/verifying" element={<BuyBPCVerifying />} />
          <Route path="/buy-bpc/confirmation" element={<BuyBPCConfirmation />} />
          <Route path="/buy-bpc/success" element={<BuyBPCSuccess />} />
          <Route path="/airtime" element={<AirtimePurchase />} />
          <Route path="/data" element={<DataPurchase />} />
          <Route path="/support" element={<Support />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/earn-more" element={<EarnMore />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
