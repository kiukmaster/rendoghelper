import { useEffect, useRef, useState } from "react";

export default function ChoHelp() {
    const [data, setData] = useState([]);
    const [trandata, setTranData] = useState([]);
    const searchInputs = useRef([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/wpstonedata.json');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('데이터를 불러오는 중 에러가 발생했습니다:', error);
            }
        };
    
        fetchData();
    }, []);

    const tranListSend = () => {
        const filteredData = data.filter((stone) => {
            return (
                stone.RedStone >= parseInt(searchInputs.current[0].value) &&
                stone.YellowStone >= parseInt(searchInputs.current[1].value) &&
                stone.GreenStone >= parseInt(searchInputs.current[2].value) &&
                stone.BlueStone >= parseInt(searchInputs.current[3].value) &&
                stone.PurpleStone >= parseInt(searchInputs.current[4].value)
            );
        });
        
        setTranData(filteredData);
    };

    return (
        <>
            <ul className="stone_search_container">
                <li>
                    <img src="/stone/red.png" />
                    <span>빨강 초월석</span>
                    <input
                        className='stone_input'
                        type='number'
                        placeholder='초월석의 수를 입력하세요.'
                        ref={(el) => (searchInputs.current[0] = el)}
                        defaultValue={0}
                        />
                </li>
                <li>
                    <img src="/stone/yellow.png"/>
                    <span>노랑 초월석</span>
                    <input
                        className='stone_input'
                        type='number'
                        placeholder='초월석의 수를 입력하세요.'
                        ref={(el) => (searchInputs.current[1] = el)}
                        defaultValue={0}
                        />
                </li>
                <li>
                    <img src="/stone/green.png" />
                    <span>초록 초월석</span>
                    <input
                        className='stone_input'
                        type='number'
                        placeholder='초월석의 수를 입력하세요.'
                        ref={(el) => (searchInputs.current[2] = el)}
                        defaultValue={0}
                        />
                </li>
                <li>
                    <img src="/stone/blue.png" />
                    <span>파랑 초월석</span>
                    <input
                        className='stone_input'
                        type='number'
                        placeholder='초월석의 수를 입력하세요.'
                        ref={(el) => (searchInputs.current[3] = el)}
                        defaultValue={0}
                        />
                </li>
                <li>
                    <img src="/stone/purple.png" />
                    <span>보라 초월석</span>
                    <input
                        className='stone_input'
                        type='number'
                        placeholder='초월석의 수를 입력하세요.'
                        ref={(el) => (searchInputs.current[4] = el)}
                        defaultValue={0}
                        />
                </li>
            </ul>
            <div className="tran_btn_cont">
                <button onClick={tranListSend}>목록 보기</button>
            </div>
            {trandata.map((data, index) => {
                return (
                    <div className="tran_list" key={index}>
                        <img src={`/${data.imgURL}`} alt="..." loading="lazy" width={48} height={48} />
                        <span className="tran_name">{data.name}</span>
                        <table>
                            <thead>
                            <tr>
                                <th>빨강 강화석</th>
                                <th>노랑 강화석</th>
                                <th>초록 강화석</th>
                                <th>파랑 강화석</th>
                                <th>보라 강화석</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{data.RedStone}</td>
                                <td>{data.YellowStone}</td>
                                <td>{data.GreenStone}</td>
                                <td>{data.BlueStone}</td>
                                <td>{data.PurpleStone}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>)
            })}
            <style jsx>{`
                table {
                    border-collapse: collapse; /* 셀 경계를 병합하여 구분선을 만듦 */
                    margin-left:auto;
                    margin-right:auto;
                }
                th, td {
                    border: 1px solid black; /* 각 셀에 1px 굵기의 검은색 선을 추가 */
                    padding: 8px; /* 셀 내부 여백 설정 */
                }
                span {
                    display: block;
                }
                button {
                    display: block;
                    border: 2px solid #7f79d8;
                    border-radius: 12px;
                    font-weight: bold;
                    height: 35px;
                    width: 100px;
                }
                button:hover {
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}