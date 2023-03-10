import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "./Pages/Registration";
import Congratulations from "./Pages/Congratulations";
import Verification from "./Pages/Verification";
import Login from "./Components/Login/Login";
import Layout from "./Components/Layout";
import ShopProfile from "./Pages/ShopProfile";
import CustomerProfile from "./Pages/CustomerProfile";
import ViewAllCoupons from "./Pages/ViewAllCoupons";
import LandingPage from "./Pages/LandingPage";

function AppRoutes() {
  // const dispatch = useDispatch();
  // const token = useSelector((state) => state.auth.accesstoken);

  // useEffect(() => {
  // if (token) {
  //   getTags();
  // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [token]);
  //
  // const getTags = async () => {
  //   const response = await fetchTags(); //user = email+password
  //   console.log("getTagsResponse: ", response.data);
  //   dispatch(setTags(response.data));
  // };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* TODO:  Add new Routes here instead, this API allows to do some nice extra things more infos:
            https://reactrouter.com/en/main/routers/create-browser-router */}
        <Route path="/" element={<Layout />}>
          <Route path="" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="congratulations" element={<Congratulations />} />
          <Route path="verification" element={<Verification />} />

          {/* <Route path="shopProfile/:shopId" element={<ShopProfile />} /> */}

          <Route path="allCoupons" element={<ViewAllCoupons />} />
          {/* <Route
            path="customerProfile/:customerId"
            element={<CustomerProfile />}
          /> */}
          <Route path="myShop" element={<ShopProfile />} />
          <Route path="me" element={<CustomerProfile />} />
          {/* <Route path="*" element={<LandingPage />} /> */}
        </Route>
      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default AppRoutes;
