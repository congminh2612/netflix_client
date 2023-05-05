import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydrateSate}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}
