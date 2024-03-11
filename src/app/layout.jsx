import Image from "next/image";
import "./globals.css";
import bg from "./assets/herobg.png"

export const metadata = {
  
  title:"Ahmad Ibrahim | Portfolio",
  description: "Generated by create next app",
};

export default function children ({children  }) {
  return (
    <html lang="en">
      <body >
        
        <Image src={bg} className="w-full h-[100vh] absolute -z-10  bg-no-repeat bg-cover bg-center" />
        

      
        {children}
        </body>
    </html>
  );
}
