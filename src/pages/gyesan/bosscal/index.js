import { useRef, useState } from "react";
import Link from "next/link";

export default function BossCal() {
    const inputRefs = useRef([]);
    const inputRefs2 = useRef([]);
    const [bossShowModal, setBossShowModal] = useState(false);
    const [miniBossShowModal, setMiniBossShowModal] = useState(false);
    const [conditionShowModal, setConditionShowModal] = useState(false);
    const [money, setMoney] = useState([]);
    const [miniMoney, setMiniMoney] = useState([]);

    const closeModal = () => {
        setBossShowModal(false);
        setMiniBossShowModal(false);
        setConditionShowModal(false);
    }

    const onClickConditionBtn = () => {
        setConditionShowModal(true);
    }

    const onClickBossBtn = () => {
        setBossShowModal(true);
        const bosscal = [
            inputRefs.current[0].value * 1, // 라슬 41
            inputRefs.current[1].value * 2, // 스켈 42
            inputRefs.current[2].value * 2, // 사콰 42
            inputRefs.current[3].value * 3, // 파골 43
            inputRefs.current[4].value * 4, // 스이 51 = 4 4
            inputRefs.current[5].value * 6, // 엘가 5142 = 4 6
            inputRefs.current[6].value * 16 // 스테 61 = 4 16
        ].reduce((a, b) => a + b, 0); // 배열 안의 4강 전부 합침.

        const stoneTiers = [bosscal, 0, 0, 0, 0, 0, 0];

        for (let moneyNum = 0; moneyNum <= 5; moneyNum++) {
            if (stoneTiers[moneyNum] >= 4) {
                stoneTiers[moneyNum + 1] = Number(stoneTiers[moneyNum + 1])
                + Math.floor(stoneTiers[moneyNum] / 4);
                stoneTiers[moneyNum] = stoneTiers[moneyNum] % 4;
            }
        }
        setMoney([...stoneTiers]);
    }

    const onClickMiniBossBtn = () => {
        setMiniBossShowModal(true);
        const bosscal = [
            inputRefs2.current[0].value * 1, // 락토 31
            inputRefs2.current[1].value * 3, // 바드 33
            inputRefs2.current[2].value * 8, // 예티 42 = 3 8
            inputRefs2.current[3].value * 8, // 겁선 42 = 3 8
            inputRefs2.current[4].value * 16, // 레클 51 = 3 16
            inputRefs2.current[5].value * 64, // 오징어 61 = 3 64
            inputRefs2.current[6].value * 48 // 피레이세 53 = 3 48
        ].reduce((a, b) => a + b, 0); // 배열 안의 3강 전부 합침.

        const stoneTiers = [bosscal, 0, 0, 0, 0, 0, 0, 0];

        for (let moneyNum = 0; moneyNum <= 6; moneyNum++) {
            if (stoneTiers[moneyNum] >= 4) {
                stoneTiers[moneyNum + 1] = Number(stoneTiers[moneyNum + 1])
                + Math.floor(stoneTiers[moneyNum] / 4);
                stoneTiers[moneyNum] = stoneTiers[moneyNum] % 4;
            }
        }
        setMiniMoney([...stoneTiers]);
    }

    return (
        <div className="ta_center">
            <h2>가격은 유저거래 기준입니다. 공식아님.</h2>
            <Link href="/gyesan/moneycal" legacyBehavior>
                <button className="condition_check">강화석 계산 바로가기</button>
            </Link>
            <button className="condition_check" onClick={onClickConditionBtn}>시세 확인하기</button>
            {conditionShowModal && 
                <div className="BackModalBox" onClick={closeModal}>
                    <div className="ModalBoxDetail" onClick={(e) => e.stopPropagation()}>
                        <span className="condi_span">라바슬라임 4강 1개</span>
                        <span className="condi_span">프랜틱스켈레톤 4강 2개</span>
                        <span className="condi_span">사스콰치 4강 2개</span>
                        <span className="condi_span">파멸의골렘 4강 3개</span>
                        <span className="condi_span">스피드이더 5강 1개</span>
                        <span className="condi_span">엘더가디언 5강 1개 4강 2개</span> 
                        <span className="condi_span">스테들러 6강 1개 </span>
                        <hr />
                        <span className="condi_span">가디언락토 3강 1개</span>
                        <span className="condi_span">바드스켈레톤 3강 3개</span>
                        <span className="condi_span">예티 4강 2개</span>
                        <span className="condi_span">겁쟁이선장 4강 2개</span>
                        <span className="condi_span">레클루즈거미 5강 1개</span>
                        <span className="condi_span">오징오징대마왕 6강 1개</span>
                        <span className="condi_span">피레 & 이세 5강 3개</span>

                        <h1>시세관련 오류수정은 @kiukmaster 디코 DM주십쇼.</h1>
                    </div>
                </div>
            }
            <div className="boss_cal_container">
                <div className="boss_cal_rank">
                    <ul>
                        <li className="boss_cal_list">
                            <img src="/boss/boss1.png" alt="..." loading="lazy" />
                            라바슬라임
                            <input type="number" placeholder="개수를 입력하세요." ref={(el) => (inputRefs.current[0] = el)} />
                        </li>
                        <li className="boss_cal_list">
                            <img src="/boss/boss2.png" alt="..." loading="lazy" />
                            기간틱 스켈레톤
                            <input type="number" placeholder="개수를 입력하세요." ref={(el) => (inputRefs.current[1] = el)} />
                        </li>
                        <li className="boss_cal_list">
                            <img src="/boss/boss3.png" alt="..." loading="lazy" />
                            사스콰치
                            <input type="number" placeholder="개수를 입력하세요." ref={(el) => (inputRefs.current[2] = el)} />
                        </li>
                        <li className="boss_cal_list">
                            <img src="/boss/boss4.png" alt="..." loading="lazy" />
                            파멸의 골렘
                            <input type="number" placeholder="개수를 입력하세요." ref={(el) => (inputRefs.current[3] = el)} />
                        </li>
                        <li className="boss_cal_list">
                            <img src="/boss/boss5.png" alt="..." loading="lazy" />
                            스피드이더
                            <input type="number" placeholder="개수를 입력하세요." ref={(el) => (inputRefs.current[4] = el)} />
                        </li>
                        <li className="boss_cal_list">
                            <img src="/boss/boss6.png" alt="..." loading="lazy" />
                            엘더 가디언
                            <input type="number" placeholder="개수를 입력하세요." ref={(el) => (inputRefs.current[5] = el)} />
                        </li>
                        <li className="boss_cal_list">
                            <img src="/boss/boss7.png" alt="..." loading="lazy" />
                            스테들러
                            <input type="number" placeholder="개수를 입력하세요." ref={(el) => (inputRefs.current[6] = el)} />
                        </li>
                        <button onClick={onClickBossBtn}>계산하기</button>
                    </ul>
                    {bossShowModal &&
                        <div className="BackModalBox" onClick={closeModal}>
                            <div className="ModalBoxDetail" onClick={(e) => e.stopPropagation()}>
                                <img src="/calimg/4.png" />
                                4강 강화석 : 
                                <input className="ta_center input_size" value={money[0]} type="text" readOnly />개
                                <br />
                                <img src="/calimg/5.png" />
                                5강 강화석 : 
                                <input className="ta_center input_size" value={money[1]} type="text" readOnly />개
                                <br />
                                <img src="/calimg/6.png" />
                                6강 강화석 : 
                                <input className="ta_center input_size" value={money[2]} type="text" readOnly />개
                                <br />
                                <img src="/calimg/7.png" />
                                7강 강화석 : 
                                <input className="ta_center input_size" value={money[3]} type="text" readOnly />개
                                <br />
                                <img src="/calimg/8.png" />
                                8강 강화석 : 
                                <input className="ta_center input_size" value={money[4]} type="text" readOnly />개
                                <br />
                                <img src="/calimg/9.png" />
                                9강 강화석 : 
                                <input className="ta_center input_size" value={money[5]} type="text" readOnly />개
                                <br />
                                <img src="/calimg/10.png" />
                                10강 강화석 : 
                                <input className="ta_center input_size" value={money[6]} type="text" readOnly />개
                            </div>
                        </div>}
                </div>
                <div className="boss_cal_rank">
                    <ul>
                        <li className="boss_cal_list">
                            <img src="/miniboss/miniboss1.png" alt="..." loading="lazy" />
                            가디언 락토 :
                            <input type="number" placeholder="개수를 입력하세요." ref={(el) => (inputRefs2.current[0] = el)} />
                        </li>
                        <li className="boss_cal_list">
                            <img src="/miniboss/miniboss2.png" alt="..." loading="lazy" />
                            바드 스켈레톤 :
                            <input type="number" placeholder="개수를 입력하세요." ref={(el) => (inputRefs2.current[1] = el)} />
                        </li>
                        <li className="boss_cal_list">
                            <img src="/miniboss/miniboss3.png" alt="..." loading="lazy" />
                            스노우 예티 :
                            <input type="number" placeholder="개수를 입력하세요." ref={(el) => (inputRefs2.current[2] = el)} />
                        </li>
                        <li className="boss_cal_list">
                            <img src="/miniboss/miniboss4.png" alt="..." loading="lazy" />
                            겁쟁이 선장 :
                            <input type="number" placeholder="개수를 입력하세요." ref={(el) => (inputRefs2.current[3] = el)} />
                        </li>
                        <li className="boss_cal_list">
                            <img src="/miniboss/miniboss5.png" alt="..." loading="lazy" />
                            레클루즈 거미 :
                            <input type="number" placeholder="개수를 입력하세요." ref={(el) => (inputRefs2.current[4] = el)} />
                        </li>
                        <li className="boss_cal_list">
                            <img src="/miniboss/miniboss6.png" alt="..." loading="lazy" />
                            오징오징 대마왕 :
                            <input type="number" placeholder="개수를 입력하세요." ref={(el) => (inputRefs2.current[5] = el)} />
                        </li>
                        <li className="boss_cal_list">
                            <img src="/miniboss/miniboss7.png" alt="..." loading="lazy" />
                            피레이세 :
                            <input type="number" placeholder="개수를 입력하세요." ref={(el) => (inputRefs2.current[6] = el)} />
                        </li>
                        <button onClick={onClickMiniBossBtn}>계산하기</button>
                    </ul>
                    {miniBossShowModal &&
                        <div className="BackModalBox" onClick={closeModal}>
                            <div className="ModalBoxDetail" onClick={(e) => e.stopPropagation()}>
                                <img src="/calimg/3.png" />
                                3강 강화석 : 
                                <input className="ta_center input_size" value={miniMoney[0]} type="text" readOnly />개
                                <br />
                                <img src="/calimg/4.png" />
                                4강 강화석 : 
                                <input className="ta_center input_size" value={miniMoney[1]} type="text" readOnly />개
                                <br />
                                <img src="/calimg/5.png" />
                                5강 강화석 : 
                                <input className="ta_center input_size" value={miniMoney[2]} type="text" readOnly />개
                                <br />
                                <img src="/calimg/6.png" />
                                6강 강화석 : 
                                <input className="ta_center input_size" value={miniMoney[3]} type="text" readOnly />개
                                <br />
                                <img src="/calimg/7.png" />
                                7강 강화석 : 
                                <input className="ta_center input_size" value={miniMoney[4]} type="text" readOnly />개
                                <br />
                                <img src="/calimg/8.png" />
                                8강 강화석 : 
                                <input className="ta_center input_size" value={miniMoney[5]} type="text" readOnly />개
                                <br />
                                <img src="/calimg/9.png" />
                                9강 강화석 : 
                                <input className="ta_center input_size" value={miniMoney[6]} type="text" readOnly />개
                                <br />
                                <img src="/calimg/10.png" />
                                10강 강화석 : 
                                <input className="ta_center input_size" value={miniMoney[7]} type="text" readOnly />개
                            </div>
                        </div>}
                </div>
                <style jsx>{`
                    input {
                        height: 24px;
                        border: solid 3px black;
                        border-radius: 8px;
                    }
                `}</style>
            </div>
        </div>
    );
}