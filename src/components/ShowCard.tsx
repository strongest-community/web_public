import React from "react";

const ShowCard: React.FC<{ url: string }> = ({ url }) => {
  const ogpUrl = "https://zenn.dev/tm35/articles/27be33a239a687";

  return <div>{url}</div>;
};

export default ShowCard;
