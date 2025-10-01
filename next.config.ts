// next.config.mjs
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    domains: ["i.scdn.co"], 
  },
};

export default withMDX(nextConfig);
