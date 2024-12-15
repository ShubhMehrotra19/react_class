/* eslint-disable no-unused-vars */

import React, { useState } from "react"

function ColorPage() {

    const [isColor, setIsColor] = useState("#ffffff");

    function handleColor1() {
        setIsColor("#0099e5");
    }

    function handleColor2() {
        setIsColor("#ff4c4c")
    }

    function handleColor3() {
        setIsColor("#34bf49")
    }

    function handleColor4() {
        setIsColor("#ffdd00")
    }

    return (
        <div className={`h-screen w-screen bg-[${isColor}] flex justify-center items-end`}>
      <div className="border-2 border-black bg-white rounded-md w-1/2 h-[50px] mb-10 p-2 flex justify-evenly items-center">
                <div onClick={handleColor1} className={`bg-[#0099e5] text-white text-xl px-5 py-1 rounded-sm  cursor-pointer hover:scale-[102%] active:scale-95 transition-transform duration-300 ease-in-out`}>blue</div>
                <div onClick={handleColor2} className={`bg-[#ff4c4c] text-white text-xl px-5 py-1 rounded-sm  cursor-pointer hover:scale-[102%] active:scale-95 transition-transform duration-300 ease-in-out`}>red</div>
                <div onClick={handleColor3} className={`bg-[#34bf49] text-white text-xl px-5 py-1 rounded-sm  cursor-pointer hover:scale-[102%] active:scale-95 transition-transform duration-300 ease-in-out`}>green</div>
                <div onClick={handleColor4} className={`bg-[#ffdd00] text-white text-xl px-5 py-1 rounded-sm  cursor-pointer hover:scale-[102%] active:scale-95 transition-transform duration-300 ease-in-out`}>yellow</div>
      </div>
    </div>
    )
}

export default ColorPage
