import store from "@/redux/store";
import {
  emptyInvoiceList,
  updateInvoiceList,
} from "@/redux/features/invoiceList";

export default function getInvoiceList(refresh) {
  return store.dispatch((dispatch, getState) => {
    return getState().invoiceList.length === 0 || refresh
      ? updateInvoice().then(() => {
          return getState().invoiceList;
        })
      : getState().invoiceList;
  });
}

async function updateInvoice() {
  return await fetch("/api/invoice/get-all-invoice")
    .then((res) => res.json())
    .then((data) => {
      store.dispatch((dispatch, getState) => {
        dispatch(emptyInvoiceList());
        dispatch(
          updateInvoiceList({
            data: data.data,
          })
        );
      });
      return true;
    });
}
