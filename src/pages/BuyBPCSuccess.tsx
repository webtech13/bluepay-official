import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const BuyBPCSuccess = () => {
  const navigate = useNavigate();
  const [bpcCode] = useState(`BPC${Math.floor(Math.random() * 9000) + 1000}-${Math.floor(Math.random() * 9) + 1}`);

  const handleCopyBPC = () => {
    navigator.clipboard.writeText(bpcCode).then(() => {
      toast({
        description: "BPC code copied to clipboard!",
        duration: 2000,
      });
    });
  };

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-[#222222] text-white py-3 px-4 flex justify-center items-center sticky top-0 z-10">
        <h1 className="text-xl font-semibold">BLUEPAY</h1>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-20 h-20 mb-8 bg-blue-600 rounded-full flex items-center justify-center">
          <Check size={40} className="text-white" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4 text-center">Payment Confirmed</h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Your payment has been received successfully.
        </p>
        
        <div className="bg-gray-100 rounded-lg p-6 w-full max-w-sm mb-8">
          <p className="text-gray-700 text-base mb-4">Your BPC Code:</p>
          <div className="bg-white rounded-lg border-2 border-gray-200 p-4 flex items-center justify-between">
            <span className="text-2xl font-bold">{bpcCode}</span>
            <Button
              variant="outline"
              size="sm"
              className="ml-3 flex items-center gap-2"
              onClick={handleCopyBPC}
            >
              <Copy size={16} />
              Copy
            </Button>
          </div>
          <p className="text-blue-600 text-sm mt-3">
            Use this code for your withdrawals.
          </p>
        </div>
        
        <Button
          className="bg-blue-600 hover:bg-blue-700 w-full max-w-sm py-4 text-lg font-semibold"
          onClick={handleBackToDashboard}
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default BuyBPCSuccess;