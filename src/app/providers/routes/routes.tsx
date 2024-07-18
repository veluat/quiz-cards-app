import { Navigate, RouteObject } from 'react-router-dom'

import { RouteDefinitions } from '@/common/consts'
import {
  CheckEmailPage,
  CreateNewPasswordPage,
  DeckPage,
  DecksPage,
  LearnPage,
  NotFoundPage,
  ProfilePage,
  RecoverPasswordPage,
  SignInPage,
  SignUpPage,
} from '@/pages'

export const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: RouteDefinitions.signIn,
  },
  {
    element: <SignUpPage />,
    path: RouteDefinitions.signUp,
  },
  {
    element: <RecoverPasswordPage />,
    path: RouteDefinitions.recoverPassword,
  },
  {
    element: <CheckEmailPage />,
    path: `${RouteDefinitions.checkEmail}/:email`,
  },
  {
    element: <CreateNewPasswordPage />,
    path: `${RouteDefinitions.createNewPassword}/:token`,
  },
  {
    element: <NotFoundPage />,
    path: RouteDefinitions.rest,
  },
]

export const privateRoutes: RouteObject[] = [
  {
    element: <Navigate to={RouteDefinitions.decks} />,
    path: RouteDefinitions.base,
  },
  {
    element: <DecksPage />,
    path: RouteDefinitions.decks,
  },
  {
    element: <ProfilePage />,
    path: RouteDefinitions.profile,
  },
  {
    element: <DeckPage />,
    path: `${RouteDefinitions.decks}/:id`,
  },
  {
    element: <LearnPage />,
    path: `${RouteDefinitions.decks}/:id${RouteDefinitions.learn}`,
  },
]
