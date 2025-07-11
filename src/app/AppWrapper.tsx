import { memo } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux-store";
import App from "./router";

const AppWrapper = () => {
  
  return (
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
          <title>Event Manager</title>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default memo(AppWrapper);
