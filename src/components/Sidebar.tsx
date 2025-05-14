
import React from 'react';
import { SidebarProvider, Sidebar as ShadcnSidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton 
        className={`flex items-center w-full px-4 py-2 rounded ${active ? 'bg-logistics-primary text-white' : 'hover:bg-gray-100'}`} 
        onClick={onClick}
      >
        <div className="mr-3">{icon}</div>
        <span>{label}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

const Sidebar: React.FC = () => {
  return (
    <ShadcnSidebar className="border-r">
      <SidebarContent>
        <div className="p-4 mb-4">
          <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold">
            Logo
          </div>
        </div>
        
        <div className="px-4 py-2 text-sm font-medium text-gray-500">
          LOREM IPSUM
        </div>
        
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <SidebarItem
                icon={<span className="text-white bg-logistics-primary p-1 rounded">📋</span>}
                label="List Of Quotations"
                active={true}
              />
              <SidebarItem
                icon={<span>🚚</span>}
                label="Trucker List"
              />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  );
};

export default Sidebar;
