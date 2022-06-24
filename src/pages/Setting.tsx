import React, { useState } from "react";
import { authService } from "../fbase";
import { useNavigate } from "react-router-dom";
import I from "./Index.module.css";
import S from "./Setting.module.css";

const Setting = (props: { userObj: any; refreshUser: any }) => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    navigate("/");
  };
  const [newDisplayName, setNewDisplayName] = useState(
    props.userObj.displayName
  );
  const onChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (props.userObj.displayName !== newDisplayName) {
      await props.userObj.updateProfile({
        displayName: newDisplayName,
      });
      props.refreshUser();
    }
  };
  return (
    /*
    <>
      <span>Setting</span>
      <div>현재 닉네임: {props.userObj.displayName}</div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayName}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
    */
    <div className={I.v106_69}>
      <span className={I.v106_70}>설정</span>
      <div className={I.v106_103}></div>
      <div className={I.v106_104}></div>
      <div className={I.v91_113}></div>
      <div className={S.v91_113}></div>
      <span className={S.v110_215} onClick={onLogOutClick}>
        로그아웃
      </span>
      <div className={S.v113_263}></div>
      <span className={S.v113_264} onClick={onSubmit}>
        변경
      </span>
      <span className={S.v113_265}>닉네임</span>
      <div className={S.v113_262}></div>
      <span className={S.v113_274}>{props.userObj.displayName}</span>
      <span className={S.v113_268}>소속 학교 학급</span>
      <div className={S.v113_269}></div>
      <span className={S.v113_270}>떡잎 초등학교 2학년 1반</span>
      <span className={S.v113_271}>이름</span>
      <div className={S.v113_272}></div>
      <span className={S.v113_273}>권지용</span>
    </div>
  );
};

export default Setting;
