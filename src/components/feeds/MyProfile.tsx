import React, { useEffect, useState } from 'react';
import '../../assets/MyProfile.scss';

interface ProfileIF {
  nickname: string;
  introduction: string;
}

interface StatusIF {
  follow: number;
  like: number;
  article: number;
}

interface FollowerIF {
  image: string;
  nickname: string;
}

interface CommentIF {
  title: string;
  content: string;
  created: string;
}

type InKeyType = { [key: string]: number };

interface WorldcupCardIF {
  leftImage: string;
  rightImage: string;
  title: string;
  total: number;
  created: string;
}

interface GalleryElementParamIF {
  type: string;
  data: any;
  action: React.MouseEventHandler<HTMLButtonElement>;
}

interface GalleryBoxIF extends GalleryElementParamIF {
  title: string;
  height: number;
}

// 갤러리 박스: 재사용 컴포넌트
const ProfileGalleryBox: Function = ({
  title,
  height,
  data,
  type,
  action,
}: GalleryBoxIF): JSX.Element => {
  const RenderElement: Function = ({ type, data }: GalleryElementParamIF) => {
    switch (type) {
      case 'tag':
        return data.map((tag: string[], index: number) => (
          <span
            key={index}
            className="my-profile-gallery-tag"
          >{`#${tag}`}</span>
        ));
      case 'worldcup':
        return data.map((worldcup: WorldcupCardIF, index: number) => (
          <div key={index} className="my-profile-gallery-worldcup-card">
            <div className="my-profile-gallery-worldcup-image-wrapper">
              <img
                className="my-profile-gallery-worldcup-image"
                src={worldcup.leftImage}
                alt=""
              />
              <img
                className="my-profile-gallery-worldcup-image"
                src={worldcup.rightImage}
                alt=""
              />
            </div>
            <h3 className="my-profile-gallery-worldcup-title">
              {worldcup.title}
            </h3>
            <div className="my-profile-gallery-worldcup-status">
              <span className="my-profile-gallery-status-index">{`[${worldcup.total}명 참여]`}</span>
              <span className="my-profile-gallssery-status-date">
                {worldcup.created}
              </span>
            </div>
          </div>
        ));
      case 'comment':
        return data.map((comment: CommentIF, index: number) => (
          <div key={index} className="my-profile-gallery-comment-wrap">
            <div className="my-profile-gallery-comment-info">
              <h4 className="my-profile-gallery-comment-title">
                {comment.title}
              </h4>
            </div>
            <div className="my-profile-gallery-comment-info">
              <span className="my-profile-gallery-comment-content">
                {comment.content}
              </span>
              <span className="my-profile-gallery-comment-date">
                {comment.created}
              </span>
            </div>
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div
      className="my-profile-gallery-box"
      style={{ height: `${height ? `${height}px` : `100%`}` }}
    >
      <h1 className="my-profile-gallery-title">{title}</h1>
      <div className={`my-profile-gallery-${type}-box`}>
        {RenderElement({ type, data })}
      </div>
      <div className="my-profile-box-bottom">
        <button className="my-profile-box-bottom-button" onClick={action}>
          더보기
        </button>
      </div>
    </div>
  );
};

// 상단 프로필: [이미지, 닉네임, 소개]
const ProfileStatusBox: Function = ({
  profile,
  status,
}: {
  profile: ProfileIF;
  status: StatusIF;
}): JSX.Element => {
  const { nickname, introduction }: ProfileIF = profile;

  const ProfileStatusNumber: Function = ({
    status,
  }: {
    status: InKeyType;
  }): JSX.Element[] => {
    return Object.keys(status).map(
      (key: string, index: number): JSX.Element => {
        const [keyword, ...rest] = key;
        return (
          <div key={index} className="my-profile-info-text-box">
            <h2 className="my-profile-status-info">{status[key]}</h2>
            <span className="my-profile-status-sub">
              {keyword.toUpperCase()}
              {rest}
            </span>
          </div>
        );
      },
    );
  };

  return (
    <div className="my-profile-status-box">
      <div className="my-profile-right-side">
        <h1 className="my-profile-status-nickname">{nickname}</h1>
        <span className="my-profile-status-introduction">{introduction}</span>
        <div className="my-profile-image-wrapper">
          <img
            className="my-profile-image"
            src={require('../../assets/images/yuna.jpg')}
            alt=""
          />
        </div>
        <div className="my-profile-status-info-box">
          <ProfileStatusNumber status={status} />
        </div>
        <div className="my-profile-box-bottom">
          <button className="my-profile-box-bottom-button">공유하기</button>
        </div>
      </div>
    </div>
  );
};

// 메인 컨테이너
const MyProfile: Function = (): JSX.Element => {
  const [profile, setProfile] = useState<ProfileIF>({
    nickname: '',
    introduction: '',
  });

  const [status, setStatus] = useState<StatusIF>({
    follow: 0,
    like: 0,
    article: 0,
  });

  const [follower, setFollower] = useState<FollowerIF[]>([
    { image: '', nickname: '' },
  ]);

  const [worldcup, setWorldcup] = useState<WorldcupCardIF[]>([]);

  const [comment, setComment] = useState<CommentIF[]>([]);

  // eslint-disable-next-line
  const [tag, setTag] = useState<string[]>([]);

  const onMore = () => {
    // 더미 데이터 x 3 > 복제
    setWorldcup(worldcup.concat(worldcup.slice(0, 3)));
  };

  const onLoad = /* async */ () => {
    const profileD: ProfileIF = {
      nickname: 'Lim Min Hyeok',
      introduction: '자기소개를 작성해주세요.',
    };

    const statusD: StatusIF = { follow: 12, like: 11, article: 8 };

    const worldcupD: WorldcupCardIF[] = [
      {
        leftImage: require('../../assets/images/yuna2.jpg'),
        rightImage: require('../../assets/images/yujeong.jpg'),
        title: '여가수 외모 순위',
        total: 92,
        created: '2023-03-07',
      },
      {
        leftImage: require('../../assets/images/yuna2.jpg'),
        rightImage: require('../../assets/images/yujeong.jpg'),
        title: '여가수 외모 순위',
        total: 92,
        created: '2023-03-07',
      },
      {
        leftImage: require('../../assets/images/yuna2.jpg'),
        rightImage: require('../../assets/images/yujeong.jpg'),
        title: '여가수 외모 순위',
        total: 92,
        created: '2023-03-07',
      },
    ];

    const followerD: FollowerIF[] = [
      { image: 'image', nickname: 'So jiwoo' },
      { image: 'image', nickname: 'So jiwoo' },
      { image: 'image', nickname: 'So jiwoo' },
      { image: 'image', nickname: 'So jiwoo' },
      { image: 'image', nickname: 'So jiwoo' },
    ];

    const CommentD: CommentIF[] = [
      {
        title: '태연 이쁘네',
        content: '[월드컵] 솔로 여가수 외모 순위',
        created: '2023-03-17',
      },
      {
        title: '아이유 이쁘네 ㅋ',
        content: '[월드컵] 솔로 여가수 외모 순위',
        created: '2023-03-17',
      },
    ];

    const tagD: string[] = [
      '아이돌',
      '브레이브걸스',
      '게임',
      '강아지',
      '고양이',
      '의류',
    ];

    setProfile(profileD);
    setStatus(statusD);
    setWorldcup(worldcupD);
    setComment(CommentD);
    setFollower(followerD);
    setTag(tagD);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="my-profile-container">
      <div className="my-profile-wrapper">
        <div className="my-profile-status-wrapper">
          <ProfileStatusBox profile={profile} status={status} />
          <ProfileGalleryBox title="관심사" type="tag" data={tag} />
          <ProfileGalleryBox
            title="나의 개최 월드컵"
            type="worldcup"
            data={worldcup}
            action={onMore}
          />
          <ProfileGalleryBox
            title="참여 월드컵 기록"
            type="rank"
            height={481}
          />
          <ProfileGalleryBox title="댓글 기록" type="comment" data={comment} />
        </div>
        <div className="my-profile-alert-wrapper">
          <div className="my-profile-rank-box">
            <h1 className="my-profile-rank-title">
              지금 새로운 랭킹을 만들어보세요.
            </h1>
            <button className="my-profile-rank-button">만들러 가기</button>
          </div>
          <div className="my-profile-follower-box">
            <h1 className="my-profile-follower-title">팔로잉 / 팔로워</h1>
            {follower.map((item: FollowerIF, index: number) => (
              <div key={index} className="my-profile-follower-status-box">
                {/* 이미지 처리 필요 */}
                <div className="my-profile-follower-status-profile" />
                <span className="my-profile-follower-status-nickname">
                  {item.nickname}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
