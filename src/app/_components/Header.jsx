'use client'

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useUser , UserButton} from "@clerk/nextjs"
import Link from "next/link"

function Header(){
    const {user,isSignedIn} = useUser();
    return(
        <>
        <div className="p-5 flex justify-between items-center border shadow-sm">
        <div className="flex flex-row items-center">
            <Image src={'/chart-donut.svg'} alt='logo' width={40} height={25} />
            <span className="text-blue-800 font-bold text-xl">SmartCents</span>
        </div>
        {isSignedIn ? (<UserButton/>) : 
        <div className="flex items-center gap-4">
        <Link href='/dashboard'>
        <Button variant="outline"  className=" hover:bg-slate-100 cursor-pointer rounded-full">
            Dashboard
        </Button>
        </Link>
          <Link href='/dashboard'>
        <Button variant="outline" className="    rounded-full bg-blue-800
        hover:bg-blue-700 cursor-pointer hover:text-white text-white">
            Get Started
        </Button>
        </Link>
        </div>}
        </div>
        </>
    )
}

export default Header;