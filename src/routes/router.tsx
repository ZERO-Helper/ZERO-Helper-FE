import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import ProtectedLayout from "@/layouts/ProtectedLayout";

import LandingPage from "@/pages/LandingPage/LandingPage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import AuthenticationPage from "@/pages/AuthenticationPage/AuthenticationPage";
import HomePage from "@/pages/HomePage/HomePage";
import DailyPage from "@/pages/DailyPage/DailyPage";
import ReportPage from "@/pages/ReportPage/ReportPage";
import MyPage from "@/pages/MyPage/MyPage";

import type { RouteObject } from "react-router-dom";

const publicChildren: RouteObject[] = [
  { index: true, element: <LandingPage /> },
  { path: "login", element: <LoginPage /> },
];

const protectedChildren: RouteObject[] = [
  { path: "home", element: <HomePage /> },
  { path: "daily", element: <DailyPage /> },
  { path: "auth", element: <AuthenticationPage /> },
  { path: "report", element: <ReportPage /> },
  { path: "mypage", element: <MyPage /> },
];

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      ...publicChildren,
      {
        element: <ProtectedLayout />,
        children: protectedChildren,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);