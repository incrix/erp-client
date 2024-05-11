import dashIcon from "@/public/icons/dash-icon.svg";
import productIcon from "@/public/icons/product-icon.svg";
import invoiceIcon from "@/public/icons/invoice-icon.svg";
import customerIcon from "@/public/icons/customer-icon.svg";
import vendorIcon from "@/public/icons/vendor-icon.svg";
import purchaseIcon from "@/public/icons/purchase-icon.svg";
import paymentIcon from "@/public/icons/payment-icon.svg";
import reportIcon from "@/public/icons/report-icon.svg";
import ecomIcon from "@/public/icons/ecom-icon.svg";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

function SvgImage(props){
  const { color, width, height, src } = props;
  return (
    <div
      className="icon"
      style={{
        width: width ? width : "20px",
        height: height ? height : "20px",
        mask: `url(${src})`,
        "-webkit-mask": `url(${src})`,
        backgroundColor: color ? color : "#0080FF",
      }}
    />
  );
}

function DashIcon(props) {
  return <SvgImage {...props} src={dashIcon.src} />
}

function ProductIcon(props) {
  return <SvgImage {...props} src={productIcon.src} />
}

function InvoiceIcon(props) {
  return <SvgImage {...props} src={invoiceIcon.src} />
}

function CustomerIcon(props) {
  return <SvgImage {...props} src={customerIcon.src} />
}

function VendorIcon(props) {
  return <SvgImage {...props} src={vendorIcon.src} />
}

function PurchaseIcon(props) {
  return <SvgImage {...props} src={purchaseIcon.src} />
}

function PaymentIcon(props) {
  return <SvgImage {...props} src={paymentIcon.src} />
}

function ReportIcon(props) {
  return <SvgImage {...props} src={reportIcon.src} />
}

function EcomIcon(props) {
  return <SvgImage {...props} src={ecomIcon.src} />
}

function SettingsIcon(props) {
  return <SettingsRoundedIcon {...props} />;
}

function LogoutIcon(props) {
  return <LogoutRoundedIcon {...props} />;
}

const Icons = {
  DashIcon,
  ProductIcon,
  InvoiceIcon,
  CustomerIcon,
  VendorIcon,
  PurchaseIcon,
  PaymentIcon,
  ReportIcon,
  EcomIcon,
  SettingsIcon,
  LogoutIcon,
};

export default Icons;
