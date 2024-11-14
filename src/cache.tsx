import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { ReactNode } from "react";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function Rtl(props: { children: ReactNode }) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}
