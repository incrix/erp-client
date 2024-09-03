import { Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";

export default function RenderItems({ items, invoiceType }) {
  const isDelivery = invoiceType === "delivery";
  return (
    <View>
      {/* //Table Header */}
      <GenerateTableHeader isDelivery={isDelivery} />
      {/* //Table Items */}
      <View>
        <GenerateItem items={items} isDelivery={isDelivery} />
      </View>
    </View>
  );
}

function GenerateTableHeader({ isDelivery }) {
  return (
    <View
      fixed
      style={{
        flexDirection: "row",
        margin: 0,
        border: "1px solid #333",
        borderTop: 0,
        fontSize: 8,
        fontFamily: "Lato Bold",
      }}
    >
      <Text
        style={{
          padding: "8px 4px",
          width: "5%",
          borderRight: "1px solid #333",
        }}
      >
        S.No
      </Text>
      <Text
        style={{
          padding: "8px 4px",
          width: !isDelivery ? "30%" : "100%",
          borderRight: "1px solid #333",
        }}
      >
        Item
      </Text>
      {!isDelivery && (
        <Text
          style={{
            padding: "8px 4px",
            width: "12%",
            borderRight: "1px solid #333",
          }}
        >
          Rate / Item
        </Text>
      )}
      <Text
        style={{
          padding: "8px 4px",
          width: !isDelivery ? "8%" : "50px ",
          borderRight: !isDelivery ? "1px solid #333" : 0,
        }}
      >
        Qty
      </Text>
      {!isDelivery && (
        <Text
          style={{
            padding: "8px 4px",
            width: "10%",
            borderRight: "1px solid #333",
          }}
        >
          Discount
        </Text>
      )}
      {!isDelivery && (
        <Text
          style={{
            padding: "8px 4px",
            width: "12.5%",
            borderRight: "1px solid #333",
          }}
        >
          Taxable Value
        </Text>
      )}
      {!isDelivery && (
        <Text
          style={{
            padding: "8px 4px",
            width: "10%",
            borderRight: "1px solid #333",
          }}
        >
          CGST
        </Text>
      )}
      {!isDelivery && (
        <Text
          style={{
            padding: "8px 4px",
            width: "10%",
            borderRight: "1px solid #333",
          }}
        >
          SGST
        </Text>
      )}
      {!isDelivery && (
        <Text style={{ padding: "8px 4px", width: "12.5%" }}>Amount</Text>
      )}
    </View>
  );
}

function GenerateItem({ items, isDelivery }) {
  return items.map((item, index) => {
    return (
      <View
        wrap={false}
        style={{
          flexDirection: "row",
          margin: 0,
          border: "1px solid #333",
          borderTop: 0,
          fontSize: 8,
          fontFamily: "Lato",
        }}
      >
        <Text
          style={{
            padding: "8px 4px",
            width: "5%",
            borderRight: "1px solid #333",
          }}
        >
          {index + 1}
        </Text>
        <Text
          style={{
            padding: "8px 4px",
            width: !isDelivery ? "30%" : "100%",
            borderRight: "1px solid #333",
          }}
        >
          {item.name}
        </Text>
        {!isDelivery && (
          <Text
            style={{
              padding: "8px 4px",
              width: "12%",
              borderRight: "1px solid #333",
            }}
          >
            {item.unitPrice.toFixed(2)}
          </Text>
        )}
        <Text
          style={{
            padding: "8px 4px",
            width: !isDelivery ? "8%" : "50px ",
            borderRight: !isDelivery ? "1px solid #333" : 0,
          }}
        >
          {item.quantity}
        </Text>
        {!isDelivery && (
          <Text
            style={{
              padding: "8px 4px",
              width: "10%",
              borderRight: "1px solid #333",
            }}
          >
            {item.discount.amount.toFixed(2)} ({item.discount.percentage}%)
          </Text>
        )}
        {!isDelivery && (
          <Text
            style={{
              padding: "8px 4px",
              width: "12.5%",
              borderRight: "1px solid #333",
            }}
          >
            {item.totalPrice}
          </Text>
        )}
        {!isDelivery && (
          <Text
            style={{
              padding: "8px 4px",
              width: "10%",
              borderRight: "1px solid #333",
            }}
          >
            {item.tax.cgst.amount.toFixed(2)}({item.tax.cgst.percentage}%)
          </Text>
        )}
        {!isDelivery && (
          <Text
            style={{
              padding: "8px 4px",
              width: "10%",
              borderRight: "1px solid #333",
            }}
          >
            {item.tax.sgst.amount.toFixed(2)}({item.tax.sgst.percentage}%)
          </Text>
        )}
        {!isDelivery && (
          <Text style={{ padding: "8px 4px", width: "12.5%" }}>
            {item.totalPrice}
          </Text>
        )}
      </View>
    );
  });
}
