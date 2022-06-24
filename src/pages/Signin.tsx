import React from "react";
import { useState } from "react";
import { authService, firebaseInstance } from "../fbase";
import "./Siginin.module.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChange = (event: any) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const [newAccount, setNewAccount] = useState(true);
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="v105_8">
      <div className="v105_66"></div>
      <div className="v105_35"></div>
      <div className="v105_36"></div>
      <div className="v105_37"></div>
      <span className="v105_38">완료</span>
      <span className="v105_39">이메일</span>
      <span className="v105_40">패스워드</span>
      <span className="v105_41">회원가입</span>
      <div className="v105_42"></div>
      <span className="v105_43">이메일로 로그인</span>
      <span className="v105_44">이미 계정이 있으신가요?</span>
      <div className="v105_45"></div>
      <span className="v105_46">구글 계정으로 가입하기</span>
      <div className="v105_48"></div>
      <div className="v105_47"></div>
    </div>
  );
};
export default Signin;
