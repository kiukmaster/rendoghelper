import { useState } from "react";

export default function MoneyCal() {
    const [stoneTiers, setStoneTiers] = useState([]);

    const onClickBtn = () => {
        console.log(stoneTiers);
    }
    
    return (
        <div style={{ textAlign: 'center' }}>

            <div className="calculate_container">
                <img src="/calimg/1.png" />
                1강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." />
            </div>
            <div className="calculate_container">
                <img src="/calimg/2.png" />
                2강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." />
            </div>
            <div className="calculate_container">
                <img src="/calimg/3.png" />
                3강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." />
            </div>
            <div className="calculate_container">
                <img src="/calimg/4.png" />
                4강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." />
            </div>
            <div className="calculate_container">
                <img src="/calimg/5.png" />
                5강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." />
            </div>
            <div className="calculate_container">
                <img src="/calimg/6.png" />
                6강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." />
            </div>
            <div className="calculate_container">
                <img src="/calimg/7.png" />
                7강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." />
            </div>
            <div className="calculate_container">
                <img src="/calimg/8.png" />
                8강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." />
            </div>
            <div className="calculate_container">
                <img src="/calimg/9.png" />
                9강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." />
            </div>
            <div className="calculate_container">
                <img src="/calimg/10.png" />
                10강 강화석 :
                <input type="number" placeholder="강화석 개수를 입력하세요." />
            </div>

            <button onClick={onClickBtn}>계산하기</button>


            <style jsx>{`
                .calculate_container {
                    margin: 3rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;
                }

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