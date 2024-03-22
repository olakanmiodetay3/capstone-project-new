import React from "react";
import { FooterText } from "../../../../components/footer-text";

function Footer() {
  return (
    <div className="bg-pink my-4 py-12">
      <div className="mx-10">
        <div className="lg:flex justify-between mx-10">
          <h2 className="text-3xl text-blue font-semibold ">CHATTER</h2>
          <div className="">
            <FooterText
              title="Explore"
              content={["community", "Trending blogs", "Chatter for teams"]}
            />
          </div>
          <div className="">
            <FooterText
              title="Support"
              content={["Support docs", "Join slack", "Contact"]}
            />
          </div>
          <div className="">
            <FooterText
              title="Official blog"
              content={["Official blog", "Engineering blog"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
