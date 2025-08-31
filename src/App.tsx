import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Input from "./pages/Input";
import Waiting from "./pages/Waiting";
import Finish from "./pages/Finish";
import Details from "./pages/Details";
import Gencode from "./pages/Gencode";
import FinalWaiting from "./pages/FinalWaiting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/input" element={<Input />} />
          <Route path="/waiting" element={<Waiting />} />
          <Route path="/finish" element={<Finish />} />
          <Route path="/finish/details" element={<Details />} />
          <Route path="/finish/waiting" element={<FinalWaiting />} />
          <Route path="/finish/gencode" element={<Gencode />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
