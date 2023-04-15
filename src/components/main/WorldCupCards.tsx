import '../../assets/styles/worldcupcards.scss';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';

export interface list {
  id: number;
  name: string;
  tag: string;
  tag2: string;
  tag3: string;
  title: string;
  info: string;
}

export interface worldcup {
  id: number;
  title: string;
  keyword: string;
  img: string;
}

function WorldCupCards(): JSX.Element {
  const [WorldCupData, setWorldCupData] = useState<worldcup[]>([]);
  const [loadData, setLoadData] = useState<list[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const fetchRef = useRef(null);
  const page = useRef<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getWorldCup() {
      try {
        const response = await axios.get('http://localhost:3080/WorldCup');

        setWorldCupData(response.data);
      } catch (e: any) {
        console.log(e);
      }
    }
    getWorldCup();
  }, []);

  const fetch = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3080/WorldCupList?_limit=4&_page=${page.current}`,
      );
      setLoadData((prev) => [...prev, ...data]);
      setHasNextPage(data.length === 4);
      if (data.length) {
        page.current += 1;
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (!fetchRef.current || !hasNextPage) return;

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoading(true);
        setTimeout(() => {
          fetch();
        }, 1000);
      }
    });
    io.observe(fetchRef.current);

    return () => {
      io.disconnect();
      setLoading(false);
    };
  }, [fetch, hasNextPage]);
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
        {loadData.map((item) => {
          const filterSinger: worldcup[] = WorldCupData.filter(
            (listData) => listData.title === item.title,
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
      {loading ? (
        <div className="Loading">
          <span></span>
        </div>
      ) : null}
      <div ref={fetchRef} />
    </div>
  );
}

export default WorldCupCards;
