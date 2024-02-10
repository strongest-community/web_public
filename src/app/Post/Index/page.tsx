"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PlanData } from "@/types/planType";

const Page = () => {
  const [allPlans, setAllPlans] = useState<PlanData[]>([]);
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/plans`);
        const jsonData = await response.json();
        console.log(jsonData);
        setAllPlans(jsonData.plans);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const searchParams = useSearchParams();
  const query = {
    description: searchParams.get("description")?.trim(),
    lower_budget: searchParams.get("lower_budget")?.trim(),
    upper_budget: searchParams.get("upper_budget")?.trim(),
    situation: searchParams.get("situation")?.trim(),
    with_whom: searchParams.get("with_whom")?.trim(),
  };

  let filteredPlans;

  if (
    !query.description &&
    !query.lower_budget &&
    !query.upper_budget &&
    !query.situation &&
    !query.with_whom
  ) {
    filteredPlans = allPlans;
  } else {
    filteredPlans = allPlans.filter((plan: PlanData) => {
      return (
        (!query.description ||
          plan.description
            .toLowerCase()
            .includes(query.description.toLowerCase())) &&
        (!query.lower_budget || plan.budget >= parseInt(query.lower_budget)) &&
        (!query.upper_budget || plan.budget <= parseInt(query.upper_budget)) &&
        (!query.situation ||
          plan.situation
            .toLowerCase()
            .includes(query.situation.toLowerCase())) &&
        (!query.with_whom ||
          plan.with_whom.toLowerCase().includes(query.with_whom.toLowerCase()))
      );
    });
  }
  return (
    <div className="relative">
      <p className="m-10 text-[2em] font-bold">検索結果</p>
      <p className="absolute top-[100px] left-[500px] text-[2em] font-bold">
        Here's date plans that works for you!
      </p>
      <div className="flex">
        <div className="mb-10">
          <img src="/hair_type_hero.jpg" alt="no image" />
        </div>
        <div className="mt-[100px] m-10">
          {filteredPlans.map((plan: any) => (
            <div key={plan.id} className="m-5">
              <a href={`/Post/${plan.id}`}>
                <p className="text-[3em]">{plan.id}</p>
                <p className="text-[2em]">{plan.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
