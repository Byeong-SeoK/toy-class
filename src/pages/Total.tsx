import React, { useState, useEffect } from "react";
import { dbService } from "../fbase";
import Toy from "../components/Toy";
import T from "./Total.module.css";

const Total = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    dbService
      .collection("posts")
      .orderBy("createdAt", "desc")
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
    <div>
      <div>전체 토이</div>
      {posts.map((post) => (
        <Toy
          key={post.id}
          postObj={post}
          isOwner={post.creatorId === props.userObj.uid}
        />
      ))}
    </div>
    */
    <div className={T.v7_191}>
      <span className={T.v7_207}>2학년 1 반 친구들 </span>
      <div className={T.v96_30}>
        <span className={T.v7_206}>마동석</span>
        <div className={T.v7_196}></div>
        <span className={T.v7_211}>7</span>
      </div>
      <div className={T.v161_474}></div>
      <div className={T.v106_108}>
        <div className={T.v166_2}></div>
        <span className={T.v106_110}>강해상</span>
        <div className={T.v106_112}></div>
        <span className={T.v106_113}>7</span>
      </div>
      <div className={T.v106_105}></div>
      <div className={T.v106_106}></div>
      <div className={T.v106_116}>
        <div className={T.v168_5}></div>
        <span className={T.v106_118}>손석구</span>
        <div className={T.v106_120}></div>
        <span className={T.v106_121}>7</span>
      </div>
      <div className={T.v106_124}>
        <div className={T.v167_3}></div>
        <span className={T.v106_126}>박지환</span>
        <div className={T.v106_128}></div>
        <span className={T.v106_129}>7</span>
      </div>
      <div className={T.v106_132}>
        <span className={T.v106_134}>마동석</span>
        <div className={T.v106_136}></div>
        <span className={T.v106_137}>7</span>
      </div>
      <div className={T.v171_6}></div>
      <div className={T.v106_140}>
        <span className={T.v106_142}>마동석</span>
        <div className={T.v106_144}></div>
        <span className={T.v106_145}>7</span>
      </div>
      <div className={T.v171_7}></div>
    </div>
  );
};

export default Total;
