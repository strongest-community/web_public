"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function New() {
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");
  const [budget, setBudget] = useState("");
  const [situation, setSituation] = useState("");
  const [withWhom, setWithWhom] = useState("");
  const router = useRouter();

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => setDiscription(e.target.value);
  const onChangeBudget = (e: React.ChangeEvent<HTMLInputElement>) => setBudget(e.target.value);
  const onChangeSituation = (e: React.ChangeEvent<HTMLInputElement>) => setSituation(e.target.value);
  const onChangeWithWhom = (e: React.ChangeEvent<HTMLInputElement>) => setWithWhom(e.target.value);

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    try {
      fetch(`${baseUrl}/plans`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error", error);
    }
  }, []);

  return (
    <div className="flex flex-col items-center text-[25px]">
      <form className="w-[80vw]">
        <div className="flex items-center mb-[5px] justify-between border-b-2 h-[130px]">
          <p>タイトル:</p>
          <input className="border w-96 h-[60px] mr-80" value={title} onChange={onChangeTitle} type="text" />
        </div>
        <div className="flex items-center justify-between mb-[5px]  border-b-2 h-[130px]">
          <p>プラン概要:</p>
          <input className="w-96 border h-[60px] mr-80" value={description} onChange={onChangeDescription} type="text" />
        </div>
        <div className="flex items-center justify-between mb-[5px] border-b-2 h-[130px]">
          <p>予算:</p>
          <input placeholder="円" className="border w-96 h-[60px] text-right mr-80" value={budget} onChange={onChangeBudget} type="number" />
        </div>
        <div className="flex items-center justify-between mb-[5px] border-b-2 h-[130px]">
          <p>シチュエーション:</p>
          <input className="border w-96 h-[60px] mr-80" value={situation} onChange={onChangeSituation} type="text" />
        </div>
        <div className="flex items-center justify-between mb-[50px] border-b-2 h-[130px]">
          <p>誰と:</p>
          <input className="border w-96 h-[60px] mr-80" value={withWhom} onChange={onChangeWithWhom} type="text" />
        </div>
        <div className="flex justify-center">
          <button className="border border-black p-[20px] px-44 rounded-[30px]" type="submit" onClick={() => router.push(`/1`)}>
            {/* backendできたら編集 */}
            投稿する
          </button>
        </div>
      </form>
    </div>
  );
}
