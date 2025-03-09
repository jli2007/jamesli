import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const PostNote = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
    .then((res) => {
        if (!res.ok) throw new Error("Post not found");
        return res.text();
      })
      .then(setContent)
      .catch(() => setContent("# Post Not Found"));
  }, [slug]);

  return (
    <div className="bg-black text-white max-w-screen h-screen font-playfair">
      <button
        className="bg-white text-black cursor-pointer m-5 w-40 hover:bg-lightBeige hover:text-darkBeige3 border-1 border-white p-3 mb-10"
        onClick={() => {
          navigate("../notes");
        }}
      >
        back to notes.
      </button>
      <div className="w-full pl-5">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default PostNote;
