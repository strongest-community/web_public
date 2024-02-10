"use client";

import React, { useState } from "react";
import { PlanData } from "@/types/planType";

export default function SearchForm() {
  const [formData, setFormData] = useState<PlanData>({
    id: 0,
    description: "",
    budget: 0,
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
  };

  return (
    <div>
      <p>トップページ</p>
      <p>検索ぺーじ</p>
      <form onSubmit={handleSubmit}>
        <label>description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <label>budget:</label>
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
        />
        <br />
        <label>situation:</label>
        <input
          type="text"
          name="situation"
          value={formData.situation}
          onChange={handleChange}
        />
        <br />
        <label>with_whom:</label>
        <input
          type="text"
          name="with_whom"
          value={formData.with_whom}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Search</button>
      </form>
    </div>
  );
}
