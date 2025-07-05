
import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    // Show sidebar with a slight delay for animation
    const timer = setTimeout(() => {
      setShowSidebar(true);
    }, 300); // Slowed down animation for better UX
    
    return () => clearTimeout(timer);
  }, []);

  const handleBackToDashboard = () => {
    setShowSidebar(false);
    setTimeout(() => {
      navigate("/dashboard");
    }, 500); // Wait longer for animation to complete
  };

  const handleAdminClick = () => {
    window.open("https://t.me/Bluepaywebline", "_blank");
  };

  return (
    <div className="flex h-screen">
      {/* Main content area */}
      <div className="flex-1 bg-white">
        {/* Content would go here */}
        <div className="p-6 flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
          <p className="text-gray-500 mb-6">Admin features are coming soon</p>
          <button 
            onClick={handleBackToDashboard}
            className="bg-blue-600 text-white px-6 py-2 rounded-md"
          >
            Back to Dashboard
          </button>
        </div>
      </div>

      {/* Sidebar overlay with animation */}
      <div className={`fixed inset-0 bg-black/80 z-40 transition-opacity duration-500 ${showSidebar ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`w-[85%] h-full bg-gray-900 flex flex-col transform transition-transform duration-500 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Logo and title area */}
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-40 h-40 mb-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/9c19c608-d185-4699-b545-9999f7f6fe47.png" 
                alt="BLUEPAY Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-white text-3xl font-bold">BLUEPAY</h1>
          </div>
          
          {/* Admin section */}
          <div className="px-8 py-6 mt-4 border-t border-gray-700">
            <div 
              className="flex items-center space-x-4 cursor-pointer hover:bg-gray-800 p-3 rounded-lg"
              onClick={handleAdminClick}
            >
              <MessageCircle className="text-white h-9 w-9" />
              <span className="text-white text-2xl font-bold">Admin</span>
            </div>
          </div>

          {/* Additional menu items would go here */}
          <div className="flex-1"></div>

          {/* Close button */}
          <div className="p-6">
            <button 
              onClick={handleBackToDashboard}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-md text-lg"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
