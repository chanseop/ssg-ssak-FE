'use client'
import RegaffiliatePntCardLayout from "@/components/pages/mypoint/RegaffiliatePntCardLayout"
import { usePathname } from "next/navigation";


export default function DashboardLayout({children}: {children: React.ReactNode}) {
  const params=usePathname().split('/')[3];
  // console.log(params);
  
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <RegaffiliatePntCardLayout param={params}/>
      {children}
    </section>
  )
}

