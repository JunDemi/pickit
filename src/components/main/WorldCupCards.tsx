import '../../assets/styles/worldcupcards.scss';
import listData from '../../worldCupList.json';
import React from 'react';

/*
interface list {
  id: number;
  name: string;
  tag: string;
  tag2: string;
  tag3: string;
  title: string;
  info: string;
}
*/

export interface worldcup {
  id: number;
  title: string;
  keyword: string;
  img: string;
}

function WorldCupCards(): JSX.Element {
  return (
    <div className="WorldCupCards-container">
      <div className="WorldCupCards-header">
        <div className="WorldCup-filter">
          <button type="button" className="popular-filter active">
            인기순
          </button>
          <button type="button" className="best-filter">
            최신순
          </button>
        </div>

        <div className="WorldCup-create">
          <button type="button" className="create-button">
            월드컵 생성
          </button>
        </div>
      </div>

      <div className="WorldCupCards-section">
        {listData.WorldCupList.map((item) => {
          const filterSinger: worldcup[] = listData.WorldCup.filter(
            (Worldcup) => Worldcup.title === item.title,
          );

          return (
            <div className="WorldCupCards" key={item.id}>
              <div className="WorldCup-Imgbox">
                <div className="Random-ImgBox">
                  <img src={filterSinger[0]?.img} alt="" />
                </div>
                <div className="Random-ImgBox">
                  <img src={filterSinger[1]?.img} alt="" />
                </div>
              </div>

              <div className="WorldCup-infoBox">
                <div className="WorldCup-tag">
                  <span>#{item.tag}</span>
                  <span>#{item.tag2}</span>
                  <span>#{item.tag3}</span>
                </div>

                <h1 className="WorldCup-title">{item.title}</h1>
                <p className="WorldCup-creator">{item.name}</p>
                <h1 className="WorldCup-text">{item.info}</h1>
                <div className="select-button">
                  <button type="button" className="start-Worldcup">
                    시작하기
                  </button>

                  <button type="button" className="Worldcup-Rank">
                    랭킹보기
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorldCupCards;
