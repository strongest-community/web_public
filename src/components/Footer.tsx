import React from "react";

const Footer = () => {
  return (
    <footer className="w-[100vw] text-white" style={{ backgroundColor: "#2BC573" }}>
      <div className="flex justify-between">
        <div className="m-10">
          <p className="text-[2em]">Auther's</p>
          <p>Yuki</p>
          <p>Mone</p>
          <p>Nasu</p>
          <p>Naoya</p>
        </div>
        <div className="m-10">
          <p className="text-[2em]">Team</p>
          <p className="text-[3em]">史上最強コミュニティ</p>
        </div>
        <div className="m-5 text-[1.5em]">
          <p>AUTHENTIC</p>
          <p>BEAUTY</p>
          <p>CONCEPT</p>
        </div>
      </div>
      <p className="flex justify-center">
        &copy; 2024 史上最強コミュニティ. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
