import React,{useEffect} from "react";
import Image from 'next/image'

import {
    LayoutGrid,PiggyBank,ReceiptText,ShieldCheck,
    IndianRupee
} from 'lucide-react'

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideNav(){
    const MenuList=[
        {
            id:1,
            name :"Dashboard",
            icon: LayoutGrid,
            path:"/dashboard"
        },
        {
            id:2,
            name :"Incomes",
            icon: IndianRupee,
            path:"/dashboard/incomes"
        },
        {
            id:3,
            name :"Budgets",
            icon: PiggyBank,
            path:"/dashboard/budgets"
        },
        {
            id:4,
            name :"Expenses",
            icon: ReceiptText,
            path:"/dashboard/expenses"
        },
        {
            id:5,
            name :"Upgrade",
            icon: ShieldCheck,
            path:"/dashboard/upgrade"
        },
    ];

    const path = usePathname()

    useEffect(()=>{
        console.log(path);
        
    },[path])

    return(
        <>
        <div className="h-screen p-5 border shadow-sm">
            <div className="flex flex-row items-center">
                <Image src={'./chart-donut.svg'} alt='logo' width={40} height={25} />
                <span className="text-blue-800 font-bold text-xl">SmartCents</span>
            </div>
            <div className="mt-5">
            {MenuList.map((menubar,index)=>(
                <Link href={menubar.path} key={index}>
                    <h2 className={`flex gap-2 items-center font-medium mb-2 p-4 rounded-full cursor-pointer text-gray-500 hover:text-primary hover:bg-blue-100 ${path== menubar.path && "text-primary bg-blue-100"}`}>
                    <menubar.icon />
                    {menubar.name}
                    </h2>
                </Link>
            ))}
            </div>
        </div>
        </>
    )
}

export default SideNav;