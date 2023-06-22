import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="imgBox">
            </div>
            <div className="warpContainer">
                <div className="warpBox">
                    <Link href="/rpg" legacyBehavior>
                        <a className="rpgWarpPoint">
                            <img className="rdimg" src="/mainimg/rpg.png" alt="..." loading="lazy" />
                            <p className="textmain">RPG 바로가기</p>
                            <p className="textDetail">RPG 서버를 이용하는데 유용한 도구를 사용할 수 있어요!</p>
                        </a>
                    </Link>
                </div>
            </div>
            <style jsx>{`
            .rpgWarpPoint {
                text-decoration: none;
                color: black;
            }
            `}</style>
        </>
    );
}