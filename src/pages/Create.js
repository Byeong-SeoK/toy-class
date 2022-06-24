import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { storageService, dbService } from "../fbase";
import { useNavigate } from "react-router-dom";
import "./Create.css";

const Create = (props) => {
  const [post, setPost] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [character, setCharacter] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== null) {
      const attachmentRef = storageService
        .ref()
        .child(`${props.userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const postObj = {
      text: post,
      character: character,
      createdAt: Date.now(),
      creatorId: props.userObj.uid,
      attachmentUrl,
    };
    await dbService.collection("posts").add(postObj);
    setPost("");
    setAttachment(null);
    navigate("/");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setPost(value);
  };
  const onCheck = (event) => {
    const {
      target: { value },
    } = event;
    setCharacter(value);
  };
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onClearAttachment = () => setAttachment(null);
  return (
    /*
    <>
      <form onSubmit={onSubmit}>
        <input
          value={post}
          onChange={onChange}
          type="text"
          placeholder="토이 이름"
          maxLength={120}
        />
        <div>
          <input
            type="radio"
            id="active"
            name="character"
            value="active"
            onChange={onCheck}
          />
          <label for="active">활발하다</label>
        </div>
        <div>
          <input
            type="radio"
            id="friendly"
            name="character"
            value="friendly"
            onChange={onCheck}
          />
          <label for="friendly">다정하다</label>
        </div>
        <div>
          <input
            type="radio"
            id="calm"
            name="character"
            value="calm"
            onChange={onCheck}
          />
          <label for="calm">차분하다</label>
        </div>
        <div>
          <input
            type="radio"
            id="cool"
            name="character"
            value="cool"
            onChange={onCheck}
          />
          <label for="cool">시원하다</label>
        </div>
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Post" />
        {attachment && (
          <div>
            <img src={attachment} alt="preview" width="50px" height="50px" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}
      </form>
    </>
    */
    <div className="v145_156">
      <div className="v145_159"></div>
      <div class="v145_171"></div>
      <span class="v145_172">확인</span>
      <span class="v145_173">토이 네임</span>
      <div class="v145_174"></div>
      <span class="v145_175">용용이</span>
      <div class="v145_188"></div>
      <span class="v145_189">업로드</span>
      <span class="v145_190">토이 사진</span>
      <div class="v145_191"></div>
      <span class="v145_192">upload image</span>
      <span class="v145_235">토이 설정하기</span>
      <div class="v145_226"></div>
      <span class="v145_227">활발하다</span>
      <div class="v145_228"></div>
      <span class="v145_229">다정하다</span>
      <div class="v145_230"></div>
      <span class="v145_231">차분하다</span>
      <div class="v145_232"></div>
      <span class="v145_233">시원하다</span>
      <span class="v145_234">
        용용이를 가장 잘 나타내는 성격 키워드를 골라주세요
      </span>
      <span class="v145_225">토이 성격 설정하기</span>
      <div class="v145_207"></div>
      <span class="v145_208">완성</span>
    </div>
  );
};

export default Create;
