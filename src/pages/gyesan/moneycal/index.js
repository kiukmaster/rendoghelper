import { useRef, useState } from "react";

export default function MoneyCal() {
    const inputRefs = useRef([]);
    const [ShowModal, setShowModal] = useState(false);

    const onClickBtn = () => {
        setShowModal(true);
        for (let index = 0; index < 9; index++) { // 0 ~ 9까지 반복
            if (inputRefs.current[index].value >= 4) { // 각 배열의 값이 4보다 클경우 계산.
                inputRefs.current[index + 1].value = Number(inputRefs.current[index + 1].value)
                + Math.floor(inputRefs.current[index].value / 4); // Number객체를 이용하여 숫자로 변환한 뒤 계산.
                inputRefs.current[index].value = inputRefs.current[index].value % 4;
            }
        }
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const clearValueBtn = () => {
        for (let index = 0; index < 10; index++) { // 0 ~ 9까지 반복
            inputRefs.current[index].value = 0;
        }
    }

    return (
        <div className="ta_center">

            <div className="calculate_container">
                <img src="/calimg/1.png" width={32} height={32} alt="..." loading="lazy" />
                <span>1강 강화석</span>
                <input type="number" defaultValue={0} placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[0] = el)} />
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[0].value = parseInt(inputRefs.current[0].value) + 1;
                }} >+ 1</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[0].value = parseInt(inputRefs.current[0].value) + 2;
                }} >+ 2</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[0].value = parseInt(inputRefs.current[0].value) + 3;
                }} >+ 3</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[0].value = parseInt(inputRefs.current[0].value) + 4;
                }} >+ 4</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[0].value = parseInt(inputRefs.current[0].value) + 5;
                }} >+ 5</button>
            </div>
            <div className="calculate_container">
                <img src="/calimg/2.png" width={32} height={32} alt="..." loading="lazy" />
                <span>2강 강화석</span>
                <input type="number" defaultValue={0} placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[1] = el)} />
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[1].value = parseInt(inputRefs.current[1].value) + 1;
                }} >+ 1</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[1].value = parseInt(inputRefs.current[1].value) + 2;
                }} >+ 2</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[1].value = parseInt(inputRefs.current[1].value) + 3;
                }} >+ 3</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[1].value = parseInt(inputRefs.current[1].value) + 4;
                }} >+ 4</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[1].value = parseInt(inputRefs.current[1].value) + 5;
                }} >+ 5</button>
            </div>
            <div className="calculate_container">
                <img src="/calimg/3.png" width={32} height={32} alt="..." loading="lazy" />
               <span>3강 강화석</span>
                <input type="number" defaultValue={0} placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[2] = el)} />
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[2].value = parseInt(inputRefs.current[2].value) + 1;
                }} >+ 1</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[2].value = parseInt(inputRefs.current[2].value) + 2;
                }} >+ 2</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[2].value = parseInt(inputRefs.current[2].value) + 3;
                }} >+ 3</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[2].value = parseInt(inputRefs.current[2].value) + 4;
                }} >+ 4</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[2].value = parseInt(inputRefs.current[2].value) + 5;
                }} >+ 5</button>
            </div>
            <div className="calculate_container">
                <img src="/calimg/4.png" width={32} height={32} alt="..." loading="lazy" />
                <span>4강 강화석</span>
                <input type="number" defaultValue={0} placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[3] = el)} />
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[3].value = parseInt(inputRefs.current[3].value) + 1;
                }} >+ 1</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[3].value = parseInt(inputRefs.current[3].value) + 2;
                }} >+ 2</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[3].value = parseInt(inputRefs.current[3].value) + 3;
                }} >+ 3</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[3].value = parseInt(inputRefs.current[3].value) + 4;
                }} >+ 4</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[3].value = parseInt(inputRefs.current[3].value) + 5;
                }} >+ 5</button>
            </div>
            <div className="calculate_container">
                <img src="/calimg/5.png" width={32} height={32} alt="..." loading="lazy" />
                <span>5강 강화석</span>
                <input type="number" defaultValue={0} placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[4] = el)} />
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[4].value = parseInt(inputRefs.current[4].value) + 1;
                }} >+ 1</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[4].value = parseInt(inputRefs.current[4].value) + 2;
                }} >+ 2</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[4].value = parseInt(inputRefs.current[4].value) + 3;
                }} >+ 3</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[4].value = parseInt(inputRefs.current[4].value) + 4;
                }} >+ 4</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[4].value = parseInt(inputRefs.current[4].value) + 5;
                }} >+ 5</button>
            </div>
            <div className="calculate_container">
                <img src="/calimg/6.png" width={32} height={32} alt="..." loading="lazy" />
                <span>6강 강화석</span>
                <input type="number" defaultValue={0} placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[5] = el)} />
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[5].value = parseInt(inputRefs.current[5].value) + 1;
                }} >+ 1</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[5].value = parseInt(inputRefs.current[5].value) + 2;
                }} >+ 2</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[5].value = parseInt(inputRefs.current[5].value) + 3;
                }} >+ 3</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[5].value = parseInt(inputRefs.current[5].value) + 4;
                }} >+ 4</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[5].value = parseInt(inputRefs.current[5].value) + 5;
                }} >+ 5</button>
            </div>
            <div className="calculate_container">
                <img src="/calimg/7.png" width={32} height={32} alt="..." loading="lazy" />
                <span>7강 강화석</span>
                <input type="number" defaultValue={0} placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[6] = el)} />
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[6].value = parseInt(inputRefs.current[6].value) + 1;
                }} >+ 1</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[6].value = parseInt(inputRefs.current[6].value) + 2;
                }} >+ 2</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[6].value = parseInt(inputRefs.current[6].value) + 3;
                }} >+ 3</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[6].value = parseInt(inputRefs.current[6].value) + 4;
                }} >+ 4</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[6].value = parseInt(inputRefs.current[6].value) + 5;
                }} >+ 5</button>
            </div>
            <div className="calculate_container">
                <img src="/calimg/8.png" width={32} height={32} alt="..." loading="lazy" />
                <span>8강 강화석</span>
                <input type="number" defaultValue={0} placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[7] = el)} />
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[7].value = parseInt(inputRefs.current[7].value) + 1;
                }} >+ 1</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[7].value = parseInt(inputRefs.current[7].value) + 2;
                }} >+ 2</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[7].value = parseInt(inputRefs.current[7].value) + 3;
                }} >+ 3</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[7].value = parseInt(inputRefs.current[7].value) + 4;
                }} >+ 4</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[7].value = parseInt(inputRefs.current[7].value) + 5;
                }} >+ 5</button>
            </div>
            <div className="calculate_container">
                <img src="/calimg/9.png" width={32} height={32} alt="..." loading="lazy" />
                <span>9강 강화석</span>
                <input type="number" defaultValue={0} placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[8] = el)} />
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[8].value = parseInt(inputRefs.current[8].value) + 1;
                }} >+ 1</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[8].value = parseInt(inputRefs.current[8].value) + 2;
                }} >+ 2</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[8].value = parseInt(inputRefs.current[8].value) + 3;
                }} >+ 3</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[8].value = parseInt(inputRefs.current[8].value) + 4;
                }} >+ 4</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[8].value = parseInt(inputRefs.current[8].value) + 5;
                }} >+ 5</button>
            </div>
            <div className="calculate_container">
                <img src="/calimg/10.png" width={32} height={32} alt="..." loading="lazy" />
                <span>10강 강화석</span>
                <input type="number" defaultValue={0} placeholder="강화석 개수를 입력하세요." ref={(el) => (inputRefs.current[9] = el)} />
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[9].value = parseInt(inputRefs.current[9].value) + 1;
                }} >+ 1</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[9].value = parseInt(inputRefs.current[9].value) + 2;
                }} >+ 2</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[9].value = parseInt(inputRefs.current[9].value) + 3;
                }} >+ 3</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[9].value = parseInt(inputRefs.current[9].value) + 4;
                }} >+ 4</button>
                <button className="plusbtn" onClick={() => {
                    inputRefs.current[9].value = parseInt(inputRefs.current[9].value) + 5;
                }} >+ 5</button>
            </div>

            {ShowModal &&
                        <div className="BackModalBox" onClick={closeModal}>
                            <div className="ModalBoxDetail" onClick={(e) => e.stopPropagation()}>
                                <img src="/calimg/1.png" />
                                1강 강화석 
                                <input className="readinput ta_center input_size" value={inputRefs.current[0].value} type="text" readOnly /><br />
                                <img src="/calimg/2.png" />
                                2강 강화석 
                                <input className="readinput ta_center input_size" value={inputRefs.current[1].value} type="text" readOnly /><br />
                                <img src="/calimg/3.png" />
                                3강 강화석 
                                <input className="readinput ta_center input_size" value={inputRefs.current[2].value} type="text" readOnly /><br />
                                <img src="/calimg/4.png" />
                                4강 강화석 
                                <input className="readinput ta_center input_size" value={inputRefs.current[3].value} type="text" readOnly /><br />
                                <img src="/calimg/5.png" />
                                5강 강화석 
                                <input className="readinput ta_center input_size" value={inputRefs.current[4].value} type="text" readOnly /><br />
                                <img src="/calimg/6.png" />
                                6강 강화석 
                                <input className="readinput ta_center input_size" value={inputRefs.current[5].value} type="text" readOnly /><br />
                                <img src="/calimg/7.png" />
                                7강 강화석 
                                <input className="readinput ta_center input_size" value={inputRefs.current[6].value} type="text" readOnly /><br />
                                <img src="/calimg/8.png" />
                                8강 강화석 
                                <input className="readinput ta_center input_size" value={inputRefs.current[7].value} type="text" readOnly /><br />
                                <img src="/calimg/9.png" />
                                9강 강화석 
                                <input className="readinput ta_center input_size" value={inputRefs.current[8].value} type="text" readOnly /><br />
                                <img src="/calimg/10.png" />
                                10강 강화석 
                                <input className="readinput ta_center input_size" value={inputRefs.current[9].value} type="text" readOnly /><br />
                            </div>
                        </div>}

            <button onClick={onClickBtn}>계산하기</button>
            <button onClick={clearValueBtn}>초기화하기</button>

            <style jsx>{`
                span {
                    display: block;
                }

                button {
                    cursor: pointer;
                    margin-bottom: 2rem;
                    width: 100px;
                    height: 35px;
                    border: solid 2px purple;
                    border-radius: 20px;
                }

                .plusbtn {
                    display: inline-block;
                    border: 2px solid black;
                    border-radius: 6px;
                    width: 50px;
                    height: 30px;
                    font-weight: bold;
                    margin: 5px;
                }

                input {
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    height: 24px;
                    border: solid 3px black;
                    border-radius: 8px;
                }

                .readinput {
                    display: inline-block;
                }
            `}</style>
        </div>
    );
}