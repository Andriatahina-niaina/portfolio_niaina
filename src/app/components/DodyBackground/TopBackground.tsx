import Image from "next/image";
import React from "react";

export const TopBackground = () => {
    return <>
        <div className="absolute w-full max-w-[360px] md:max-w-screen-lg h-[285px]
        md:has-[656px] top-[188px] md:top-11 left-1/2 -translate-x-1/2 md:overflow-x-hidden
        z-10">
            <div className=" w-full h-full relative">
                <div className="circle-icon[top-0
                left-[171px] md:top-28 md:left-72">
                    <Image 
                      src="/rocket_icon.svg"
                      alt="rockets icon"
                      width={23}
                      height={23}/>
                </div>
                <div>

                </div>
            </div>
        </div>
    </>
}