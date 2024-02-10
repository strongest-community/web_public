"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { SearchPlanTypes } from "@/types/searchPlan.t";

export default function SearchForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<SearchPlanTypes>({
    description: "",
    lower_budget: 10,
    upper_budget: 100000000,
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
    <div>
      <p>トップページ</p>
      <p>検索ページ</p>
      <form onSubmit={handleSubmit}>
        <label>description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
        <br />
        <label>lower_budget:</label>
        <input type="number" name="lower_budget" value={formData.lower_budget} onChange={handleChange} />
        <br />
        <label>upper_budget:</label>
        <input type="number" name="upper_budget" value={formData.upper_budget} onChange={handleChange} />
        <br />
        <label>situation:</label>
        <input type="text" name="situation" value={formData.situation} onChange={handleChange} />
        <br />
        <label>with_whom:</label>
        <input type="text" name="with_whom" value={formData.with_whom} onChange={handleChange} />
        <br />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
