import Head from "next/head";
import Layout from "../../components/Layout";
import "../globals.css";

export default function App({Component, pageProps}) {
    return (
        <>
            <Layout />
            <Head>
                <meta name="description" content="마인크래프트 렌독서버 도우미 사이트입니다." />
                <meta name="keywords" content="마인크래프트, 마크, 렌독서버, 렌독, 랜독, 랜독서버, 마크서버, 마크렌독, Rendog, Minecraft Rendog Server" />
                <link rel="icon" href="./mainimg/Rendog.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>렌독서버 도우미 - RendogHelper</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}