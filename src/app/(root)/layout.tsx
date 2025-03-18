'use client';

import Footer_Page from "@/components/Footer/page";
import { HeaderFreeze } from "@/components/Header/page";
import { Navbar } from "@/components/NavBar/page";
import { Side_Bar } from "@/components/SideBar/page";
import { GetSigninData } from "@/lib/useraction";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface AppProps {
  children: ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  const router=useRouter()
  const Result=useSelector((state:any)=>state.FirstStateValue)
  const[isChecking,setIsChecking]=useState(true)

  useEffect(() => {
     const StoredData=GetSigninData()
      console.log("Info----",StoredData)
   if(StoredData){
    setIsChecking(false)
    router.push("/")
   }else{
    router.push("/sign-in")
   }
      
  }, []);
if(isChecking)return <h1 className="flex flex-col items-center justify-center h-screen ">Loading.....</h1>
  return (
    <div className="h-screen flex flex-col bg-black">
     <Navbar/>
    <div className="flex flex-1 flex-row w-full">
      {Result &&
        <div>
          <Side_Bar />
        </div>
      }
      <main className={`flex-1 overflow-auto text-black bg-gray-100 p-16 ${!Result ? 'w-full' : ''}`}>
        {children}
      </main>
    </div>
    <footer className="footer footer-center bg-gray-600 text-center text-white ">
                <aside>
                    <p className="text-[10px]">Copyright © {new Date().getFullYear()-1} - All rights reserved by ARS Algo Trading Ltd</p>
                </aside>
            </footer>
  </div>
  );
};

export default App;
