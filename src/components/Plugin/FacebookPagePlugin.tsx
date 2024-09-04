import React from "react";

const FacebookPagePlugin: React.FC = () => {
  return (
    <div style={{ overflow: "hidden", width: "100%", maxWidth: "330px" }}>
      <iframe
        loading="lazy"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fclbhtlt.ithusc&tabs&width=310&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
        width="310"
        height="130"
        style={{ border: "none", overflow: "hidden" }}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title="Facebook Page Plugin"
      />
    </div>
  );
};

export default FacebookPagePlugin;
