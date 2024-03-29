import '../../assets/styles/WorldcupGame.scss';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { matching, commentList } from 'GameMatching_test';

function WorldCupGame() {
  //버튼 클릭 이벤트
  const [match, set_match] = useState<string | null>(null);
  const [comment, set_comment] = useState<boolean>(false);
  //스크롤 관련 훅
  const scrollComment = useRef<object | null | any>(null);
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
  //shuffle = 임시 게임 매칭 API를 랜덤 배치
  const shuffle = matching.sort(() => Math.random() - 0.5);
  //cardphoto에 shuffle을 가져온 후 맨 앞 2개만 저장
  const [cardsphoto] = useState([...shuffle].slice(0, 2));

  return (
    <>
      <AnimatePresence>
        <div className="game-container">
          <h1 className="game-title">당신의 최애 여가수는?</h1>
          <p className="game-jump">92명 참여완료</p>
          <div className="game-match">
            {cardsphoto.map((item) => (
              <div className="item" key={item.id}>
                <motion.div
                  className="img-container"
                  whileHover={{ y: -15 }}
                  layoutId={item.id}
                  style={{ backgroundImage: `url(${item.photo})` }}
                />
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
            />
            <div className="selected-item">
              <motion.div
                className="matched_image"
                layoutId={match}
                style={{
                  backgroundImage: `url(${
                    match === cardsphoto[0].id
                      ? cardsphoto[0].photo
                      : cardsphoto[1].photo
                  })`,
                }}
              />
              <h1>
                {match === cardsphoto[0].id
                  ? cardsphoto[0].name
                  : cardsphoto[1].name}{' '}
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
            <div
              className="my_pick_photo"
              style={{
                backgroundImage: `url(${
                  match === cardsphoto[0].id
                    ? cardsphoto[0].photo
                    : cardsphoto[1].photo
                })`,
              }}
            />
          </div>
          <form>
            <div className="add-comment">
              <textarea></textarea>
              <button>글쓰기</button>
            </div>
          </form>
          {commentList.map(
            (item) =>
              cardsphoto.findIndex(
                (comment_photo) => comment_photo.id === item.pick,
              ) !== -1 && (
                <div key={item.comment_id} className="comments">
                  <div className="comments-profiles">
                    <div>
                      <div className="lineup">
                        <img src="https://img.freepik.com/free-photo/aesthetic-dark-wallpaper-background-neon-light_53876-128291.jpg" />
                        <div>
                          <h1>{item.name}</h1>
                          <h1>{item.date}</h1>
                        </div>
                        <div
                          className="comment_pick_photo"
                          style={{
                            backgroundImage: `url(${
                              matching[
                                matching.findIndex(
                                  (matchphoto) => matchphoto.id === item.pick,
                                )
                              ].photo
                            })`,
                          }}
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
              ),
          )}
        </div>
      ) : null}
    </>
  );
}
export default WorldCupGame;
