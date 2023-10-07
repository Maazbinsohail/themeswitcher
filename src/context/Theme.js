import { createContext, useContext } from "react";

export const ThemeContext = createContext({
   theme : "light",
   darkTheme : () => {},
   lightTheme : () => {},
});

export const ThemeProvider  =  ThemeContext.Provider;

export default function useTheme  ()  {  {/* custom hook banaya hai yahan hai jo last project context api mai contextprovider wala kam 2 file mai kiya tha yahan wo ham ny 1 he file mai krdia hai*/}
  return useContext(ThemeContext);
}
 