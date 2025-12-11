import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "app",
  basename: "/",
  ssr: false,
  async prerender() {
    return ["/"];
  },
} satisfies Config;
