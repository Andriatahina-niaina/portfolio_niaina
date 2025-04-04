import React from "react";

type HeroProps = {

}

export const Hero = () => {
    return <section className="relative 
    flex flex-row items-center z-20 mx-auto">
        <div className="flex flex-col gap-[13px] items-center">
            <h1 className="text-2xl/1 text-center font-bold block">
              <span className="-ml-3"></span>
              Hello I'm Niaina Rabemanantoa {""},
              <span> Software Engineer</span>
            </h1>
        </div>
    </section>
}