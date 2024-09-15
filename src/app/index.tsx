import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

import { router } from "./Router/Router";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

container.render(
  <SkeletonTheme baseColor="#f5f5f5" highlightColor="#dfdfdf">
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </SkeletonTheme>
);
