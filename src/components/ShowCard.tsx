import React from "react";

const ShowCard: React.FC<{ url: string }> = ({ url }) => {
  const ogpUrl = "https://zenn.dev/tm35/articles/27be33a239a687";

  return (
    <div>
      {url}
      <img
        src="https://res.cloudinary.com/zenn/image/upload/s--jcXDSeJy--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:Next.js%2520%25E3%2581%25A7%2520CORS%2520%25E3%2582%25A8%25E3%2583%25A9%25E3%2583%25BC%25E3%2582%2592%25E5%259B%259E%25E9%2581%25BF%25E3%2581%2597%25E3%2581%25A6OGP%25E3%2582%2592%25E5%258F%2596%25E5%25BE%2597%25E3%2581%2599%25E3%2582%258B%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:match35%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzJlNTBlYTU0YjQuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png"
        alt=""
      />
    </div>
  );
};

export default ShowCard;
