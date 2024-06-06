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
      <div className="max-w-2xl w-full flex flex-col gap-8">
        <h1 className="text-7xl font-bold">Learn</h1>
        <ReactMarkdown className="prose w-full prose-h1:text-neutral-700 prose-h1:mt-12 prose-h1:font-normal prose-h2:text-neutral-700 prose-p:text-neutral-700 prose-a:text-neutral-700">
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Learn;
