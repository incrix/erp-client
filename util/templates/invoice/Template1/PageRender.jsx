import { Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import Logo from "@/public/images/incrix-logo.png";
import Rupee from "@/public/icons/rupee.png";
import RenderItems from "./RenderItems";
import RenderCustomerDetails from "./RenderCustomerDetails";
import RenderInvoiceHeader from "./RenderInvoiceHeader";
import RenderInvoiceFooter from "./RenderInvoiceFooter";

export default function PageRender({ invoice, invoiceType }) {
  return (
    <Page
      size="A4"
      style={{
        position: "relative",
        padding: 20,
      }}
    >
      <Image
        fixed
        src={Logo.src}
        style={{
          position: "absolute",
          width: "90%",
          opacity: 0.05,
          zIndex: -1,
          transform: "rotate(335) translateX(-100%) translateY(300%)",
        }}
      />
      {/* //Header */}
      <RenderInvoiceHeader invoiceType={invoiceType} />
      {/* //Customer Details & Invoice Details */}
      <RenderCustomerDetails invoice={invoice} />
      {/* //Render Item Table */}
      <RenderItems items={invoice.items} invoiceType={invoiceType} />
      {/* //Total Amount */}
      {invoiceType === "delivery" ? (
        <View
          style={{
            fontSize: 8,
            width: "100%",
            borderRight: "1px solid #333",
            gap: 2,
            padding: 10,
            border: "1px solid #333",
            borderTop: 0,
            textAlign: "right",
          }}
        >
          <Text>
            Total Items / Qty : {invoice.items.length}/
            {invoice.items.reduce((a, { quantity }) => a + quantity, 0)}
          </Text>
        </View>
      ) : (
        <View
          wrap={false}
          style={{
            border: "1px solid #333",
            borderTop: 0,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              fontSize: 8,
              width: "50%",
              borderRight: "1px solid #333",
              gap: 2,
              padding: 10,
            }}
          >
            <Text>
              Total Items / Qty : {invoice.items.length}/
              {invoice.items.reduce((a, { quantity }) => a + quantity, 0)}
            </Text>
            <Text>
              Total Amount in Words: One Hundred Seventy Rupees Twelve Paise
              Only
            </Text>
          </View>
          <View style={{ width: "50%" }}>
            <View
              style={{ padding: 5, gap: 5, borderBottom: "1px solid #333" }}
            >
              <View
                style={{
                  fontSize: 8,
                  fontFamily: "Lato Bold",
                  flexDirection: "row",
                }}
              >
                <Text style={{ width: "50%", textAlign: "right" }}>
                  Taxable Amount :
                </Text>
                <Text style={{ width: "50%", textAlign: "right" }}>
                  <Image
                    src={Rupee.src}
                    style={{ width: 6, objectFit: "contain" }}
                  />
                  {invoice.items
                    .reduce(
                      (a, { unitPrice, quantity }) => a + unitPrice * quantity,
                      0
                    )
                    .toFixed(2)}
                </Text>
              </View>
              <View
                style={{
                  fontSize: 8,
                  fontFamily: "Lato Bold",
                  flexDirection: "row",
                }}
              >
                <Text style={{ width: "50%", textAlign: "right" }}>CGST :</Text>
                <Text style={{ width: "50%", textAlign: "right" }}>
                  <Image
                    src={Rupee.src}
                    style={{ width: 6, objectFit: "contain" }}
                  />
                  {invoice.items
                    .reduce((a, { tax }) => a + tax.cgst.amount, 0)
                    .toFixed(2)}
                </Text>
              </View>
              <View
                style={{
                  fontSize: 8,
                  fontFamily: "Lato Bold",
                  flexDirection: "row",
                }}
              >
                <Text style={{ width: "50%", textAlign: "right" }}>SGST :</Text>
                <Text style={{ width: "50%", textAlign: "right" }}>
                  <Image
                    src={Rupee.src}
                    style={{ width: 6, objectFit: "contain" }}
                  />
                  {invoice.items
                    .reduce((a, { tax }) => a + tax.sgst.amount, 0)
                    .toFixed(2)}
                </Text>
              </View>
              <View
                style={{
                  fontSize: 8,
                  fontFamily: "Lato Bold",
                  flexDirection: "row",
                }}
              >
                <Text style={{ width: "50%", textAlign: "right" }}>
                  Discount :
                </Text>
                <Text style={{ width: "50%", textAlign: "right" }}>
                  <Image
                    src={Rupee.src}
                    style={{ width: 6, objectFit: "contain" }}
                  />
                  {(
                    invoice.discount.amount +
                    invoice.items.reduce(
                      (a, { discount }) => a + discount.amount,
                      0
                    )
                  ).toFixed(2)}
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 5,
                flexDirection: "row",
                borderBottom: "1px solid #333",
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "Lato Bold",
                  width: "50%",
                  textAlign: "right",
                }}
              >
                Total Amount :
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "Lato Bold",
                  width: "50%",
                  textAlign: "right",
                }}
              >
                <Image
                  src={Rupee.src}
                  style={{ width: 8, objectFit: "contain" }}
                />
                {invoice.totalPrice.toFixed(2)}
              </Text>
            </View>
            {invoice.status === "paid" && (
              <View style={{ padding: 5, gap: 2, flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: "Lato Bold",
                    textAlign: "right",
                    width: "100%",
                  }}
                >
                  Amount paid
                </Text>
              </View>
            )}
            {invoice.status === "pending" && (
              <View style={{ padding: 5, gap: 2, flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: "Lato Bold",
                    textAlign: "right",
                    width: "100%",
                  }}
                >
                  Amount Payable :{" "}
                  <Image
                    src={Rupee.src}
                    style={{ width: 6, objectFit: "contain" }}
                  />{" "}
                  {invoice.totalPrice.toFixed(2)}
                </Text>
              </View>
            )}
            {invoice.status === "partially" && (
              <View style={{ padding: 5, gap: 5 }}>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: "Lato Bold",
                    textAlign: "right",
                    width: "100%",
                  }}
                >
                  Amount Payable :{" "}
                  <Image
                    src={Rupee.src}
                    style={{ width: 6, objectFit: "contain" }}
                  />
                  {(invoice.totalPrice - invoice.paidAmount).toFixed(2)}
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: "Lato Bold",
                    textAlign: "right",
                    width: "100%",
                  }}
                >
                  Amount Paid :{" "}
                  <Image
                    src={Rupee.src}
                    style={{ width: 6, objectFit: "contain" }}
                  />
                  {invoice.paidAmount.toFixed(2)}
                </Text>
              </View>
            )}
          </View>
        </View>
      )}

      {/* //Page Number && Footer */}
      <RenderInvoiceFooter />
    </Page>
  );
}
