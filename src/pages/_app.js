import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
  <>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  {/* <!-- Start Script --> */}
    {/* <Script src="assets/js/jquery-1.11.0.min.js"/> */}
    {/* <Script src="assets/js/jquery-migrate-1.2.1.min.js"/> */}
    <Script src="assets/js/bootstrap.bundle.min.js"/>
    {/* <Script src="assets/js/templatemo.js"/> */}
    <Script src="assets/js/custom.js"/>
    {/* <!-- End Script --> */}
  </>
  );
}
