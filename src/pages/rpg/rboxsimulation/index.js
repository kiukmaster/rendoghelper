import { useRef, useState } from "react";
import Swal from "sweetalert2";

export default function RandomBoxPage() {
    const [result, setResult] = useState([]);
    const boxRef = useRef();

    const openBox = () => {
        if (boxRef.current.value > 10) {
            Swal.fire('열수있는 상자는 10개가 최대입니다!');
        } else if (boxRef.current.value <= 10) {
            const newResults = [];
            for (let i = 1; i <= boxRef.current.value; i++) {
                const rand = Math.random();
                if (rand < 0.329) {
                    newResults.push(`${i}번째 랜덤박스 : 에픽박스`);
                } else if (rand < 0.658) {
                    newResults.push(`${i}번째 랜덤박스 : 유니크 박스`);
                } else if (rand < 0.987) { // 아래랑 1퍼차이라서 아래는 레전임.
                    newResults.push(`${i}번째 랜덤박스 : 블럭박스`);
                } else if (rand < 0.997) {
                    newResults.push(`${i}번째 랜덤박스 : 레전드박스`);
                } else {
                    newResults.push(`${i}번째 랜덤박스 : 슈페리얼 박스`);
                }
            }
            setResult(newResults);
        }
    }

    return (
        <div className="ta_center">
            <h1>랜덤박스 시뮬레이션</h1>
            <img src="/chest.png" alt="..." loading="lazy" /> <br />
            <label>오픈할 랜덤박스의 갯수 : </label>
            <input ref={boxRef} type="number" min="1" max="10" />
            <button className="MobModalBtn" onClick={openBox}>상자열기!</button>
            <br />
            일종의 재미로 봐주시면 감사하겠습니다 :D <br />
            에픽,유니크,블럭 = 32.9% | 레전드 = 1% | 슈페리얼 = 0.3% 
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

// 에픽 박스 (32.9% 확률): 랜덤 수가 0.329 미만일 경우 (0 ~ 0.3289)
// 유니크 박스 (32.9% 확률): 랜덤 수가 0.329 이상, 0.658 미만일 경우 (0.329 ~ 0.6579)
// 블럭 박스 (32.9% 확률): 랜덤 수가 0658 이상, 0.987 미만일 경우 (0.658 ~ 0.9869)
// 레전드 박스 (1% 확률): 랜덤 수가 0.987 이상, 0.997 미만일 경우 (0.987 ~ 0.9969)
// 슈페리얼 박스 (0.3% 확률): 랜덤 수가 0.997 이상, 1 미만일 경우 (0. ~ 0.9999)

// 100 / 32.9
// 1 / 0.329 = 0 ~ 0.329 | 0.329 ~ 0.658 | 0.658 ~ 0.987 는 에 유 블임.