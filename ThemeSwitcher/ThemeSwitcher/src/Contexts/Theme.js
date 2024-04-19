import React from "react";
import { createContext, useContext } from "react";

export const ThemeContext=React.createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}, 
});


//Provider will provide the values
export const ThemeProvider=ThemeContext.Provider


//when useTheme will be called automatically useContext will be called
//since all the things are in same file then we will need to import only useTheme
export default function useTheme(){
    return useContext(ThemeContext);
}