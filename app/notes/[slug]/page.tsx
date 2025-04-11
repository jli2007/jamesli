"use client";
import { useEffect, useState, use, useRef } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useRouter } from "next/navigation";

export default function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [content, setContent] = useState<string | null>(null);
  const [info, setInfo] = useState<{
    date: string | null;
    title: string | null;
  }>({
    date: null,
    title: null,
  });
  const router = useRouter();
  const { slug } = use(params);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //fetch the markdown file from /public/notes
    fetch(`/notes/${slug}.mdx`)
      .then((res) => res.text())
      .then((data) => setContent(data))
      .catch(() => {
        console.error("Error loading the file");
      });

    const date = sessionStorage.getItem("postDate");
    const title = sessionStorage.getItem("postTitle");
    console.log(date, title);
    setInfo({
      date: date,
      title: title,
    });
  }, [slug]);

  const markdownComponents: Components = {
    a: ({ href, children }) => (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),

    // @ts-ignore
    scrollbutton: ({ children }) => (
      <button
        onClick={() =>
          bottomRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        className="bg-white/20 cursor-pointer font-bold hover:bg-white/25 p-2 transition delay-200 duration-300 ease-in-out rounded-2xl my-5"
      >
        {children}
      </button>
    ),
  };

  if (!content) return <div>Loading...</div>;

  return (
    <div className="bg-black text-white max-w-screen min-h-screen h-auto w-full font-playfair font-normal overflow-x-hidden pr-5 pb-5">
      <div className="flex flex-row">
        <button
          className="bg-white text-black cursor-pointer w-40 hover:bg-lightBeige hover:text-darkBeige3 m-5 p-5 mb-10 transition delay-150 ease-in-out"
          onClick={() => {
            router.push("/notes");
          }}
        >
          <span className="text-sm md:text-base">back to all notes.</span>
        </button>
        <h1 className="p-5 m-5">
          {info.date} - {info.title}
        </h1>
      </div>

      <div className="w-full pl-5 prose prose-invert font-playfair">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={markdownComponents}
        >
          {content}
        </ReactMarkdown>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
