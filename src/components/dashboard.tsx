import React from "react";
import NavMenu from "./navmenu";
import { DatePickerWithRange } from "./datepicker";
import MenuBar from "./menubar";

const DashBoard = () => {
    return (
        <div>
            <NavMenu />
            <div className="flex justify-center space-x-64 mt-5">
                <h1 className="font-sans-Roboto font-bold text-3xl">DASHBOARD</h1>
                <DatePickerWithRange className="bg-zinc-50"/>
            </div>
            <div className="flex justify-start ml-56">
                <MenuBar />
            </div>
        </div>
    )
}

export default DashBoard 