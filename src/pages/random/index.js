import Link from "next/link";

export default function RandomPage() {
    return (
        <>
            <div className="random_select_container">
                <div className="random_menu_container">
                    <Link href="/random/weapon" legacyBehavior>
                        <a>
                            <img src="/2.png" alt="..." loading="lazy" />
                            <p>무기 도감 바로가기</p>
                        </a>
                    </Link>
                </div>
            </div>
            <style jsx>{`

            img {
                width: 100px;
                height: 100px;
            }

            div {
                text-align: center;
            }

            a {
                text-decoration: none;
                color: black;
                font-weight: bold;
                font-size: 20px;
            }

            `}</style>
        </>
    );
}