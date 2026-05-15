import CityPage from "./CityPage";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { city } = await params;

    const rawCity = city.split("in-").pop();

    const cityName = rawCity
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    return {
        title: `Dates Supplier in ${cityName} | Premium Quality Dates Wholesale – Mr. Dates`,
        description: `Mr. Dates is a trusted Dates Supplier in ${cityName} offering premium quality fresh & dry dates including Medjool, Ajwa, Kimia & Kalmi. Bulk & wholesale supply across ${cityName} at competitive prices.`,
    };
}

const Page = async ({ params }) => {
    const { city } = await params;

    if (!city.includes("in-")) {
        notFound();
    }

    const cityName = city.split("in-")[1];

    if (!cityName || cityName.trim().length === 0) {
        notFound();
    }

    return <CityPage city={city} />;
};

export default Page;