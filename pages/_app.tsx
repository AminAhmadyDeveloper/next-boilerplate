import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@store/store";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import "@styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}
