import '../../assets/styles/WorldcupGame.scss';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useRef, useState } from 'react';

interface IMatching {
  id: string;
  name: string;
  photo: string;
}
//임시 월드컵 데이터
export const matching: IMatching[] = [
  {
    id: 'IU',
    name: '아이유',
    photo:
      'https://file.mk.co.kr/meet/neds/2023/02/image_readtop_2023_117777_16759917015347929.jpg',
  },
  {
    id: 'Taeyeon',
    name: '태연',
    photo:
      'http://image.genie.co.kr/Y/IMAGE/IMG_ARTIST/056/069/675/56069675_1661221670625_28_600x600.JPG',
  },
];
//임시 댓글 데이터
interface ICommentList {
  comment_id: string;
  id: string;
  name: string;
  pick: string;
  comment: string;
  date: string;
  like: number;
  hate: number;
}

const commentList: ICommentList[] = [
  {
    comment_id: '1',
    id: 'kimtaemin',
    name: '김태민',
    pick: 'IU',
    comment: '아이유는 따라잡을 수 없다',
    date: '2020-11-14',
    like: 4,
    hate: 2,
  },
  {
    comment_id: '2',
    id: 'kwontaejoon',
    name: '권태준',
    pick: 'Taeyeon',
    comment: '인간 나비스 김태연 ~',
    date: '2020-11-14',
    like: 2,
    hate: 1,
  },
  {
    comment_id: '3',
    id: 'sojiwoo',
    name: '소지우',
    pick: 'IU',
    comment: '아이유ㅠㅠㅠㅠㅠㅠㅠ',
    date: '2020-11-14',
    like: 5,
    hate: 0,
  },
];
function WorldCupGame(): JSX.Element {
  //버튼 클릭 이벤트
  const [match, set_match] = useState<string | null>(null);
  const [comment, set_comment] = useState<boolean>(false);
  const scrollComment = useRef<HTMLDivElement>(null);
  //선택하기 버튼 클릭 시
  const choicebutton = (id: string) => {
    //이미지 매칭
    set_match(id);
    //댓글 컴포넌트 등장
    set_comment((prev) => !prev);
  };
  //댓글 버튼 클릭 시 댓글 컴포넌트로 스크롤 이동
  const onScrollComment = () => {
    scrollComment.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <AnimatePresence>
        <div className="game-container">
          <h1 className="game-title">당신의 최애 솔로 여가수는?</h1>
          <p className="game-jump">92명 참여완료</p>
          <div className="game-match">
            {matching.map((item) => (
              <div className="item" key={item.id}>
                <div className="img-container">
                  <motion.img
                    src={item.photo}
                    whileHover={{ y: -15 }}
                    layoutId={item.id}
                  />
                </div>
                <h2>{item.name}</h2>
                <button onClick={() => choicebutton(item.id)}>선택하기</button>
              </div>
            ))}
          </div>
        </div>
        {match ? (
          <div className="item-select">
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            <div className="selected-item">
              <motion.img
                layoutId={match}
                src={
                  match === matching[0].id
                    ? matching[0].photo
                    : matching[1].photo
                }
              />
              <h1>
                {match === matching[0].id ? matching[0].name : matching[1].name}{' '}
                16강 진출
              </h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button onClick={onScrollComment}>댓글</button>
                <button>다음</button>
              </motion.div>
            </div>
          </div>
        ) : null}
      </AnimatePresence>
      {comment ? (
        <div className="show-comment" ref={scrollComment}>
          <div className="comment-profile">
            <img src={`https://tago.kr/images/sub/TG300-D02_img01.png`} />
            <h3>임민혁</h3>
            <img
              src={
                match === matching[0].id ? matching[0].photo : matching[1].photo
              }
            />
          </div>
          <form>
            <div className="add-comment">
              <textarea></textarea>
              <button>글쓰기</button>
            </div>
          </form>
          {commentList.map((item) => (
            <div key={item.comment_id} className="comments">
              <div className="comments-profiles">
                <div>
                  <div className="lineup">
                    <img src="https://img.freepik.com/free-photo/aesthetic-dark-wallpaper-background-neon-light_53876-128291.jpg" />
                    <div>
                      <h1>{item.name}</h1>
                      <h1>{item.date}</h1>
                    </div>
                    <img
                      src={
                        item.pick === matching[0].id
                          ? matching[0].photo
                          : matching[1].photo
                      }
                    />
                  </div>
                  <h1 className="comment-text">{item.comment}</h1>
                </div>
                <div className="like-hate">
                  <button>좋아요 {item.like}</button>
                  <button>싫어요 {item.hate}</button>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default WorldCupGame;
