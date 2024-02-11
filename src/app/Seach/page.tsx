"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { SearchPlanTypes } from "@/types/searchPlan.t";

export default function SearchForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<SearchPlanTypes>({
    description: "",
    lower_budget: 1000,
    upper_budget: 100000,
    situation: "",
    with_whom: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const SearchQuery = new URLSearchParams(formData as any).toString();
    router.push(`/Post/Index?${SearchQuery}`);
  };

  return (
    <div className="flex flex-col items-center text-[25px]">
      <form onSubmit={handleSubmit} className="w-[80vw]">
        <div className="flex items-center mb-[5px] justify-between border-b-2 h-[130px]">
          <label>キーワード:</label>
          <input
            type="text"
            name="description"
            className="border w-96 h-[60px] mr-80"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center mb-[5px] justify-between border-b-2 h-[130px]">
          <label>予算:</label>
          <div className="flex justify-between items-center w-96 h-[60px] mr-80">
            <input
              type="number"
              name="lower_budget"
              className="border w-30 h-[60px]"
              value={formData.lower_budget}
              onChange={handleChange}
            />
            <p className="m-5">円</p>
            <p className="m-5">~</p>

            <input
              type="number"
              name="upper_budget"
              className="border w-30 h-[60px]"
              value={formData.upper_budget}
              onChange={handleChange}
            />
            <p className="m-5">円</p>
          </div>
        </div>
        <div className="flex items-center mb-[5px] justify-between border-b-2 h-[130px]">
          <label>situation:</label>
          <input
            type="text"
            name="situation"
            className="border w-96 h-[60px] mr-80"
            value={formData.situation}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center mb-[5px] justify-between border-b-2 h-[130px]">
          <label>with_whom:</label>
          <input
            type="text"
            name="with_whom"
            className="border w-96 h-[60px] mr-80"
            value={formData.with_whom}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="border border-black p-[20px] px-44 rounded-[30px] m-10"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
