import store from "@/redux/store";
import { setPrintComp, setInitial } from "@/redux/features/printComp";

export function setPrintCompState({ isOpen, title, invoice }) {
  store.dispatch((dispatch, getState) => {
    dispatch(setPrintComp({ isOpen, title, invoice }));
  });
}

export function setInitialState() {
  store.dispatch((dispatch, getState) => {
    dispatch(setPrintComp({ isOpen: false, title: "", invoice: {} }));
  });
}

export function getPrintComp() {
  console.log(store.getState().printComp);
  return store.dispatch((dispatch, getState) => {
    return getState().printComp;
  });
}
