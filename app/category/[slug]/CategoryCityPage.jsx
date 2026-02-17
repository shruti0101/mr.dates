// "use client";
import Link from 'next/link';
import React from 'react'

export default function CategoryCityPage({ categoryName, cityName, content }) {

    if (!content) {
        return (
            <h2 className="text-center text-red-500 mt-20 text-xl">
                Not found
            </h2>
        );
    }

    return (<>
        <section
            style={{
                backgroundImage: `url(${content?.mainImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="py-30 relative z-10"
        >
            <div className="absolute inset-0 bg-gray-900/60" />

            <h1 className="text-center font-serif leading-snug relative font-bold text-white text-2xl px-5 md:py-14 capitalize md:text-6xl">
                {categoryName} {cityName}
            </h1>
        </section>

        {/* main */}
        <section className="mx-auto lg:px-15 px-5 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {content?.h2(cityName)}
                    </h1>

                    <p className="text-black mb-4 text-xl">
                        {content?.intro(cityName)}
                    </p>

                    <p className="text-black mb-4 text-xl">
                        {content?.intro2(cityName)}
                    </p>

                    <p className="text-black text-xl">
                        {content?.intro3(cityName)}
                    </p>
                </div>

                <div className="w-full h-full">
                    <img
                        src={content.introImg}
                        alt="Office Workstation"
                        className="w-full h-[28rem] object-cover rounded-lg shadow-lg"
                        style={{ objectPosition: "50% 55%" }}
                    />
                </div>
            </div>
        </section>

        {/* why us */}
        <section className="mx-auto lg:px-16 px-5 py-8 bg-gradient-to-b from-gray-50 to-gray-100">
            <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-6">
                {content?.whyChooseHeading(cityName)}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {content?.whyChoose(cityName).map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={i}
                            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-5 relative overflow-hidden cursor-pointer hover:-translate-y-3"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            <div className="relative z-10 place-items-center mb-4">
                                <Icon
                                    size={40}
                                    className="text-amber-500 group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            <h3 className="font-semibold text-xl mb-2 relative z-10">
                                {item.title}
                            </h3>
                            <p className="text-black text-base relative z-10 leading-relaxed">
                                {item.desc}
                            </p>

                            <span className="absolute bottom-0 left-0 h-1 w-0 bg-amber-500 group-hover:w-full transition-all duration-500"></span>
                        </div>
                    );
                })}
            </div>
        </section>

        {/* Details */}
        <section className="mx-auto lg:px-16 px-5 py-8 bg-white">
            <div className="text-center max-w-4xl mx-auto mb-6">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                    {content?.Details(cityName)?.title}
                </h2>
                <p className="text-black text-xl leading-relaxed">
                    {content?.Details(cityName)?.description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content?.Details(cityName)?.sections.map((section, i) => (
                    <div
                        key={i}
                        className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-5 relative overflow-hidden cursor-pointer hover:-translate-y-3"
                    >
                        <h3 className="text-xl font-bold mb-4 text-amber-500">
                            {section.title}
                        </h3>

                        <ul className="space-y-3">
                            {section.points.map((point, j) => (
                                <li key={j} className="flex items-start gap-3 text-black text-lg">
                                    <span className="mt-1 w-2 h-2 rounded-full bg-amber-500"></span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                        <span className="absolute bottom-0 left-0 h-1 w-0 bg-amber-500 group-hover:w-full transition-all duration-500"></span>
                    </div>
                ))}
            </div>
        </section>

        {/* Key features  */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="w-full">
                    <img
                        src={content?.KeyFeatures?.img}
                        alt="Key Features"
                        className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ objectPosition: "50% 55%" }}
                    />
                </div>

                <div>
                    <h3 className="text-3xl md:text-5xl font-bold mb-6">
                        {content?.KeyFeatures?.title}
                    </h3>

                    <ul className="space-y-4 text-black text-lg">
                        {content?.KeyFeatures?.list.map((i) => (
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                                <span>{i}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        {/* Industries */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-white">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-5">
                Industries & Customers We Serve
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {content?.industries.map((i, idx) => {
                    const Icon = i.icon;
                    return (
                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
                            <div className="flex justify-center mb-4">
                                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-600 transition">
                                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition" />
                                </div>
                            </div>
                            <h3 className="font-semibold text-2xl mb-2 text-black">{i?.title}</h3>
                            <p className="text-black text-lg leading-relaxed">
                                {i?.desc}
                            </p>
                        </div>)
                })}
            </div>
        </section>

        {/* Case Study Card */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
            <div className="text-center max-w-5xl mx-auto mb-4">
                <h2 className="text-3xl md:text-5xl font-bold">
                    {content?.caseStudy(cityName)?.title}
                </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-3">
                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Client</span>
                            <p className="text-lg font-semibold">{content?.caseStudy(cityName)?.meta?.client}</p>
                        </div>
                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Location</span>
                            <p className="text-lg font-semibold">{cityName}</p>
                        </div>
                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Project</span>
                            <p className="text-lg font-semibold"> {content?.caseStudy(cityName)?.meta?.project}</p>
                        </div>
                        <div className="">
                            <p className="text-black leading-relaxed">
                                {content?.caseStudy(cityName)?.conclusion}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Scope</span>
                            <ul className="list-disc list-inside text-black space-y-1">
                                {content?.caseStudy(cityName).scope.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-700">
                                        <span className="mt-2 w-2 h-2 bg-amber-500 rounded-full"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Results</span>
                            <ul className="list-disc list-inside text-black space-y-1">
                                {content?.caseStudy(cityName).results.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-700">
                                        <span className="mt-2 w-2 h-2 bg-green-600 rounded-full"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-amber-500  text-white py-5">
            <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="md:text-left text-center">
                    <Link href={"/"} className="text-2xl font-semibold">
                        {categoryName} {cityName}
                    </Link>
                    <p className="md:text-5xl text-4xl font-semibold">
                        +91 9773999082
                    </p>
                    <p className="text-lg text-white">
                        For More Details Contact Us Now!
                    </p>
                </div>

                <div>
                    <a href="tel:+919773999082" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                        Connect Now
                    </a>
                </div>
            </div>
        </section>

        {/* FAQ */}
        <section section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100" >
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-extrabold">
                    {content?.faqs(cityName).title}
                </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
                {content?.faqs(cityName).items.map((i, idx) => (
                    <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
                        <summary className="flex justify-between items-center font-semibold text-lg">
                            {i?.q}
                            <span className="transition-transform group-open:rotate-180">⌄</span>
                        </summary>
                        <p className="mt-3 text-gray-600 leading-relaxed">
                            {i?.a}
                        </p>
                    </details>
                ))}
            </div>
        </section>

        {/* about */}
        <section section className="mx-auto lg:px-15 px-5 py-8" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="w-full h-96">
                    <img
                        src={content?.aboutImg}
                        alt="Best"
                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                    />
                </div>

                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-5">
                        {content?.about(cityName).title}
                    </h2>

                    <p className="text-black mb-4 leading-relaxed text-2xl">
                        {content?.about(cityName).subtitle}
                    </p>
                    <p className="text-black mb-4 leading-relaxed text-2xl">
                        {content?.about(cityName).description}
                    </p>
                </div>
            </div>
        </section>

    </>)
}
