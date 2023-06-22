import Link from "next/link";

export default function RpgPage() {
    return (
        <>
            <ul className="rpg_select_container">
                <li>
                    <Link href="/rpg/moneycal" legacyBehavior>
                        <a>
                            <img className="warp_img" src="/calimg/5.png" alt="..." loading="lazy" />
                            <span className="warp_text">강화석 계산기</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/rpg/bosscal" legacyBehavior>
                        <a>
                            <img className="warp_img" src="/boss/boss7.png" alt="..." loading="lazy" />
                            <span className="warp_text">전리품 계산기</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/rpg/moblib" legacyBehavior>
                        <a>
                            <img className="warp_img" src="/mob/38.png" alt="..." loading="lazy" />
                            <span className="warp_text">몬스터 도감</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/rpg/weaponlib" legacyBehavior>
                        <a>
                            <img className="warp_img" src="/2.png" alt="..." loading="lazy" />
                            <span className="warp_text">무기 도감</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/rpg/rboxsimulation" legacyBehavior>
                        <a>
                            <img className="warp_img" src="/chest.png" alt="..." loading="lazy" />
                            <span className="warp_text">랜덤박스 시뮬레이션</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/rpg/mboxsimulation" legacyBehavior>
                        <a>
                            <img className="warp_img" src="/echest.png" alt="..." loading="lazy" />
                            <span className="warp_text">미스틱박스 시뮬레이션</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/rpg/transcendence" legacyBehavior>
                        <a>
                            <img className="warp_img" src="/wpimg/legend/legend2/3.png" alt="..." loading="lazy" />
                            <span className="warp_text">초월 도우미</span>
                        </a>
                    </Link>
                </li>

            </ul>

            <style jsx>{`

            li {
                margin: 1.2rem;
                width: 200px;
                height: 200px;
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