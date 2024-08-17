'use client'

import { usePathname } from "next/navigation";

export default function DashboardPage() {

  const pathName = usePathname();     // LẤY THÔNG TIN - TRÊN - URL
  console.log('usePathname - lay thong tin URL: ' + pathName);

  // RENDER
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div>DASHBOARD-PAGE</div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ex libero excepturi nam qui eveniet totam molestiae numquam pariatur iste commodi vitae, delectus, sapiente rem eaque reprehenderit, a optio animi!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ex libero excepturi nam qui eveniet totam molestiae numquam pariatur iste commodi vitae, delectus, sapiente rem eaque reprehenderit, a optio animi!</p>

    </main>
  );
}