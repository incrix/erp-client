import store from "@/redux/store";
import {
  emptyCategoryList,
  updateCategoryList,
} from "@/redux/features/categoryList";

export default function getCategory(refresh) {
  return store.dispatch((dispatch, getState) => {
    return getState().categoryList.length === 0 || refresh
      ? updateCategory().then(() => {
          return getState().categoryList;
        })
      : getState().categoryList;
  });
}

async function updateCategory() {
  return await fetch("/api/product/get-category")
    .then((res) => res.json())
    .then((data) => {
      store.dispatch((dispatch, getState) => {
        dispatch(emptyCategoryList());
        dispatch(
          updateCategoryList({
            data: data.data,
          })
        );
      });
      return true;
    });
}
