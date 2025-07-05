
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, MessageSquare, Phone, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";

const Support = () => {
  const navigate = useNavigate();

  const handleLiveChatClick = () => {
    window.open('https://t.me/Bluepaywebline', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-[#222222] text-white py-3 px-4 flex justify-between items-center sticky top-0 z-10">
        <button onClick={() => navigate("/dashboard")} className="text-lg">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-semibold">Support</h1>
        <div className="w-6 h-6"></div>
      </header>

      <div className="p-4 flex-1">
        <h2 className="text-xl font-bold mb-4">How can we help you?</h2>
        
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-base font-semibold">Email Support</h3>
                <p className="text-gray-500 text-xs">Get help via email</p>
              </div>
            </div>
            <Button 
              className="w-full mt-3 bg-blue-600 hover:bg-blue-700 py-2 text-sm"
              onClick={() => window.open('mailto: financial1240@gmail.com')}
            >
              Contact via Email
            </Button>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-base font-semibold">Telegram Support</h3>
                <p className="text-gray-500 text-xs">Chat with us on Telegram</p>
              </div>
            </div>
            <Button 
              className="w-full mt-3 bg-blue-600 hover:bg-blue-700 py-2 text-sm"
              onClick={() => window.open('https://t.me/Bluepaywebline')}
            >
              Open Telegram
            </Button>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-base font-semibold">WhatsApp Support</h3>
                <p className="text-gray-500 text-xs">Message us on WhatsApp</p>
              </div>
            </div>
            <Button 
              className="w-full mt-3 bg-blue-600 hover:bg-blue-700 py-2 text-sm"
              onClick={() => window.open('https://wa.me/message/CKFDSQZYCBOZH1')}
            >
              Chat on WhatsApp
            </Button>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <LifeBuoy className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-base font-semibold">Live Chat Support</h3>
                <p className="text-gray-500 text-xs">Chat with a support agent</p>
              </div>
            </div>
            <Button 
              className="w-full mt-3 bg-blue-600 hover:bg-blue-700 py-2 text-sm"
              onClick={handleLiveChatClick}
            >
              Start Live Chat
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">Available 24/7 for your support needs</p>
          <p className="text-blue-600 font-medium mt-1 text-sm">financial1240@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
