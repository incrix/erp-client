import { Stack } from "@mui/material";
import SideNavBar from "./components/SideNavBar";
import TopNavBar from "./components/TopNavBar";

export default function DashboardLayout({ children }) {
  return (
    <main>
      <Stack direction={"row"} width={"100vw"} height={"100dvh"}>
        <SideNavBar />
        <Stack>
          <TopNavBar />
          {children}
        </Stack>
      </Stack>
    </main>
  );
}