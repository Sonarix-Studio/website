export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T = unknown> {
  data: T;
  message: string;
  success: boolean;
}

export interface PageProps {
  params: { [key: string]: string | string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}

export type Theme = "light" | "dark" | "system";

export interface LayoutProps {
  children: React.ReactNode;
}
