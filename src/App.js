import * as React from 'react';
import { createBrowserRouter, Link, RouterProvider, Routes, Route } from 'react-router-dom';

import LandingPage from './views/LandingPage';
import LoginPage from './views/LoginPage';
import SignUpPage from './views/SignUpPage';
import HomePage from './views/HomePage';
import StudentPage from "./views/StudentPage";

import CoursesPage from './views/navbar/CoursesPage';
import DashboardPage from './views/navbar/DashboardPage';
import PascoPage from './views/navbar/PascoPage';
import MessagesPage from './views/navbar/MessagesPage';

import AssessmentPageOne from './views/assessment/AssessmentPageOne';
import AssessmentPageTwo from './views/assessment/AssessmentPageTwo';
import AssessmentPageThree from './views/assessment/AssessmentPageThree';


import ErrorPage from './models/ErrorPage';
import GenerateLessonPlan from "./views/GenerateLessonPlan";
import LessonPlan from "./views/secondaryNavbar/LessonPlan";
import AssessmentPageFour from "./views/assessment/AssessmentPageFour";
import AssessmentPageFive from "./views/assessment/AssessmentPageFive";
import AssessmentPageSix from "./views/assessment/AssessmentPageSix";

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/sign-up', element: <SignUpPage /> },
  { path: '/assessment-one', element: <AssessmentPageOne /> },
  { path: '/assessment-two', element: <AssessmentPageTwo /> },
  { path: '/assessment-three', element: <AssessmentPageThree /> },
  { path: '/assessment-four', element: <AssessmentPageFour />},
  { path: '/assessment-five', element: <AssessmentPageFive />},
  { path: '/assessment-six', element: <AssessmentPageSix />},
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
  { path: '/student/',
    element: <StudentPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'lesson-plan',
        element: <LessonPlan />
      }
    ]
  },
  { path: '/generate-lesson-plan', element: <GenerateLessonPlan /> }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;

