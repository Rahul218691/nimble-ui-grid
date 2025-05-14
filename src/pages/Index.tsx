
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import QuotationList from '../components/QuotationList';
import { SidebarProvider } from "@/components/ui/sidebar";

const Index: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <SidebarProvider>
      <div className="flex flex-col md:flex-row min-h-screen w-full bg-gray-50">
        <div className={`md:block ${sidebarOpen ? 'block' : 'hidden'}`}>
          <Sidebar />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center p-4 border-b bg-white">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="mr-4 md:hidden p-2"
            >
              ☰
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
