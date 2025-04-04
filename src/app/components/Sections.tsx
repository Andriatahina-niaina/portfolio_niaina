import React from "react";
import { Hero } from "./hero/Hero";

export const Sections = () => {
    return(
        <div className="flex flex-col gap-[142px] w-full md:max-w-screen-lg
        pt-[236px] md:top-60 mx-auto">
            <Hero />
        </div>
    )
}