import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormDataProvider } from "@/context/FormData/FormDataContext";
import { SearchResultsProvider } from "@/context/SearchResults/SearchResultsContext";

export default function App({ Component, pageProps }) {
  return (
    <FormDataProvider>
      <SearchResultsProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </SearchResultsProvider>
    </FormDataProvider>
  );
}
