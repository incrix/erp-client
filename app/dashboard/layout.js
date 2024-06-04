"use client";
import { Stack } from "@mui/material";
import SideNavBar from "./components/SideNavBar";
import TopNavBar from "./components/TopNavBar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../globals.css";
import AlertComp from "../components/AlertComp";

import { Provider } from "react-redux";
import store from "@/redux/store";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  // const [isLoading, setLoading] = useState(false);
  // useEffect(() => {
  //   fetch("/api/user-isLogin")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.fill_the_details) return router.push("/setup");
  //       if (data.status === "error" && !data.isLogin)
  //         return router.push("/signin");
  //       setLoading(true);
  //     });
  // }, []);
  return (
    // isLoading && (
      <Provider store={store}>
        <main
          style={{
            backgroundColor: "#F6F6F6",
          }}
        >
          <Stack direction={"row"} width={"100vw"} height={"100dvh"}>
            <AlertComp />
            <SideNavBar />
            <Stack width={"calc(100% - 300px)"} padding={"20px 20px 20px 0"}>
              <TopNavBar />
              {children}
            </Stack>
          </Stack>
        </main>
      </Provider>
    )
  // );
}
