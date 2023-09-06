import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="mainnav">
                <Link href="/" legacyBehavior>
                    <a className="warpmain">
                        <span className="logocolor1">Ren</span><span className="logocolor2">dog</span><span className="logocolor3">Helper</span>
                    </a>
                </Link>
            <div className="warpcon">
                <Link href="/gyesan/bosscal" legacyBehavior>
                    <a>
                        <span className="nav_text">계산</span>
                    </a>
                </Link>
                <Link href="/dogam/moblib" legacyBehavior>
                    <a>
                        <span className="nav_text">도감</span>
                    </a>
                </Link>
                <Link href="/simul/rboxsimulation" legacyBehavior>
                    <a>
                        <span className="nav_text">시뮬레이션</span>
                    </a>
                </Link>
                <Link href="/transcendence" legacyBehavior>
                    <a>
                        <span className="nav_text">초월</span>
                    </a>
                </Link>
            </div>
            <style jsx>{`
            .mainnav {
                background: #FFFFFF;
                padding: 1.4rem;
                border-bottom: 1px solid black;
            }

            .warpcon {
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
            }
            .warpmain {
                color: #FFFFFF;
                text-decoration: none;
                font-size: 30px;
                font-weight: bold;
            }
            .logocolor1 {
                color: #00FFFF;
            }
            .logocolor2 {
                color: #FF9900;
            }
            .logocolor3 {
                color: black;
            }
            a {
                text-decoration: none;
                color: black;
                font-weight: bold;
                font-size: 20px;
                margin-left: 20px;
            }
            `}</style>
        </nav>
    );
}