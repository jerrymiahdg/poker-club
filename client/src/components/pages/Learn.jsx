import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Learn = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    import("../content/learn.md").then((res) => {
      fetch(res.default)
        .then((res) => res.text())
        .then((res) => setContent(res));
    });
  }, []);

  return (
    <div className="w-full flex justify-center py-20 px-5">
      <ReactMarkdown className="prose max-w-2xl w-full">
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Learn;
