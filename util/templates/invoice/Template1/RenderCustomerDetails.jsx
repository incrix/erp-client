import { Text, View } from "@react-pdf/renderer";

export default function RenderCustomerDetails({ invoice }) {
  return (
    <View
      fixed
      style={{
        fontSize: 8,
        color: "#333",
        width: "100%",
        minHeight: 90,
        fontFamily: "Lato",
        border: "1px solid #333",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 0,
        margin: 0,
      }}
    >
      <View style={{ gap: 2, padding: 10 }}>
        <Text style={{ fontFamily: "Lato Bold" }}>To:</Text>
        <Text style={{ fontFamily: "Lato Bold" }}>
          {invoice.customerDetails.customerName}
        </Text>
        {invoice.customerDetails.companyDetails.companyName && (
          <Text style={{ fontFamily: "Lato Bold" }}>
            {invoice.customerDetails.companyDetails.companyName}
          </Text>
        )}
        {invoice.customerDetails.billingAddress.address1 && (
          <Text style={{ maxWidth: 200 }}>
            {invoice.customerDetails.billingAddress.address1}
          </Text>
        )}
        {invoice.customerDetails.billingAddress.address2 && (
          <Text style={{ maxWidth: 200 }}>
            {invoice.customerDetails.billingAddress.address2}
          </Text>
        )}
        {invoice.customerDetails.billingAddress.city && (
          <Text style={{ maxWidth: 200 }}>
            {invoice.customerDetails.billingAddress.city} ,{" "}
            {invoice.customerDetails.billingAddress.state} -{" "}
            {invoice.customerDetails.billingAddress.zipCode}
          </Text>
        )}
        <Text style={{ maxWidth: 200 }}>
          {invoice.customerDetails.companyDetails.GSTIN &&
            `GSTIN:${invoice.customerDetails.companyDetails.GSTIN}`}
        </Text>
        <Text style={{ maxWidth: 200 }}>
          Ph: {invoice.customerDetails.phone}
        </Text>
        {invoice.customerDetails.email && (
          <Text style={{ maxWidth: 200 }}>{invoice.customerDetails.email}</Text>
        )}
      </View>
      <View
        style={{
          width: "250px",
          borderLeft: 1,
          height: "100%",
          fontFamily: "Lato Bold",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              border: "1px solid #333",
              borderTop: 0,
              borderLeft: 0,
              width: "50%",
              padding: 5,
              gap: 2,
            }}
          >
            <Text>Invoice No:</Text>
            <Text>{invoice.id}</Text>
          </View>
          <View
            style={{
              borderBottom: "1px solid #333",
              width: "50%",
              padding: 5,
              gap: 2,
            }}
          >
            <Text>Date:</Text>
            <Text>{invoice.date}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              border: "1px solid #333",
              width: "50%",
              padding: 5,
              gap: 2,
              borderTop: 0,
              borderLeft: 0,
            }}
          >
            <Text>Place of supply:</Text>
            <Text>{invoice.customerDetails.billingAddress.state}</Text>
          </View>
          <View
            style={{
              borderBottom: "1px solid #333",
              width: "50%",
              padding: 5,
              gap: 2,
            }}
          >
            <Text>Due Date:</Text>
            <Text>{invoice.date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
