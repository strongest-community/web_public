"use client";

import ShowCard from "@/components/ShowCard";
import { PlanData } from "@/types/planType";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function PlanDetails() {
  const params = useParams();
  const [plan, setPlan] = useState<any>(null);
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/plans`);
        const jsonData = await response.json();
        console.log(jsonData);
        const allPlans = jsonData;
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

  async function postData(url = "", data = {}) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, options);
    return response.json();
  }

  const [star, setStar] = useState<number>(1);
  const [commentBody, setCommentBody] = useState<string>("");
  const commentSubmit = () => {
    postData(`${baseUrl}/comment/${plan.id}`, {
      comment: commentBody,
      stars: star,
    })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const averageStars =
    plan?.comments.reduce((acc: any, comment: any) => acc + comment.stars, 0) /
    plan?.comments.length;

  return (
    <div className="min-h-[80vh] w-[100vw] flex p-24">
      <div className="w-[40%]">
        <p className="text-[5em] font-bold">{plan?.title}</p>
        <p className="m-2">{plan?.comments.length != 0 && averageStars}</p>
        <p className="m-2">おすすめパートナー：{plan?.with_whom}</p>
        <div
          className="h-2 w-[95%] mx-auto rounded-[4px]"
          style={{ backgroundColor: "#2BC573" }}
        ></div>
        <p className="m-2 text-[1.5em]">Description</p>
        <p className="m-5">{plan?.description}</p>
        <p className="m-2 text-[1.5em]">Situation</p>
        <p className="m-5">{plan?.situation}</p>
        <div className="comment">
          <p>新規コメント</p>
          <form onSubmit={commentSubmit}>
            <div>
              <label>星:</label>
              <input
                type="number"
                value={star}
                onChange={(e) => setStar(Number(e.target.value))}
                min="1"
                max="5"
              />
            </div>
            <div>
              <label>コメント:</label>
              <input
                type="text"
                value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}
              />
            </div>
            <button type="submit">コメントする</button>
          </form>
          <p>コメント一覧</p>
          {plan?.comments.map((e: any) => (
            <p>
              {e.stars}
              {e.comment}
            </p>
          ))}
        </div>
      </div>
      <div className="w-[60%] p-10">
        <p className="text-[3em] font-bold">Places</p>
        {plan?.places.map(
          (place: { id: number; plan_id: number; url: string }) => (
            <div key={place.id}>
              <ShowCard url={place.url} />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default PlanDetails;
