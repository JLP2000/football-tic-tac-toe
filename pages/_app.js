import Layout from "@/components/Layout";
import "@/styles/globals.css"; // importing global styles

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
