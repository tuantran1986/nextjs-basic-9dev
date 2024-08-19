'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {

    const router = useRouter();

    return (
        <nav>
            <h1>MENU - Navbar</h1>
            <hr/>
            <Image src='/rong.png' alt='con rong' width={128} height={70} />
            <div className="flex justify-between ">
                <div></div>
                {/* 1. sử dụng thẻ LINK chuyển trang */}
                <div className="py-4"><Link href="/">HOME</Link></div>
                <div className="py-4"><Link href="/about">ABOUT</Link></div>
                <div className="py-4"><Link href="/dashboard">DASHBOARD</Link></div>
                <div className="py-4"><Link href="/dashboard/setting">DASHBOARD_SETTING</Link></div>

                {/* 2. sử dụng ROUTER chuyển trang thay thẻ LINK */}
                <button onClick={() => router.push('/dashboard')} >ROUTER chuyển trang</button>
                <div></div>
            </div>
            <hr/>
        </nav>
    )
}

export default Navbar;