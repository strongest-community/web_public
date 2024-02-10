"use client";

import { PlanData } from "@/types/planType";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function PlanDetails() {
  const params = useParams();
  const [plan, setPlan] = useState<PlanData | null>(null);
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/plans`);
        const jsonData = await response.json();
        console.log(jsonData);
        const allPlans = jsonData.plans;
        const matchingPlan = allPlans.find(
          (p: PlanData) => p.id == Number(params.id)
        );
        if (matchingPlan) {
          setPlan(matchingPlan);
        } else {
          console.log("Plan not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Plan Details</h1>
      <p>{plan?.id}</p>
      <p>{plan?.description}</p>
    </div>
  );
}

export default PlanDetails;
