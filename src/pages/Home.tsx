import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { dbService } from "../fbase";
import Toy from "../components/Toy";
import H from "./Home.module.css";

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    dbService
      .collection("posts")
      .where("creatorId", "==", `${props.userObj.uid}`)
      .orderBy("createdAt", "asc")
      .onSnapshot((snapshot) => {
        const postArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postArray);
      });
  }, []);
  return (
    /*
    <>
      <div>Home</div>
      <div>
        {posts[0] ? (
          <Toy
            key={posts[0].id}
            postObj={posts[0]}
            isOwner={posts[0].creatorId === props.userObj.uid}
          />
        ) : (
          <Link to="/create">토이 만들기</Link>
        )}
      </div>
      <ul>
        <li>
          <Link to="/setting">Setting</Link>
        </li>
        <li>
          <Link to="/todo">미션</Link>
        </li>
        <li>
          <Link to="/total">전체</Link>
        </li>
      </ul>
    </>
    */

    <div className={H.v156_316}>
      <div className={H.v156_319}></div>
      <div className={H.v156_337}></div>
      <div className={H.name}></div>
      <div className={H.triangle}></div>
      <span className={H.v156_339}>오늘도 힘찬 하루!</span>
      <div className={H.v156_342}>
        <Link to="/total">전체</Link>
      </div>
      <div className={H.v156_348}>
        <Link to="/">홈페이지</Link>
      </div>
      <div className={H.v156_351}>
        <Link to="/todo">미션</Link>
      </div>
      <div className={H.v158_465}>
        {posts[0] ? (
          <Toy
            key={posts[0].id}
            postObj={posts[0]}
            isOwner={posts[0].creatorId === props.userObj.uid}
          />
        ) : (
          <Link to="/create">토이 만들기</Link>
        )}
      </div>
      <div className={H.v158_466}>
        <Link to="/Setting">설정</Link>
      </div>
      <span className={H.v158_467}>용용이</span>
      <div className={H.v158_394}></div>
    </div>
  );
};
export default Home;
