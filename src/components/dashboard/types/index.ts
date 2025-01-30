export interface StatCardProps {
    icon: string;
    label: string;
    value: string;
    alt?: string;
  }
  
  export interface SidebarItemProps {
    icon: string;
    label: string;
    isActive?: boolean;
    alt?: string;
  }
  
  export interface ChartContainerProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
    buttonText: string;
  }