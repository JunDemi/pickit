import React, { useState, useMemo } from 'react';
import { useQuery } from 'react-query';
import { commonService } from 'service';
import { useInterval } from 'hooks';
import 'assets/styles/RankList.scss';

interface RankListData {
  no: Number;
  title: String;
}

interface RankListProps {
  title: String;
  list: RankListData[] | undefined;
}

const getRankList = (
  list: RankListData[] | undefined,
  index: number,
  count: number,
) => {
  let i = index * count;
  const result = [];

  for (; i < (index + 1) * count; i++) {
    result.push(list?.[i]);
  }

  return result;
};

const RankList = (props: RankListProps) => {
  return (
    <>
      <PcRankList {...props} />
      <MobileRankList {...props} />
    </>
  );
};

const PcRankList = (props: RankListProps) => {
  const { title, list } = props;
  const [listIndex, setListIndex] = useState<number>(0);

  const onMore = () => {
    const indexMore = listIndex + 1;

    if (indexMore > 4) {
      setListIndex(0);
    } else {
      setListIndex(indexMore);
    }
  };

  const rankMoreText = () => {
    if (listIndex > 3) {
      return '1위~10위';
    } else {
      return `${(+listIndex + 1) * 10 + 1}위~${(+listIndex + 2) * 10 + 1}위`;
    }
  };

  return (
    <div className="rank-wrapper">
      <div className="rank-header">
        <h1 className="rank-title">{title}</h1>
        <button type="button" className="rank-more" onClick={onMore}>
          {rankMoreText()}
        </button>
      </div>
      <div className="rank-content">
        {getRankList(list, listIndex, 10)?.map(
          (
            item: RankListData | undefined,
            index: Number,
          ): React.ReactElement => {
            return (
              <div key={`rank-${index}`} className="rank-item">
                <span className="rank-no">{item?.no.toString()}</span>
                <span className="rank-label">{item?.title}</span>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

const MobileRankList = (props: RankListProps) => {
  const { title, list } = props;
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [listIndex, setListIndex] = useState<number>(0);
  const [prevviewIndex, setPreviewIndex] = useState<number>(0);

  useInterval(() => {
    const nextIndex = prevviewIndex + 1;
    setPreviewIndex(nextIndex > 49 ? 0 : nextIndex);
  }, 5000);

  const onPrev = () => {
    const prevIndex = listIndex - 1;
    setListIndex(prevIndex < 0 ? 0 : prevIndex);
  };

  const onNext = () => {
    const nextIndex = listIndex + 1;
    setListIndex(nextIndex > 9 ? 9 : nextIndex);
  };

  const rankList = useMemo(() => {
    return getRankList(list, listIndex, 5);
  }, [listIndex]);

  return (
    <div className="mobile-rank-wrapper">
      <div className="rank-preview">
        <span className="rank-title">{title}</span>
        <div className="rank-item">
          <span className="rank-no">
            {list?.[prevviewIndex]?.no.toString()}
          </span>
          <span className="rank-label">{list?.[prevviewIndex]?.title}</span>
          <button
            type="button"
            className={`rank-expand ${isExpand ? 'active' : ''}`}
            onClick={() => setIsExpand(!isExpand)}
          />
        </div>
      </div>
      <div className={`rank-content ${isExpand ? '' : 'hide'}`}>
        <div className="rank-toolbar">
          <div className="rank-paging">
            <button type="button" className="prev-btn" onClick={onPrev} />
            <button type="button" className="next-btn" onClick={onNext} />
          </div>
          <button
            type="button"
            className="close-btn"
            onClick={() => setIsExpand(false)}
          >
            닫기
          </button>
        </div>
        {rankList.map(
          (
            item: RankListData | undefined,
            index: Number,
          ): React.ReactElement => {
            return (
              <div key={`rank-${index}`} className="rank-item">
                <span className="rank-no">{item?.no.toString()}</span>
                <span className="rank-label">{item?.title}</span>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

const PopularRank = () => {
  const { data } = useQuery('popularRank', commonService.getRankList, {
    suspense: true,
    select: (r): RankListData[] => {
      // 데이터 수정 필요
      return r?.map((item: any, index: number) => {
        return {
          no: index + 1,
          title: '아이돌 월드컵',
        };
      });
    },
    refetchOnWindowFocus: false,
  });

  return <RankList title="인기 월드컵 순위" list={data} />;
};

const RealtimeRank = () => {
  const { data } = useQuery('realtimeRank', commonService.getRankList, {
    suspense: true,
    select: (r): RankListData[] => {
      // 데이터 수정 필요
      return r?.map(() => {
        return {
          no: 1,
          title: '아이유',
        };
      });
    },
    refetchOnWindowFocus: false,
  });

  return <RankList title="실시간 검색 키워드" list={data} />;
};

export { PopularRank, RealtimeRank };
