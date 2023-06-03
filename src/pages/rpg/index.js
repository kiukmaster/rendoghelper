import Link from "next/link";

export default function RpgPage() {
    return (
        <div>
            <div className="rpg_select_container">
                <div className="rpg_menu_container">
                    <Link href="/rpg/moneycal" legacyBehavior>
                        <a>
                            <img src="/calimg/5.png" alt="..." loading="lazy" />
                            <p>강화석 계산기</p>
                        </a>
                    </Link>
                </div>
                <div className="rpg_menu_container">
                    <Link href="/rpg/bosscal" legacyBehavior>
                        <a>
                            <img src="/boss/boss7.png" alt="..." loading="lazy" />
                            <p>전리품 계산기</p>
                        </a>
                    </Link>
                </div>
                <div className="rpg_menu_container">
                    <Link href="/rpg/powercal" legacyBehavior>
                        <a>
                            <img src="/weapon/legend/5.png" alt="..." loading="lazy" />
                            <p>전투력 계산기</p>
                        </a>
                    </Link>
                </div>
                <div className="rpg_menu_container">
                    <Link href="/rpg/moblib" legacyBehavior>
                        <a>
                            <img src="/mob/ste.png" alt="..." loading="lazy" />
                            <p>몬스터 도감</p>
                        </a>
                    </Link>
                </div>
                <div className="rpg_menu_container">
                    <Link href="/rpg/weaponlib" legacyBehavior>
                        <a>
                            <img src="/weapon/supe/supe2/2.png" alt="..." loading="lazy" />
                            <p>무기 도감</p>
                        </a>
                    </Link>
                </div>
                <div className="rpg_menu_container">
                    <Link href="/rpg/rboxsimulation" legacyBehavior>
                        <a>
                            <img src="/chest.png" alt="..." loading="lazy" />
                            <p>랜덤박스 시뮬레이션</p>
                        </a>
                    </Link>
                </div>
                <div className="rpg_menu_container">
                    <Link href="/rpg/mboxsimulation" legacyBehavior>
                        <a>
                            <img src="/calimg/5.png" alt="..." loading="lazy" />
                            <p>미스틱박스 시뮬레이션</p>
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
        </div>
    );
}