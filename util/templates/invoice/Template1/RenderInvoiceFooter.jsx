import { Text, View, Image } from "@react-pdf/renderer";
import Logo from "@/public/images/incrix-logo.png";

export default function RenderInvoiceFooter() {
  return (
    <View
      fixed
      style={{
        marginTop: "auto",
      }}
      render={({ pageNumber, totalPages }) => (
        <View style={{ marginTop: 10, fontSize: 8, flexDirection: "row" }}>
          <View style={{ gap: 2 }}>
            <Text>
              Page:{pageNumber}/{totalPages}
            </Text>
            <Text style={{ marginLeft: "auto" }}>
              Generated on: {new Date().toLocaleString()}
            </Text>
          </View>
          <View style={{ marginLeft: "auto", gap: 2 }}>
            <Text style={{ fontFamily: "Lato Bold" }}>Powered by:</Text>
            <Image
              src={Logo.src}
              style={{
                width: 50,
                height: 15,
                objectFit: "contain",
              }}
            />
          </View>
        </View>
      )}
    />
  );
}
