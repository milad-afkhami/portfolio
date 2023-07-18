import { SWRConfig } from "swr";
import SWRUtil from "@utils/swr";
import Themes from "@constants/themes";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { defaultTheme } from "@configs/themes";
import { toastDuration } from "@configs/layout";
import type { HOCFunctionalComponent } from "@_types/components";

const ContextProviders: HOCFunctionalComponent = ({ children }) => (
  <SWRConfig
    value={{
      fetcher: SWRUtil.fetcher,
      shouldRetryOnError: false,
      // use: [SWRUtil.serialize],
    }}
  >
    <ThemeProvider
      defaultTheme={defaultTheme}
      themes={Object.values(Themes)}
      // value={Themes}
    >
      <Toaster
        position="top-right"
        toastOptions={{ duration: toastDuration }}
        // children={(props) => <Toast {...props} />}
      />
      {children}
    </ThemeProvider>
  </SWRConfig>
);

export default ContextProviders;
