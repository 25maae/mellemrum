import { useEffect } from "react";
export function usePageTitle(title) {
  useEffect(() => {
    document.title = `Mellemrum. | ${title}`;
  }, [title]);
}
