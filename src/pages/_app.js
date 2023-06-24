import Head from "next/head";
import Layout from "../../components/Layout";
import "../globals.css";

export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                {/* <!-- Google tag (gtag.js) --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-TKHH72GXBD"></script>
                    <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());

                    gtag('config', 'G-TKHH72GXBD');
                </script>
                <link rel="icon" href="./mainimg/Rendog.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <meta name="description" content="마인크래프트 1.12.2 ~ 최신버전을 지원하는 RPG서버 렌독서버의 유저분들에게 여러가지 기능으로 도움을 줄 수 있는 웹 사이트입니다. 강화석 계산기, 보스 전리품 계산기, 무기도감, 스킬영상 등 다양한 기능이 있습니다." />
                <meta name="keywords" content="마인크래프트, 마크, 렌독, 렌독서버, 렌독 도우미, 렌독 서버, 렌독 헬퍼, 렌독 서버 헬퍼, 렌독 서버 도우미 렌독서버도우미, 렌독헬퍼, 마크렌독, 마크렌독헬퍼, 마크렌독도우미, 헬퍼, 렌독RPG, 마크RPG, 마크서버, 멀티서버, RPG" />
                <meta name="author" content="Ryu SeoJun" />
                <meta property="og:title" content="렌독서버 도우미" />
                <meta property="og:description" content="마인크래프트 1.12.2 ~ 최신버전을 지원하는 RPG서버 렌독서버의 유저분들에게 여러가지 기능으로 도움을 줄 수 있는 웹 사이트입니다. 강화석 계산기, 보스 전리품 계산기, 무기도감, 스킬영상 등 다양한 기능이 있습니다." />
                <meta property="og:url" content="https://rdhelper.site" />
                <title>렌독 서버 도우미 - Rendog Server Helper</title>
            </Head>
            <Layout />
            <Component {...pageProps} />
        </>
    );
}