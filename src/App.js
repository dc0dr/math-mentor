import * as React from 'react';
import { createBrowserRouter, Link, RouterProvider, Routes, Route } from 'react-router-dom';

import LandingPage from './views/LandingPage';
import LoginPage from './views/LoginPage';
import SignUpPage from './views/SignUpPage';
import HomePage from './views/HomePage';

import CoursesPage from './views/navbar/CoursesPage';
import DashboardPage from './views/navbar/DashboardPage';
import PascoPage from './views/navbar/PascoPage';
import MessagesPage from './views/navbar/MessagesPage';

import AssessmentPageOne from './views/assessment/AssessmentPageOne';
import AssessmentPageTwo from './views/assessment/AssessmentPageTwo';
import AssessmentPageThree from './views/assessment/AssessmentPageThree';

import ErrorPage from './models/ErrorPage';

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/sign-up', element: <SignUpPage /> },
  { path: '/assessment/',
    element: <AssessmentPageOne />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'assessment-2',
        element: <AssessmentPageTwo />
      },
    ]
  },
  { 
    path: '/home/', 
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'courses',
        element: <CoursesPage />
      },
      {
        path: 'pasco',
        element: <PascoPage />
      },
      {
        path: 'messages',
        element: <MessagesPage />
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;

