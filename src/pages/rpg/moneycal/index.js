import { useRef } from "react";

export default function MoneyCal() {
    const inputRefs = useRef([]);

    const onClickBtn = () => {
        for (let index = 0; index < 9; index++) { // 0 ~ 9까지 반복
            if (inputRefs.current[index].value >= 4) { // 각 배열의 값이 4보다 클경우 계산.
                inputRefs.current[index + 1].value = Number(inputRefs.current[index + 1].value)
                + Math.floor(inputRefs.current[index].value / 4); // Number객체를 이용하여 숫자로 변환한 뒤 계산.
                inputRefs.current[index].value = inputRefs.current[index].value % 4;
            }
        }
    }
    
    return (
        <div className="ta_center">

            <div className="calculate_container">
                <img src="/calimg/1.png" alt="..." loading="lazy" />
                1강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[0] = el)} />
            </div>
            <div className="calculate_container">
                <img src="/calimg/2.png" alt="..." loading="lazy" />
                2강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[1] = el)} />
            </div>
            <div className="calculate_container">
                <img src="/calimg/3.png" alt="..." loading="lazy" />
               3강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[2] = el)} />
            </div>
            <div className="calculate_container">
                <img src="/calimg/4.png" alt="..." loading="lazy" />
                4강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[3] = el)} />
            </div>
            <div className="calculate_container">
                <img src="/calimg/5.png" alt="..." loading="lazy" />
                5강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[4] = el)} />
            </div>
            <div className="calculate_container">
                <img src="/calimg/6.png" alt="..." loading="lazy" />
                6강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[5] = el)} />
            </div>
            <div className="calculate_container">
                <img src="/calimg/7.png" alt="..." loading="lazy" />
                7강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[6] = el)} />
            </div>
            <div className="calculate_container">
                <img src="/calimg/8.png" alt="..." loading="lazy" />
                8강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[7] = el)} />
            </div>
            <div className="calculate_container">
                <img src="/calimg/9.png" alt="..." loading="lazy" />
                9강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[8] = el)} />
            </div>
            <div className="calculate_container">
                <img src="/calimg/10.png" alt="..." loading="lazy" />
                10강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[9] = el)} />
            </div>

            <button onClick={onClickBtn}>계산하기</button>


            <style jsx>{`
                button {
                    cursor: pointer;
                    margin-bottom: 2rem;
                    width: 100px;
                    height: 35px;
                    border: solid 2px purple;
                    border-radius: 20px;
                }

                input {
                    margin-left: 5px;
                    height: 24px;
                    border: solid 3px black;
                    border-radius: 8px;
                }
            `}</style>
        </div>
    );
}