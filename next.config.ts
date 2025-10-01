import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    providerImportSource: "@mdx-js/react",
  },
});

module.exports = {
  images: {
    domains: ["i.scdn.co"],
  },
};

export default withMDX(nextConfig);
