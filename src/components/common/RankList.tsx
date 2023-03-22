import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { commonService } from 'service';
import 'assets/styles/RankList.scss';

interface RankListData {
  no: Number;
  title: String;
}

interface RankListProps {
  title: String;
  list: RankListData[] | undefined;
}

const RankList = (props: RankListProps) => {
  const { title, list } = props;
  const [listIndex, setListIndex] = useState<Number>(0);

  const getRankList = () => {
    let i = +listIndex * 10;
    const result = [];

    for (; i < (+listIndex + 1) * 10; i++) {
      result.push(list?.[i]);
    }

    return result;
  };

  const onMore = () => {
    const indexMore = +listIndex + 1;

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
        {getRankList()?.map(
          (
            item: RankListData | undefined,
            index: Number,
          ): React.ReactElement => {
            return (
              <div key={`rank-${index}`} className="rank-item">
                <span className="rank-no">{item?.no.toString()}</span>
                <span className="rank-title">{item?.title}</span>
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

  return <RankList title="인기 월드컵 순위" list={data} />;
};

export { PopularRank, RealtimeRank };
