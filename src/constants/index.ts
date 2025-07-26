export const APP_NAME = "Sonarix Studio";
export const APP_DESCRIPTION = "A modern web application built with Next.js";

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
} as const;

export const API_ROUTES = {
  USERS: "/api/users",
  AUTH: "/api/auth",
} as const;

export const BREAKPOINTS = {
  SM: "640px",
  MD: "768px",
  LG: "1024px",
  XL: "1280px",
  "2XL": "1536px",
} as const;
