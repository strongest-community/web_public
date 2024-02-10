"use client";
import React, { useState } from "react";

export default function New() {
  const [description, setDiscription] = useState("");
  const [budget, setBudget] = useState("");
  const [situation, setSituation] = useState("");
  const [withWhom, setWithWhom] = useState("");

  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => setDiscription(e.target.value);
  const onChangeBudget = (e: React.ChangeEvent<HTMLInputElement>) => setBudget(e.target.value);
  const onChangeSituation = (e: React.ChangeEvent<HTMLInputElement>) => setSituation(e.target.value);
  const  onChangeWithWhom = (e: React.ChangeEvent<HTMLInputElement>) => setWithWhom(e.target.value);
  
  return (
    <div className="">
      <form>
        <div>
          <p>プラン概要</p>
          <input value={description} onChange={onChangeDescription} type="text" />
        </div>
        <div>
          <p>予算</p>
          <input value={budget} onChange={onChangeBudget} type="text" />
        </div>
        <div>
          <p>シチュエーション</p>
          <input value={situation} onChange={onChangeSituation} type="text" />
        </div>
        <div>
          <p>誰と？</p>
          <input value={withWhom} onChange={onChangeWithWhom} type="text" />
        </div>
        <button type="submit">投稿する</button>
      </form>
    </div>
  );
}