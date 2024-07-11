import { Stack, Typography } from "@mui/material";
import CustomStack from "@/app/components/CustomStack";
import NavButton from "./NavButton";
import { IncrixLogoLight } from "@/util/incrix-logo";
import Icons from "@/util/icons";
//   DashIcon,
//   ProductIcon,
//   InvoiceIcon,
//   CustomerIcon,
//   VendorIcon,
//   PurchaseIcon,
//   PaymentIcon,
//   ReportIcon,
//   EcomIcon,
// } from "@/util/icons";
import UserInfoButton from "./UserInfoButton";

export default function SideNavBar() {
  return (
    <Stack width={"300px"} p={2} height={"100%"}>
      <CustomStack
        background="#000E33"
        smoothCorners={"28"}
        width="100%"
        height="100%"
        borderRadius={"20px"}
        padding={"20px"}
        // gap={2}
      >
        <IncrixLogoLight
          width={"100px"}
          style={{
            margin: "15px",
          }}
        />
        <Stack
        gap={.5}
          sx={{
            height: "100%",
            overflowY: "scroll",
            overflowX: "hidden",
            paddingBottom:"100px",
            "::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          <NavButton
            href={"/dashboard"}
            icon={<Icons.DashIcon />}
            title="Dashboard"
          />
          <NavButton
            href={"/dashboard/products&services"}
            icon={<Icons.ProductIcon />}
            title="Products & Services"
          />
          <NavButton
            href={"/dashboard/invoice"}
            icon={<Icons.InvoiceIcon />}
            title="Invoice"
          />
          <NavButton
            href={"/dashboard/customers"}
            icon={<Icons.CustomerIcon />}
            title="Customers"
          />
          <NavButton
            href={"/dashboard/vendors"}
            icon={<Icons.VendorIcon />}
            title="Vendors"
          />
          <NavButton
            href={"/dashboard/purchases&expenses"}
            icon={<Icons.PurchaseIcon />}
            title="Purchases & Expenses"
          />
          <NavButton
            href={"/dashboard/payments"}
            icon={<Icons.PaymentIcon />}
            title="Payments"
          />
          <NavButton
            href={"/dashboard/reports"}
            icon={<Icons.ReportIcon />}
            title="Reports"
          />
          <NavButton
            icon={<Icons.EcomIcon />}
            title="E-Commerce"
            isChild={true}
            childNavList={[
              {
                href: "/dashboard/e-commerce/orders",
                title: "Orders",
              },
              {
                href: "/dashboard/e-commerce/products",
                title: "Products",
              },
            ]}
          />
        </Stack>
        <UserInfoButton  />
      </CustomStack>
    </Stack>
  );
}
