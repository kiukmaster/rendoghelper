import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="imgBox">
            </div>
            <div className="warpContainer">
                <div className="warpBox">
                    <Link href="/rpghelper" legacyBehavior>
                        <a>
                            <img className="rdimg" src="/mainimg/rpg.png" alt="..." loading="lazy" />
                            <p>RPG 바로가기</p>
                            <p className="textDetail">RPG 서버를 이용하는데 유용한 도구를 사용할 수 있어요!</p>
                        </a>
                    </Link>
                </div>
                <div className="warpBox">
                    <Link href="/randomhelper" legacyBehavior>
                        <a>
                            <img className="rdimg" src="/mainimg/randomwar.png" alt="..." loading="lazy" />
                            <p>랜덤무기전쟁 바로가기</p>
                            <p className="textDetail">랜덤무기전쟁 서버를 이용하는데 유용한 도구를 사용할 수 있어요!</p>
                        </a>
                    </Link>
                </div>
            </div>
            
            <style jsx>{`
            a {
                text-decoration: none;
                color: black;
            }

            p {
                font-weight: bold;
                font-size: 32px;
            }

            .Container {
                text-align: center;
            }

            .textDetail {
                color: gray;
                font-size: 14px;
            }

            .warpContainer {
                display: grid;
                grid-template-columns: 1fr 1fr;
                text-align: center;
            }

            .warpBox {
                margin-top: 2.3rem;
                margin-right: 1rem;
                margin-left: 1rem;
                padding-top: 2rem;
                border: solid 2px black;
                border-radius: 12px;
            }

            .rdimg {
                width: 400px;
                height: 250px;
            }

            .imgBox {
                padding: 100px;
                background-image: url('/mainimg/RD.png');
                background-repeat: repeat;
                background-size: cover;
                background-position: center;
            }

            @media (max-width: 1000px){
                .rdimg {
                    width: 300px;
                    height: 200px;
                }
            }
            
            @media (min-width: 1000px){
                .imgBox {
                    padding: 150px;
                }
            }
            
            @media (max-width: 726px){
                .rdimg {
                    width: 250px;
                    height: 130px;
                }
                .warpContainer {
                    margin-top: 2.3rem;
                    display: block;
                    text-align: center;
                }
            }
            
            @media (min-width: 1400px){
                .imgBox {
                    padding: 200px;
                }
            }
            `}</style>
        </>
    );
}