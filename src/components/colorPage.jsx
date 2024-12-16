import { useState } from "react"

const colors = [
    {
        color: "#0099e5",
        colorName: "blue"
    },
    {
        color: "#ff4c4c",
        colorName: "red"
    },
    {
        color: "#34bf49",
        colorName: "green"
    },
    {
        color: "#ffdd00",
        colorName: "yellow"
    }
]

function ColorPage() {
    const [isColor, setIsColor] = useState("#ffffff");

    return (
        <div style={{ backgroundColor: isColor }} className="h-screen w-screen flex justify-center items-end">
            <div className="border-2 border-black bg-white rounded-md w-1/2 h-[50px] mb-10 p-2 flex justify-evenly items-center">
                {
                    colors.map((index) => (
                        <div 
                            key={index.colorName}
                            onClick={() => {setIsColor(index.color)}} 
                            style={{ backgroundColor: index.color }}
                            className="text-white text-xl px-5 py-1 rounded-sm cursor-pointer hover:scale-[102%] active:scale-95 transition-transform duration-300 ease-in-out"
                        >
                            {index.colorName}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ColorPage