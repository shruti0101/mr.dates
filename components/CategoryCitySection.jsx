import { CatCites } from "@/Data/data";
import Link from "next/link";
import React from "react";

const CategoryCitySection = ({ categoryName }) => {
    return (
        <>
            <section className="py-5 bg-[#faf7f2] px-4">
                <h2 className="my-2 text-2xl md:text-5xl font-bold  text-black">Our Supply Network</h2>
                <div className="flex gap-2 px-3 flex-wrap overflow-hidden ">
                    {CatCites.map(({ href, label }, idx) => (
                        <Link
                            href={`/category/${categoryName?.toLowerCase().replace(/\s+/g, "-")}-supplier-${href}`}
                            key={idx}
                            className="hover:underline hover:scale-105 hover:duration-300 text-xl hover:text-amber-400"
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};

export default CategoryCitySection;