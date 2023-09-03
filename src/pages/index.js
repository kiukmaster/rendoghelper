export default function Home() {

    const rdCopy = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
          alert('주소가 복사 되었습니다.');
        } catch (e) {
          alert('오류로 복사를 실패했습니다...');
        }
    };
      
    return (
        <>
            <div className="maincon">
                <img src="mainimg/Rendog.png" alt="error" loading="lazy" />
                <span className="mainword">Minecraft 1.12.2 ~ 최신버전</span>
                <br />
                <span className="mainword"><button onClick={() => rdCopy("Rendog.kr")} className="copyBtn">Rendog.kr</button></span>
                <span className="copy_t">클릭시 복사됩니다.</span>
            </div>
            <section className="sec">
                제작자 : 키욱(Kiu_k)
            </section>
            <style jsx>{`
            .maincon {
                margin: 3rem;
                text-align: center;
            }
            .mainword {
                display: block;
                font-size: 26px;
                font-weight: bold;
            }
            .sec {
                text-align: center;
                font-weight: bold;
                font-size: 20px;
            }
            .copy_t {
                margin-top: 0;
                font-size: 14px;
                font-weight: bold;
                opacity: 0.5;
            }
            .copyBtn {
                font-weight: bold;
                border: none;
                margin-bottom: 0;
                font-size: 24px;
            }
            .copyBtn:hover {
                transform: none;
            }
            `}</style>
        </>
    );
}