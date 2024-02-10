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

  const filteredPlans = allPlans.filter((plan: PlanData) => {
    return (
      (!query.description ||
        plan.description
          .toLowerCase()
          .includes(query.description.toLowerCase())) &&
      (!query.lower_budget || plan.budget >= parseInt(query.lower_budget)) &&
      (!query.upper_budget || plan.budget <= parseInt(query.upper_budget)) &&
      (!query.situation ||
        plan.situation.toLowerCase().includes(query.situation.toLowerCase())) &&
      (!query.with_whom ||
        plan.with_whom.toLowerCase().includes(query.with_whom.toLowerCase()))
    );
  });

  return (
    <div>
      <p>Search result</p>
      {filteredPlans.map((plan: any) => (
        <div key={plan.id}>
          <p>{plan.description}</p>
          <p>{plan.budget}</p>
          <p>{plan.situation}</p>
          <p>{plan.with_whom}</p>
          {plan.places.map(
            (place: { id: number; plan_id: number; url: string }) => (
              <div key={place.id}>
                <p>{place.id}</p>
                <p>{place.plan_id}</p>
                <p>{place.url}</p>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Page;
