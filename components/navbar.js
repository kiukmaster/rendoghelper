import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="mainnav">
            <Link href="/" legacyBehavior>
                <a className="warpmain"><span className="logocolor1">Ren</span><span className="logocolor2">dog</span>Helper</a>
            </Link>
            <style jsx>{`
            .mainnav {
                background: #6958c6;
                border-bottom: 2px solid #7f79d8;
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