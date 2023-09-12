import { SidebarData } from "types/sidebar";

export const SIDEBAR_DATA: SidebarData[] = [
  {
    text: "Dashboards",
    id: "dashboards",
    icon: "dashboard",
    children: [
      {
        text: "CRM",
        id: "crm",
      },
      {
        text: "Email",
        id: "email",
      },
      {
        text: "Analytics",
        id: "analytics",
      },
    ],
  },
  {
    text: "Calendar",
    id: "calendar",
    icon: "dashboard",
  },
  {
    text: "Invoice",
    id: "invoice",
    icon: "dashboard",
    children: [
      {
        text: "a",
        id: "a",
      },
      {
        text: "b",
        id: "b",
      },
      {
        text: "c",
        id: "c",
      },
    ],
  },
];
