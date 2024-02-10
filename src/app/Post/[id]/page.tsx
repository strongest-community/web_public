import { useRouter } from 'next/router';

function PlanDetails() {
  const router = useRouter();
  const { id } = router.query; 

  // ここでバックエンドからIDに対応するプランを取得し、表示する

  return (
    <div>
      <h1>Plan Details</h1>
      <p>Plan ID: {id}</p>
      {/* その他のプランの詳細情報を表示 */}
    </div>
  );
}

export default PlanDetails;