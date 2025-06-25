import nextra from "nextra";

import type { NextConfig } from "next";

const withNextra = nextra({
  contentDirBasePath: "/changelog",
  staticImage: true,
  search: {
    codeblocks: true,
  },
  defaultShowCopyCode: true,
});

const nextConfig: NextConfig = {
  assetPrefix: "/docs",
};

export default withNextra(nextConfig);
