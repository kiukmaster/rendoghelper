import { useEffect, useState } from "react";

export default function WeaponPage() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchInput, setSearchInput] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        Promise.all([
            fetch('/Epic.json').then((response) => response.json()),
            fetch('/Unique.json').then((response) => response.json()),
            fetch('/Legend.json').then((response) => response.json()),
            fetch('/Superior.json').then((response) => response.json()),
            fetch('/choEpic.json').then((response) => response.json()),
            fetch('/choUnique.json').then((response) => response.json()),
            fetch('/choLegend.json').then((response) => response.json()),
            fetch('/choSuperior.json').then((response) => response.json()),
        ]).then(([epicData, uniqueData, legendData, supeData, choEpicData, choUniqueData, choLegendData, choSupeData]) => {
            setData([...epicData, ...uniqueData, ...legendData, ...supeData, ...choEpicData, ...choUniqueData, ...choLegendData, ...choSupeData ]);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (!data) {
        return <div className="ta_center" style={{fontSize: '30px'}}>데이터 불러오는 중...</div>
    }

    const onClickBtn = (weapon) => {
        setShowModal(true);
        setModalData(weapon);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const filterData = data.filter((weapon) => weapon.name.includes(searchInput.trim()))

    return (
        <div>
            <div className="search_container">
                <input
                    className='searchbar search_border'
                    type='text'
                    placeholder='찾는 무기의 이름을 입력하세요!'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    />
            </div>
            {filterData.map((weapon, index) => {
                return(
                    <div className="border_line ta_center weapon_container" key={weapon.color + index}>
                        <br />
                        <img src={`/${weapon.imgURL}`} alt="..." loading="lazy" width={100} height={100} />
                        <span className="wplib_span" style={{ color: weapon.color }}>{weapon.name}</span>
                        <button className="MobModalBtn" onClick={() => onClickBtn(weapon)}>확인하기</button>
                    </div>)
            })}
            {showModal &&
                <div className="BackModalBox" onClick={closeModal}>
                    <div className="ModalBoxDetail ta_center f-b" onClick={(e) => { e.stopPropagation() }}>
                        <video src={`/${modalData.videoURL}`} muted controls />
                        <br />
                        <span style={{ color: modalData.color }}>{modalData.name}</span>
                        <br />
                        <span style={{ color: '#FF9D0F' }}>우클릭</span> : {modalData.information.rightClick} <br />
                        <span style={{ color: '#FF9D0F' }}>좌클릭</span> : {modalData.information.leftClick} <br />
                        <span style={{ color: 'purple' }}>초월 능력</span> : {modalData.information.whenTrancendence}
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
                                <td>{modalData.RedStone}</td>
                                <td>{modalData.YellowStone}</td>
                                <td>{modalData.GreenStone}</td>
                                <td>{modalData.BlueStone}</td>
                                <td>{modalData.PurpleStone}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                }
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

                video {
                    width: 500px;
                    height: 300px;
                }

                .weapon_container {
                    font-weight: bold;
                    font-size: 25px;
                }
            `}</style>
        </div>
    );
}