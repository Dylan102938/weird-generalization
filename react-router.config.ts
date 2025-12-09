import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "app",
  basename: "/weird-generalization",
  ssr: false,
  async prerender() {
    return ["/"];
  },
} satisfies Config;
