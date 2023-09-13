'use client'
import PointserviceLayout from "@/components/pages/spoint/PointserviceLayout"
import { usePathname } from "next/navigation";
import PointServicebottom from "@/components/pages/spoint/PointServicebottom";


export default function tabmemberLayout({children}: {children: React.ReactNode}) {
  const params=usePathname().split('/')[3];
  // console.log(params);
  
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <PointserviceLayout param={params}/>
      {children}
      <PointServicebottom />
    </section>
  )
}
