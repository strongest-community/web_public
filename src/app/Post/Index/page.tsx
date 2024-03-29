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

        setAllPlans(jsonData);
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
      <p className="absolute top-[70px] left-[470px] text-[2em] font-bold">
        Here's date plans that works for you!
      </p>
      <div className="flex">
        <div className="mb-10 w-[50%] p-10">
          <img src="/hair_type_hero.jpg" alt="no image" className="h-[800px]" />
        </div>
        <div className="mt-[100px] m-10 w-[50%]">
          {filteredPlans?.map((plan: any) => (
            <div key={plan.id} className="m-3">
              <a href={`/Post/${plan.id}`}>
                <p className="text-[2em]" style={{ color: "#2BC573" }}>
                  {plan.id}
                </p>
                <p className="text-[2em] m-10 mt-0">{plan.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
