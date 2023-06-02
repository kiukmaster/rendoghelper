import Head from "next/head";
import Layout from "../../components/Layout";
import "../globals.css";

export default function App({Component, pageProps}) {
    return (
        <>
            <Layout />
            <Head>
                <title>RendogHelper</title>
                <link rel="icon" href="./mainimg/Rendog.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}