import { Inter } from "next/font/google";
import HeaderBar from "./components/Headbar";


const inter = Inter({ subsets: ["latin"] });

export default function LoggedIn() {
  return (
    <>
    
      <HeaderBar></HeaderBar>

      
        <div className="center-box">
          <h1>Welcome user!</h1>
        </div>
  
    
      

     
    </>
  )
}
