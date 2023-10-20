import { useContext } from "react";
import { createContext } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const AppContext = createContext();

const AppProvider = ({children}) =>{

    const aosFunction = () =>{
        useEffect(() => {
            AOS.init({ 
              duration: 1000,
              offset: 300,
              easing: 'ease-in-sine',
              delay: 100,
            });
          }, []);
    }

    return(
        <AppContext.Provider value={{aosFunction}}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () =>{
    return useContext(AppContext);
}

export {AppProvider, useAppContext}