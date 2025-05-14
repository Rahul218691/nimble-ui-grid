
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import QuotationList from '../components/QuotationList';
import { SidebarProvider } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

const Index: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <SidebarProvider>
      <div className="flex flex-col md:flex-row min-h-screen w-full bg-gray-50">
        {/* Mobile sidebar */}
        <div className={`${sidebarOpen ? 'block fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg' : 'hidden'} md:hidden`}>
          <div className="flex justify-end p-4">
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded hover:bg-gray-100"
              aria-label="Close Sidebar"
            >
              ✕
            </button>
          </div>
          <Sidebar />
        </div>
        
        {/* Overlay when sidebar is open on mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
            onClick={toggleSidebar}
            aria-label="Close Sidebar Overlay"
          />
        )}
        
        {/* Desktop sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center p-4 border-b bg-white">
            <button 
              onClick={toggleSidebar}
              className="mr-4 md:hidden p-2 rounded hover:bg-gray-100"
              aria-label="Toggle Sidebar"
            >
              <Menu size={24} />
            </button>
            <div className="flex-1"></div>
            <div className="flex items-center space-x-2">
              <div className="text-right">
                <p className="text-sm font-medium">Buckner</p>
              </div>
              <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-sm">👤</span>
              </div>
            </div>
          </div>
          
          <QuotationList />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
