import { useEffect, useState } from "react";

export default function MobCollection() {
    const [data, setData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        fetch('/mob.json')
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData));
    }, []);

    if (!data) {
        return <div className="ta_center" style={{fontSize: '30px'}}>데이터 불러오는 중...</div>
    }

    const openModal = (mob) => {
        setModalData(mob);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const filterData = data.filter((mob) => mob.name.includes(searchInput.trim()))

    return (
        <div>
            <div className="search_container">
                <input
                    className='searchbar'
                    type='text'
                    placeholder='몬스터의 이름을 입력하세요.'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    />
            </div>
            <div className="mob_lib_container">
                {filterData.map((mob) => {
                    return(
                    <div className="mob_lib_sub_container" key={mob.id}>
                        <img src={`/mob/${mob.id}.png`} alt="..." width={300} height={200} loading="lazy" />
                        <button className="MobModalBtn" onClick={() => openModal(mob)}>{mob.name}</button>
                    </div>)
                })}
            {showModal &&
                <div className="BackModalBox" onClick={closeModal}>
                    <div className="ModalBoxDetail ta_center" onClick={(e) => e.stopPropagation()}>
                        <img src={`/mob/${modalData.id}.png`} width={300} height={200} alt="..." loading="lazy" /> <br />
                            이름 : {modalData.name} <br />
                            <span style={{ color: 'red' }}>HP</span> : {modalData.hp} <br />
                            <span style={{ color: 'crimson' }}>AttackDamage</span> : {modalData.ad} <br />
                            <span style={{ color: 'green' }}>전리품</span> : {modalData.loot} <br />
                            <span style={{ color: 'aqua' }}>레어-전리품</span> : {modalData.rareloot} <br />
                            리젠시간 : {modalData.regen} <br />
                            <span style={{ color: 'purple' }}>{modalData.skill}</span> <br />
                            <span style={{ color: 'pink' }}>{modalData.skill2}</span> <br />
                            <span style={{ color: '#4600FF' }}>{modalData.skill3}</span>
                    </div>
                </div>}
            </div>
        </div>
    );
}