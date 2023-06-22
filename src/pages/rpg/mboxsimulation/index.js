import { useRef, useState } from "react";
import Swal from "sweetalert2";

export default function MythicBoxPage() {
    const [result, setResult] = useState([]);
    const boxRef = useRef();

    const openBox = () => {
        if (boxRef.current.value > 5) {
            Swal.fire('열수있는 상자는 5개가 최대입니다!');
        } else if (boxRef.current.value <= 5) {
            const newResults = [];
            for (let i = 1; i <= boxRef.current.value; i++) {
                const rand = Math.random();
                if (rand < 0.0179) {
                    newResults.push(`${i}번째 미스틱박스 : 가디언`);
                } else if (rand < 0.0358) {
                    newResults.push(`${i}번째 미스틱박스 : 리스크`);
                } else if (rand < 0.0537) { 
                    newResults.push(`${i}번째 미스틱박스 : 블랙홀`);
                } else if (rand < 0.0716) {
                    newResults.push(`${i}번째 미스틱박스 : 비숍`);
                } else if (rand < 0.0895) {
                    newResults.push(`${i}번째 미스틱박스 : 슈메티드`);
                } else if (rand < 0.1074) {
                    newResults.push(`${i}번째 미스틱박스 : 아르마`);
                } else if (rand < 0.1253) {
                    newResults.push(`${i}번째 미스틱박스 : 에놉시스`);
                } else if (rand < 0.1432) {
                    newResults.push(`${i}번째 미스틱박스 : 워터노바`);
                } else if (rand < 0.1611) {
                    newResults.push(`${i}번째 미스틱박스 : 워터서퍼`);
                } else if (rand < 0.179) {
                    newResults.push(`${i}번째 미스틱박스 : 워터폴`);
                } else if (rand < 0.1969) {
                    newResults.push(`${i}번째 미스틱박스 : 익스플로젼`);
                } else if (rand < 0.2148) {
                    newResults.push(`${i}번째 미스틱박스 : 프런쳐`);
                } else if (rand < 0.2327) {
                    newResults.push(`${i}번째 미스틱박스 : 하포럼`);
                } else if (rand < 0.2506) {
                    newResults.push(`${i}번째 미스틱박스 : 네크로헤머`);
                } else if (rand < 0.2685) {
                    newResults.push(`${i}번째 미스틱박스 : 데스페라도`);
                } else if (rand < 0.2864) {
                    newResults.push(`${i}번째 미스틱박스 : 라이오닉`);
                } else if (rand < 0.3043) {
                    newResults.push(`${i}번째 미스틱박스 : 마그네트`);
                } else if (rand < 0.3222) {
                    newResults.push(`${i}번째 미스틱박스 : 매직 콜리젼`);
                } else if (rand < 0.3401) {
                    newResults.push(`${i}번째 미스틱박스 : 메테오`);
                } else if (rand < 0.358) {
                    newResults.push(`${i}번째 미스틱박스 : 볼케이노`);
                } else if (rand < 0.3759) {
                    newResults.push(`${i}번째 미스틱박스 : 사령소환`);
                } else if (rand < 0.3938) {
                    newResults.push(`${i}번째 미스틱박스 : 셀프 익스팅션`);
                } else if (rand < 0.4117) {
                    newResults.push(`${i}번째 미스틱박스 : 스타 런처`);
                } else if (rand < 0.4296) {
                    newResults.push(`${i}번째 미스틱박스 : 스타 블래스터`);
                } else if (rand < 0.4475) {
                    newResults.push(`${i}번째 미스틱박스 : 스톰크러셔`);
                } else if (rand < 0.4654) {
                    newResults.push(`${i}번째 미스틱박스 : 에반리스트`);
                } else if (rand < 0.4833) {
                    newResults.push(`${i}번째 미스틱박스 : 트랩`);
                } else if (rand < 0.5012) {
                    newResults.push(`${i}번째 미스틱박스 : 트리플 스타`);
                } else if (rand < 0.5191) {
                    newResults.push(`${i}번째 미스틱박스 : 프로미넌트`);
                } else if (rand < 0.537) {
                    newResults.push(`${i}번째 미스틱박스 : 헤비스매셔`);
                } else if (rand < 0.5549) {
                    newResults.push(`${i}번째 미스틱박스 : 다크로즈`);
                } else if (rand < 0.5728) {
                    newResults.push(`${i}번째 미스틱박스 : 문라이트`);
                } else if (rand < 0.5907) {
                    newResults.push(`${i}번째 미스틱박스 : 브이미르`);
                } else if (rand < 0.6086) {
                    newResults.push(`${i}번째 미스틱박스 : 블레이드브랜디쉬`);
                } else if (rand < 0.6265) {
                    newResults.push(`${i}번째 미스틱박스 : 세크리트`);
                } else if (rand < 0.6444) {
                    newResults.push(`${i}번째 미스틱박스 : 하데스`);
                } else if (rand < 0.6623) {
                    newResults.push(`${i}번째 미스틱박스 : 혈계심판`);
                } else if (rand < 0.6802) {
                    newResults.push(`${i}번째 미스틱박스 : 흑월참`);
                } else if (rand < 0.6981) {
                    newResults.push(`${i}번째 미스틱박스 : 흡혈귀`);
                } else if (rand < 0.716) {
                    newResults.push(`${i}번째 미스틱박스 : 파닥파닥`);
                } else if (rand < 0.7339) {
                    newResults.push(`${i}번째 미스틱박스 : 당근이지`);
                } else if (rand < 0.7518) {
                    newResults.push(`${i}번째 미스틱박스 : 냉동참치`);
                } else if (rand < 0.7697) {
                    newResults.push(`${i}번째 미스틱박스 : 잠수부검`);
                } else if (rand < 0.7876) {
                    newResults.push(`${i}번째 미스틱박스 : 방방`);
                } else if (rand < 0.8055) {
                    newResults.push(`${i}번째 미스틱박스 : 치킨붐`);
                } else if (rand < 0.8234) {
                    newResults.push(`${i}번째 미스틱박스 : 폭발화살`);
                } else if (rand < 0.8413) {
                    newResults.push(`${i}번째 미스틱박스 : 야구방망이`);
                } else if (rand < 0.8592) {
                    newResults.push(`${i}번째 미스틱박스 : 바운스`);
                } else if (rand < 0.8771) {
                    newResults.push(`${i}번째 미스틱박스 : 단단한 나무`);
                } else if (rand < 0.895) {
                    newResults.push(`${i}번째 미스틱박스 : 마그마블럭`);
                } else if (rand < 0.9129) {
                    newResults.push(`${i}번째 미스틱박스 : 아이스블럭`);
                } else if (rand < 0.9308) {
                    newResults.push(`${i}번째 미스틱박스 : 스피드블럭`);
                } else if (rand < 0.9487) {
                    newResults.push(`${i}번째 미스틱박스 : 스톤블럭`);
                } else if (rand < 0.9666) {
                    newResults.push(`${i}번째 미스틱박스 : 소울블럭`);
                } else if (rand < 0.9845) {
                    newResults.push(`${i}번째 미스틱박스 : 디멘션블럭`);
                } else {
                    newResults.push(`${i}번째 미스틱박스 : 엔젤블럭`);
                }
            }
            setResult(newResults);
        }
    }

    return (
        <div className="ta_center">
            <h1>미스틱박스 시뮬레이션</h1>
            <img src="/echest.png" width={116} height={130} alt="..." loading="lazy" /> <br />
            <label>오픈할 랜덤박스의 갯수 : </label>
            <input ref={boxRef} type="number" min="1" max="5" />
            <button className="MobModalBtn" onClick={openBox}>상자열기!</button>
            <br />
            일종의 재미로 봐주시면 감사하겠습니다 :D <br />
            <div className="ta_center f-b result_box">
                {result.map((item, index) => {
                    return (
                        <div key={index}>
                            {item}
                        </div>);
                })}
            </div>
        </div>
    );
}

// 개당 0.0179 % ...
// 총 56개...