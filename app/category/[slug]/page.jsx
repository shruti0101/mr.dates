import React from 'react'
import CategoryCityPage from './CategoryCityPage'
import { notFound } from "next/navigation";
import { categoryCityContent } from './data';

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const parts = slug.split("-")
    const citySlug = parts.pop();
    const categorySlug = parts.join("-");

    const format = (text) =>
        text
            .split("-")
            .filter(w => w.toLowerCase() !== "in")
            .filter(w => w.toLowerCase() !== "supplier")
            .map(w => w[0].toUpperCase() + w.slice(1))
            .join(" ");


    const categoryName = format(categorySlug);
    const cityName = format(citySlug);

    return {
        title: `${categoryName} Supplier in ${cityName} | Premium Quality ${categoryName} Wholesale – Mr. Dates`,
        description: `Mr. Dates is a trusted ${categoryName} Supplier in ${cityName} offering premium ${categoryName} including Medjool, Ajwa, Kimia & Kalmi. Bulk & wholesale supply across ${cityName} at competitive prices.`,
    };
}

const Page = async ({ params }) => {
    const { slug } = await params;
    if (!slug.includes("-")) {
        notFound();
    }

    const parts = slug.split("-in-")
    const citySlug = parts.pop();
    const categorySlug = parts.join("-");

    const format = (text) =>
        text
            .split("-")
            .filter(w => w.toLowerCase() !== "in")
            .filter(w => w.toLowerCase() !== "supplier")
            .map(w => w[0].toUpperCase() + w.slice(1))
            .join(" ");

    const categoryName = format(categorySlug);
    const cityName = format(citySlug);
    const content = categoryCityContent[categorySlug];

    return (
        <CategoryCityPage categoryName={categoryName} cityName={cityName} content={content} />
    )
}

export default Page;