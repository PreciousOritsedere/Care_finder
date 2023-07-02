import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormDataProvider } from "@/context/FormData/FormDataContext";

export default function App({ Component, pageProps }) {
  return (
    <FormDataProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </FormDataProvider>
  );
}
