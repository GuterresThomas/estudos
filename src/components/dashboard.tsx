import React from "react";
import NavMenu from "./navmenu";
import { DatePickerWithRange } from "./datepicker";

import TabsDashboard from "./tabsDashboard";

const DashBoard = () => {
    return (
        <div className=" shadow-md w-screen m-2 h-screen">
            <NavMenu />
            <div className="flex justify-center space-x-64 mt-5">
                <h1 className="font-sans-Roboto font-bold text-3xl">DASHBOARD</h1>
                <DatePickerWithRange className="bg-zinc-50"/>
            </div>
            <div className="flex justify-start ml-36">
                <TabsDashboard />
            </div>
        </div>
    )
}

export default DashBoard 