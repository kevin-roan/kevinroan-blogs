import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownComponentProps {
  mdFilePath: string;
}

const MarkdownComponent: React.FC<MarkdownComponentProps> = ({
  mdFilePath,
}) => {
  const [mdContent, setMdContent] = useState("");

  useEffect(() => {
    async function fetchMdContent() {
      try {
        const response = await fetch(mdFilePath);
        const text = await response.text();
        setMdContent(text);
      } catch (error) {
        console.error("Error fetching MD content:", error);
      }
    }

    fetchMdContent();
  }, [mdFilePath]);

  return (
    <div>
      <ReactMarkdown>{mdContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownComponent;
