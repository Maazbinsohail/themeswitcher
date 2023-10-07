
import { useState, useEffect } from 'react';
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeButton from './components/ThemeButton';
import Card from './components/Card';

function App() {
  
  const [theme, setTheme] = useState("light");
   
  const darkTheme = () => {
    setTheme("dark");
  }

  const lightTheme = () => {
    setTheme("light");
  }

  //actual change in theme

  useEffect(() => {
 document.querySelector('html').classList.remove('dark', 'light')
 document.querySelector('html').classList.add(theme)  
}, [theme])


  return (
   <ThemeProvider value={{ theme, darkTheme , lightTheme }} >
<div className="flex flex-wrap min-h-screen items-center color-gray-200">
    <div className="w-full ">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
        </div>

        <div className="w-full max-w-sm mx-auto shadow-xl ">
             <Card />
        </div>
    </div>
</div>
</ThemeProvider> 

  )
}

export default App
