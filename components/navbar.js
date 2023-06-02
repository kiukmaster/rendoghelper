import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <Link href="/" legacyBehavior>
                <a className="warpmain"><span className="logocolor1">Ren</span><span className="logocolor2">dog</span>Helper</a>
            </Link>
            <style jsx>{`
            nav {
                position: static;
                background: gray;
                padding: 0.3rem;
            }
            .warpmain {
                color: #FFFFFF;
                text-decoration: none;
                font-size: 30px;
                font-weight: bold;
            }
            .logocolor1 {
                color: #00FFFF
            }
            .logocolor2 {
                color: #FF9900
            }
            `}</style>
        </nav>
    );
}