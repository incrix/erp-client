import { Text, View, Image } from "@react-pdf/renderer";
import Logo from "@/public/images/incrix-logo.png";

export default function RenderInvoiceHeader({ invoiceType }) {
  return (
    <View fixed style={{ flexDirection: "row", gap: 10 }}>
      <Image
        src={Logo.src}
        style={{
          width: 80,
          height: 80,
          objectFit: "contain",
        }}
      />
      <View style={{ gap: 2, fontSize: 8 }}>
        <Text
          style={{
            fontSize: 10,
            fontFamily: "Lato Bold",
            textTransform: "uppercase",
          }}
        >
          Incrix Techlutions LLP
        </Text>
        <Text
          style={{
            color: "#333",
            maxWidth: 220,
            fontFamily: "Lato",
          }}
        >
          337/6, 1st Floor, 1st Main, 1st Block, RT Nagar, Bangalore - 560032
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text
            style={{
              color: "#333",
              maxWidth: 200,
              fontFamily: "Lato Bold",
            }}
          >
            GSTIN: 12ABCDE3456F7Z8
          </Text>
          <Text
            style={{
              color: "#333",
              maxWidth: 200,
              fontFamily: "Lato Bold",
            }}
          >
            PAN: ABCDE1234F
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text
            style={{
              color: "#333",
              maxWidth: 200,
            }}
          >
            Mobile: +91 1234567890
          </Text>
          <Text
            style={{
              color: "#333",
              maxWidth: 200,
            }}
          >
            Email: info@incrix.com
          </Text>
        </View>
        <Text
          style={{
            color: "#333",
            maxWidth: 200,
          }}
        >
          Website: www.incrix.com
        </Text>
      </View>
      <View
        style={{
          fontSize: 8,
          marginLeft: "auto",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 2,
        }}
      >
        <Text
          style={{
            color: "#0080FF",
            fontFamily: "Lato Bold",
          }}
        >
          {invoiceType === "delivery" ? "DELIVERY CHALLAN" : "TAX INVOICE"}
        </Text>
        <Text
          style={{
            color: "#333",
            fontFamily: "Lato",
          }}
        >
          {invoiceType === "original" && "ORIGINAL FOR RECIPIENT"}
          {invoiceType === "transport" && "DUPLICATE FOR TRANSPORTER"}
          {invoiceType === "supplier" && "TRIPLICATE FOR SUPPLIER"}
        </Text>
      </View>
    </View>
  );
}
