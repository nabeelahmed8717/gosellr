import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import loadingGif from "./assets/loading/boxes-loader.gif"

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
(
  <Suspense fallback={
    <div
    className="d-flex justify-center align-center" style={{ height: "80vh" }}
    >
      {/* <Spin indicator={antIcon} /> */}
      <img src={loadingGif} width={60}  alt="" />
    </div>
  }>
    <Component {...props} />
  </Suspense>
);
const MainLayout = Loadable(lazy(() => import("./layout/mainLayout")));
const LandingPage = Loadable(lazy(() => import("./pages/landingPage")));
const ViewProduct = Loadable(lazy(() => import("./pages/viewProduct")));
const SignIn = Loadable(lazy(() => import("./pages/signIn")));
const SignUp = Loadable(lazy(() => import("./pages/signUp")));
const Chat = Loadable(lazy(() => import("./pages/chat")));
const MyCart = Loadable(lazy(() => import("./pages/myCart")));
const UserProfile = Loadable(lazy(() => import("./pages/userProfile")));
const GroupedProducts = Loadable(lazy(() => import("./pages/groupedProducts")));

const CreateStore = Loadable(lazy(() => import("./pages/createStore")));


export const routes: any = [
  { path: "/", element: <Navigate to="home" /> },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <LandingPage />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "cart",
        element: <MyCart />,
      },
      {
        path: "user-profile",
        element: <UserProfile />,
      },
      {
        path: "view-product",
        element: <ViewProduct />,
      },
      {
        path: "grouped-products",
        element: <GroupedProducts />,
      },
      {
        path: "create-store",
        element: <CreateStore />,
      },
    ],
  },
];
