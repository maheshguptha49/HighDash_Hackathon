import { useLocation } from "react-router-dom";

export function useQuery() {
  const queriesString = useLocation().search.slice(1);
  const str = queriesString.split("&");
  const queriesObj = {};
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].split("=");
    queriesObj[str[i][0]] = str[i][1];
  }
  return { queriesObj, queriesString };
}