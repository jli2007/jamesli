"use client";
import NextLink from "next/link";

export default function LinkSlider({
  className = "",
  href,
  isActive,
  isNextLink,
  mode,
  children,
}: {
  className?: any;
  href: string;
  isActive?: boolean;
  isNextLink?: boolean;
  mode: string;
  children: any;
}) {
  const baseStyles = `
    transition delay-200 duration-200 ease-in-out rounded-sm cursor-pointer
    ${
      !isActive &&
      mode == "dark" &&
      `
      after:absolute
      after:left-0
      after:bottom-[-2]
      after:h-[2px]
      after:w-full
      after:bg-[#787569]
      after:z-[1]
      after:opacity-90 
      before:absolute
      before:left-0
      before:bottom-[-2]
      before:h-[2px]
      before:w-full
      before:bg-[#151411]
      before:opacity-0
      before:z-[2]
      hover:before:opacity-100
      hover:text-[#151411]
      hover:before:[animation:underline_1.5s_ease-in-out_infinite]
    `
    }
    ${
      !isActive &&
      mode == "light" &&
      `
      after:absolute
      after:left-0
      after:bottom-[-2]
      after:h-[2px]
      after:w-full
      after:bg-[#c9c5b1]
      after:z-[1]
      after:opacity-70
      before:absolute
      before:left-0
      before:bottom-[-2]
      before:h-[2px]
      before:w-full
      before:bg-[#ede8d7]
      before:opacity-0
      before:z-[2]
      hover:before:opacity-100
      hover:text-[#ede8d7]
      hover:before:[animation:underline_2s_ease-in-out_infinite]
    `
    }
    ${className}
  `.trim();

  return (
    <>
      <style jsx global>{`
        @keyframes underline {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          49% {
            transform: scaleX(1);
            transform-origin: left;
          }
          51% {
            transform: scaleX(1);
            transform-origin: right;
          }
          100% {
            transform: scaleX(0);
            transform-origin: right;
          }
        }
      `}</style>
      {isNextLink ? (
        <NextLink href={href} className={baseStyles}>
          {children}
        </NextLink>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
        >
          {children}
        </a>
      )}
    </>
  );
}
