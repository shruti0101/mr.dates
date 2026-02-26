import {
    Leaf,
    ShieldCheck,
    Package,
    IndianRupee,
    Truck,
    Store,
    Hotel,
    Factory,
    Gift,
    Home
} from "lucide-react";
import Link from "next/link";

export const categoryCityContent = {
    "dry-figs-supplier-in": {
        mainImg: "/anjeer.webp",
        h2: (city) => `Premium Dry Figs Supplier in ${city}`,
        intro: (city) => (
            <>
                Mr. Dates is a trusted{" "}
                <Link
                    href={`/categories/dry-figs`}
                    className="text-amber-500 font-semibold hover:underline"
                >
                    Dry Figs Supplier
                </Link>{" "}
                in {city}, offering premium-quality dried figs (Anjeer) sourced from the finest growing regions.
                We cater to wholesalers, retailers, hotels, restaurants, gifting companies, sweet manufacturers, and individual buyers across {city}.
            </>
        ),
        intro2: (city) => `We specialize in high-grade dry figs known for their natural sweetness, soft chewy texture, rich flavor, and high nutritional value. Our dry figs are carefully selected, hygienically processed, and quality-checked to ensure freshness, purity, and long shelf life.`,
        intro3: (city) => `From daily nutrition to festive gifting and bulk trade supply, Mr. Dates delivers consistent quality and reliable service, making us a preferred dry figs supplier in ${city}.`,
        introImg: "/products/anjeer.webp",

        whyChooseHeading: (city) => `Why Choose Mr. Dates for Dry Figs in ${city}?`,
        whyChoose: (city) => [
            {
                title: "Premium Quality Dry Figs",
                desc: "We source naturally sweet, fiber-rich, and properly dried figs with uniform size and texture.",
                icon: Leaf
            },
            {
                title: "Hygienic Processing & Packaging",
                desc: "Our dates are cleaned, sorted, and packed using food-grade materials to maintain freshness and hygiene.",
                icon: ShieldCheck
            },
            {
                title: "Bulk & Retail Supply",
                desc: "We supply dry figs in wholesale cartons, bulk packs, and retail-friendly packaging for business and personal needs.",
                icon: Package
            },
            {
                title: "Competitive Wholesale Pricing",
                desc: "As a dedicated dry fruit supplier, we offer transparent and competitive pricing without compromising on quality.",
                icon: IndianRupee
            },
            {
                title: `Trusted Across ${city}`,
                desc: "Retailers, dry fruit traders, sweet shops, hotels, and households rely on us for consistent supply and timely delivery.",
                icon: Truck
            }],

        Details: (city) => ({
            title: `Dry Figs Supplier in ${city}, India`,
            description: (
                <>
                    Mr. Dates is among the leading suppliers of{" "}
                    <Link
                        href={`/categories/dry-figs`}
                        className="font-bold hover:underline"
                    >
                        dry figs in {city}
                    </Link>{" "}
                    delivering premium anjeer that meets modern food safety and hygiene standards..
                </>
            ),

            sections: [
                {
                    title: "With strong sourcing and supply chain management, we ensure:",
                    points: [
                        "Year-round availability",
                        "Proper moisture-controlled storage",
                        "Hygienic handling & packaging",
                        `Timely delivery across ${city}`
                    ]
                },
                {
                    title: "Every batch of dry figs undergoes quality inspection for:",
                    points: [
                        "Size & uniformity",
                        "Softness & texture",
                        "Natural sweetness",
                        "Shelf life"
                    ]
                },
                {
                    title: "Our dry figs are ideal for:",
                    points: [
                        "Retail & wholesale dry fruit stores",
                        "Hotels, restaurants & catering services",
                        "Sweet manufacturers & bakeries",
                        "Corporate & festive gifting",
                        "Household consumption"
                    ]
                }
            ]
        }),

        KeyFeatures: {
            title: `Key Features of Our Dry Figs`,
            img: `/products/mirnut.webp`,

            list: [
                "Premium-grade, handpicked figs",
                "Naturally sweet and fiber-rich",
                "Soft, chewy texture",
                "High in calcium, iron & antioxidants",
                "No artificial preservatives",
                "Available in bulk and retail packs",
                "Long shelf life with proper storage",
            ]
        },

        industries: [
            {
                title: "Retailers & Wholesalers",
                desc: "Reliable bulk dry figs supply for grocery and dry fruit stores.",
                icon: Store
            },
            {
                title: "Hotels & Restaurants",
                desc: "High-quality dry figs for desserts, breakfast buffets, and culinary preparations.",
                icon: Hotel
            },
            {
                title: "Sweet & Bakery Manufacturers",
                desc: "Ideal ingredient for sweets, cakes, energy bars, and confectionery.",
                icon: Factory
            },
            {
                title: "Corporate & Festive Gifting",
                desc: "Premium dry fruit gift boxes with customizable dry fig packaging.",
                icon: Gift
            },
            {
                title: `Households`,
                desc: "Fresh and nutritious dry figs for daily health and festive occasions.",
                icon: Home
            }
        ],

        caseStudy: (city) => ({
            title: `Case Study: Bulk Dry Figs Supply for ${city} Festive Season`,

            meta: {
                client: "Dry Fruit Wholesale Distributor",
                location: `${city}`,
                project: "Festive Season Bulk Dry Figs Supply"
            },

            scope: [
                "Bulk supply of premium-grade dry figs",
                "Customized festive packaging",
                "Timely delivery during peak season"
            ],

            results: [
                "High retailer satisfaction",
                "Zero quality complaints",
                "Increased festive sales",
                "Long-term supply partnership"
            ],

            conclusion: `This project highlights Mr. Dates’ reliability as a premium dry figs supplier in ${city}.`
        }),

        faqs: (city) => ({
            title: `Dry Figs Supplier in ${city} – FAQs`,

            items: [
                {
                    q: "What types of dry figs do you supply?",
                    a: "We supply premium-quality soft and standard-grade dried figs suitable for retail and wholesale use."
                },
                {
                    q: `Do you supply dry figs in bulk in ${city}?`,
                    a: `Yes, we specialize in bulk and wholesale dry figs supply across ${city}.`
                },
                {
                    q: "Are your dry figs hygienically packed?",
                    a: "Yes, all products are processed and packed under strict hygiene standards."
                },
                {
                    q: "Do you provide dry figs for gifting?",
                    a: "Yes, we offer customized dry fruit gift packs including premium dry figs."
                },
                {
                    q: `Do you deliver across ${city}?`,
                    a: `Yes, we ensure timely delivery across ${city}.`
                }
            ]
        }),

        about: (city) => ({
            title: `Looking for a Reliable Dry Figs Supplier in ${city}?`,

            subtitle: "Contact Mr. Dates today for pricing, samples, bulk orders, or customized packaging solutions.",

            description: `We help you choose the right grade, packaging type, and quantity of premium dry figs (Anjeer), perfectly suited for retail, wholesale, gifting, and household needs across ${city}.`
        }),

        aboutImg: "/products/afgan-figs.webp",
    },

    "kalmi-dates-supplier-in": {
        mainImg: "/bg3.webp",
        h2: (city) => `Premium Kalmi Dates Supplier in ${city}`,
        intro: (city) => (
            <>
                Mr. Dates is a trusted{" "}
                <Link
                    href={`/categories/kalmi-dates`}
                    className="text-amber-500 font-semibold hover:underline"
                >
                    Premium Kalmi Dates Supplier
                </Link>{" "}
                in {city}, premium-quality Kalmi dates sourced from reputed farms and trusted suppliers. We cater to wholesalers, retailers, supermarkets, hotels, sweet manufacturers, gifting companies, and individual buyers across {city}.
            </>
        ),
        intro2: (city) => `We specialize in high-grade Kalmi dates known for their medium size, soft texture, natural sweetness, and excellent nutritional value. Our Kalmi dates are carefully sorted, graded, and hygienically packed to ensure consistent quality, freshness, and long shelf life.`,
        intro3: (city) => `From daily retail demand to festive bulk supply, Mr. Dates delivers reliable service and premium products, making us a preferred Kalmi dates supplier in ${city}.`,
        introImg: "/products/KingKalmi.webp",

        whyChooseHeading: (city) => `Why Choose Mr. Dates for Kalmi Dates in ${city}?`,
        whyChoose: (city) => [
            {
                title: "Premium Quality Kalmi Dates",
                desc: "We supply naturally sweet, soft-textured Kalmi dates with uniform size and appealing appearance.",
                icon: Leaf
            },
            {
                title: "Hygienic Processing & Packaging",
                desc: "Our dates are cleaned, sorted, and packed using food-grade materials to maintain freshness and hygiene.",
                icon: ShieldCheck
            },
            {
                title: "Bulk & Retail Supply",
                desc: "Available in wholesale cartons, bulk packs, and retail-friendly packaging for different business needs.",
                icon: Package
            },
            {
                title: "Competitive Wholesale Pricing",
                desc: "We offer transparent and competitive pricing suitable for traders, retailers, and distributors.",
                icon: IndianRupee
            },
            {
                title: `Reliable Supply Across ${city}`,
                desc: "Consistent availability and timely delivery ensure smooth business operations for our clients.",
                icon: Truck
            }],

        Details: (city) => ({
            title: `Kalmi Dates Supplier in ${city}, India`,
            description: (
                <>
                    Mr. Dates is among the leading suppliers of{" "}
                    <Link
                        href={`/categories/kalmi-dates`}
                        className="font-bold hover:underline"
                    >
                        Kalmi Dates Supplier in {city}
                    </Link>{" "}
                    providing premium-quality dates that meet modern food safety standards.
                </>
            ),

            sections: [
                {
                    title: "We ensure:",
                    points: [
                        "Careful grading and sorting",
                        "Moisture-controlled storage",
                        "Hygienic handling and packaging",
                        `On-time delivery across ${city}`
                    ]
                },
                {
                    title: "Every batch of Kalmi dates undergoes quality checks for:",
                    points: [
                        "Size & uniformity",
                        "Softness & texture",
                        "Natural sweetness",
                        "Shelf life"
                    ]
                },
                {
                    title: "Our Kalmi dates are ideal for:",
                    points: [
                        "Retail & wholesale dry fruit stores",
                        "Supermarkets & grocery chains",
                        "Hotels & catering services",
                        "Sweet shops & bakeries",
                        "Corporate & festive gifting"
                    ]
                }
            ]
        }),

        KeyFeatures: {
            title: `Key Features of Our Kalmi Dates`,
            img: `/products/kalmi1.webp`,

            list: [
                "Premium-grade, handpicked dates",
                "Naturally sweet and fiber-rich",
                "Rich taste and uniform appearance",
                "High in fiber and essential nutrients",
                "No artificial additives",
                "Available in bulk and retail packs",
                "Long shelf life with proper storage",
            ]
        },

        industries: [
            {
                title: "Retailers & Wholesalers",
                desc: "Regular bulk supply for dry fruit and grocery businesses.",
                icon: Store
            },
            {
                title: "Hotels & Restaurants",
                desc: "Retail-ready Kalmi date packs for shelf display.",
                icon: Hotel
            },
            {
                title: "Sweet & Bakery Manufacturers",
                desc: "Quality ingredient for sweets, desserts, and confectionery.",
                icon: Factory
            },
            {
                title: "Corporate & Festive Gifting",
                desc: "Customized Kalmi date gift packs and premium boxes.",
                icon: Gift
            },
            {
                title: `Households`,
                desc: "Nutritious and delicious dates for daily consumption and festivals.",
                icon: Home
            }
        ],

        caseStudy: (city) => ({
            title: `Case Study: Bulk Kalmi Dates Supply in ${city}`,

            meta: {
                client: "Dry Fruit Distributor",
                location: `${city}`,
                project: "Bulk Kalmi Dates Supply for Retail Network"
            },

            scope: [
                "Large-volume Kalmi dates supply",
                "Customized packaging solutions",
                "Timely delivery during peak season"
            ],

            results: [
                "Strong retailer satisfaction",
                "Consistent product quality",
                "Increased festive sales",
                "Long-term supply partnership"
            ],

            conclusion: `This project highlights Mr. Dates’ reliability as a premium Kalmi dates supplier in ${city}.`
        }),

        faqs: (city) => ({
            title: `Kalmi Dates Supplier in ${city} – FAQs`,

            items: [
                {
                    q: "What are Kalmi dates?",
                    a: "Kalmi dates are soft, medium-sized dates known for their natural sweetness and smooth texture."
                },
                {
                    q: `Do you supply Kalmi dates in bulk?`,
                    a: `YYes, we specialize in bulk and wholesale Kalmi dates supply across ${city}.`
                },
                {
                    q: "Are your Kalmi dates hygienically packed?",
                    a: "Yes, all products are processed and packed under hygienic conditions."
                },
                {
                    q: "Do you provide Kalmi dates for gifting?",
                    a: "Yes, we offer customized and premium Kalmi date gift packaging."
                },
                {
                    q: `Do you deliver across ${city}?`,
                    a: `Yes, we ensure timely delivery across ${city}.`
                }
            ]
        }),

        about: (city) => ({
            title: `Looking for a Reliable Kalmi Dates Supplier in ${city}?`,

            subtitle: "Contact Mr. Dates today for pricing, bulk orders, or customized packaging solutions.",

            description: `We provide premium-quality Kalmi dates perfectly suited for retail, wholesale, gifting, hospitality, and household needs across ${city} markets.`
        }),

        aboutImg: "/products/looseKalmi.webp",
    },

    "kimia-dates-supplier-in": {
        mainImg: "/bg3.webp",
        h2: (city) => `Premium Kimia Dates Supplier in ${city}`,
        intro: (city) => (
            <>
                Mr. Dates is a trusted{" "}
                <Link
                    href={`/categories/kimia-dates`}
                    className="text-amber-500 font-semibold hover:underline"
                >
                    Premium Kimia Dates Supplier
                </Link>{" "}
                in {city}, offering premium-quality Kimia dates sourced from the finest farms. We cater to wholesalers, retailers, hotels, restaurants, gifting companies, and individual buyers across {city}.
            </>
        ),
        intro2: (city) => `We specialize exclusively in high-grade Kimia dates known for their soft texture, rich caramel-like sweetness, glossy appearance, and high nutritional value. Our Kimia dates are carefully selected, hygienically packed, and quality-checked to ensure freshness, moisture balance, long shelf life, and authentic taste.`,
        intro3: (city) => `From daily consumption to festive gifting and bulk trade supply, Mr. Dates delivers consistent quality and reliable supply, making us a preferred Kimia dates supplier in ${city}.`,
        introImg: "/products/kimia6.webp",

        whyChooseHeading: (city) => `Why Choose Mr. Dates for Kimia Dates in ${city}?`,
        whyChoose: (city) => [
            {
                title: "Premium Quality Kimia Dates",
                desc: "We source naturally soft, moist, and fresh Kimia dates known for superior taste and texture.",
                icon: Leaf
            },
            {
                title: "Hygienic Processing & Packaging",
                desc: "Our Kimia dates are processed and packed under strict hygiene standards to retain natural moisture and flavor.",
                icon: ShieldCheck
            },
            {
                title: "Bulk & Retail Supply",
                desc: "We supply Kimia dates in bulk quantities, wholesale cartons, and retail-friendly packaging to suit business and personal requirements.",
                icon: Package
            },
            {
                title: "Competitive Wholesale Pricing",
                desc: "As a dedicated Kimia dates supplier, we offer transparent and competitive pricing without compromising on quality.",
                icon: IndianRupee
            },
            {
                title: `Reliable Supply Across ${city}`,
                desc: "Retailers, dry fruit traders, hotels, sweet shops, and households rely on us for consistent quality and timely delivery.",
                icon: Truck
            }],

        Details: (city) => ({
            title: `Kimia Dates Supplier in ${city}, India`,
            description: (
                <>
                    Mr. Dates is among the leading suppliers of{" "}
                    <Link
                        href={`/categories/kimia-dates`}
                        className="font-bold hover:underline"
                    >
                        Kimia Dates Supplier in {city}
                    </Link>{" "}
                    delivering premium dates that meet modern food safety and hygiene standards.
                </>
            ),

            sections: [
                {
                    title: "With strong sourcing and supply chain management, we ensure:",
                    points: [
                        "Careful grading and sorting",
                        "Moisture-controlled storage",
                        "Hygienic handling and packaging",
                        `On-time delivery across ${city}`
                    ]
                },
                {
                    title: "Every batch of Kimia dates undergoes quality checks for:",
                    points: [
                        "Size & uniformity",
                        "Softness & texture",
                        "Natural sweetness",
                        "Shelf life"
                    ]
                },
                {
                    title: "Our Kimia dates are ideal for:",
                    points: [
                        "Retail & wholesale dry fruit stores",
                        "Supermarkets & grocery chains",
                        "Hotels & catering services",
                        "Sweet shops & bakeries",
                        "Corporate & festive gifting"
                    ]
                }
            ]
        }),

        KeyFeatures: {
            title: `Key Features of Our Kimia Dates`,
            img: `/products/kimia3.webp`,

            list: [
                "Premium-grade, handpicked Kimia dates",
                "Naturally sweet and fiber-rich",
                "Rich taste and uniform appearance",
                "High in fiber and essential nutrients",
                "No artificial additives",
                "Available in bulk and retail packs",
                "Long shelf life with proper storage",
            ]
        },

        industries: [
            {
                title: "Retailers & Wholesalers",
                desc: "Reliable bulk Kimia dates supply for grocery and dry fruit stores.",
                icon: Store
            },
            {
                title: "Hotels & Restaurants",
                desc: "High-quality Kimia dates for buffets, desserts, and culinary preparations.",
                icon: Hotel
            },
            {
                title: "Sweet & Bakery Manufacturers",
                desc: "Perfect ingredient for sweets, cakes, date rolls, and confectionery.",
                icon: Factory
            },
            {
                title: "Corporate & Festive Gifting",
                desc: "Premium Kimia date gift boxes with customized packaging.",
                icon: Gift
            },
            {
                title: `Households`,
                desc: "Fresh, soft Kimia dates for daily nutrition and festive occasions",
                icon: Home
            }
        ],

        caseStudy: (city) => ({
            title: `Case Study: Bulk Kimia Dates Supply for ${city} Festive Season`,

            meta: {
                client: "Dry Fruit Distributor",
                location: `${city}`,
                project: "Festive Season Bulk Kimia Dates Supply"
            },

            scope: [
                "Bulk supply of premium Kimia dates",
                "Customized festive packaging",
                "On-time delivery during peak demand"
            ],

            results: [
                "High retailer satisfaction",
                "Zero quality complaints",
                "Increased festive sales",
                "Long-term supply partnership"
            ],

            conclusion: `This project highlights Mr. Dates’ reliability as a premium Kimia dates supplier in ${city}.`
        }),

        faqs: (city) => ({
            title: `Kimia Dates Supplier in ${city} – FAQs`,

            items: [
                {
                    q: "What are Kimia dates?",
                    a: "Kimia dates are soft, medium-sized dates known for their natural sweetness and smooth texture."
                },
                {
                    q: `Do you supply Kimia dates in bulk?`,
                    a: `Yes, we specialize in bulk and wholesale Kimia dates supply across ${city}.`
                },
                {
                    q: "Are your Kimia dates hygienically packed?",
                    a: "Yes, all products are processed and packed under hygienic conditions."
                },
                {
                    q: "Do you provide Kimia dates for gifting?",
                    a: "Yes, we offer customized and premium Kimia date gift packaging."
                },
                {
                    q: `Do you deliver across ${city}?`,
                    a: `Yes, we ensure timely delivery across ${city}.`
                }
            ]
        }),

        about: (city) => ({
            title: `Looking for a Reliable Kimia Dates Supplier in ${city}?`,

            subtitle: "Contact Mr. Dates today for pricing, bulk orders, or customized packaging solutions.",

            description: `We provide premium-quality Kimia dates perfectly suited for retail, wholesale, gifting, hospitality, and household needs across ${city} markets.`
        }),

        aboutImg: "/products/goldKimia.webp",
    },

    "fresh-dates-supplier-in": {
        mainImg: "/bg3.webp",
        h2: (city) => `Premium Fresh Dates Supplier in ${city}`,
        intro: (city) => (
            <>
                Mr. Dates is a trusted{" "}
                <Link
                    href={`/categories/fresh-dates`}
                    className="text-amber-500 font-semibold hover:underline"
                >
                    Premium Fresh Dates Supplier
                </Link>{" "}
                in {city}, offering premium-quality fresh dates sourced directly from reputed farms and growing regions. We cater to wholesalers, retailers, supermarkets, hotels, restaurants, fruit vendors, and individual buyers across {city}.
            </>
        ),
        intro2: (city) => `We specialize in naturally fresh, soft, and juicy dates known for their rich flavor, natural sweetness, and high nutritional value. Our fresh dates are carefully harvested, sorted, and hygienically packed to maintain optimal moisture, freshness, and shelf life.`,
        intro3: (city) => `From seasonal retail demand to bulk supply for traders and festive markets, Mr. Dates ensures consistent quality and timely delivery, making us a preferred fresh dates supplier in ${city}.`,
        introImg: "/check2.webp",

        whyChooseHeading: (city) => `Why Choose Mr. Dates for Fresh Dates in ${city}?`,
        whyChoose: (city) => [
            {
                title: "Premium Farm-Fresh Quality",
                desc: "We source high-quality fresh dates that are soft, juicy, and naturally sweet.",
                icon: Leaf
            },
            {
                title: "Hygienic Handling & Packaging",
                desc: "Our fresh dates are sorted and packed under hygienic conditions to retain freshness and prevent spoilage.",
                icon: ShieldCheck
            },
            {
                title: "Bulk & Retail Supply",
                desc: "Available in wholesale cartons and retail-friendly packaging to suit different customer needs.",
                icon: Package
            },
            {
                title: "Proper Storage & Freshness Control",
                desc: "We maintain appropriate storage conditions to preserve moisture and taste.",
                icon: IndianRupee
            },
            {
                title: `Trusted Across ${city}`,
                desc: "Fruit traders, supermarkets, hotels, and households rely on us for consistent supply and quality.",
                icon: Truck
            }],

        Details: (city) => ({
            title: `Fresh Dates Supplier in ${city}, India`,
            description: (
                <>
                    Mr. Dates is among the leading suppliers of{" "}
                    <Link
                        href={`/categories/fresh-dates`}
                        className="font-bold hover:underline"
                    >
                        Fresh Dates Supplier in {city}
                    </Link>{" "}
                    delivering premium dates that meet modern food safety and hygiene standards.
                </>
            ),

            sections: [
                {
                    title: "We ensure:",
                    points: [
                        "Direct sourcing from trusted farms",
                        "Careful grading and sorting",
                        "Freshness-controlled storage",
                        `Timely delivery across ${city}`
                    ]
                },
                {
                    title: "Every batch of fresh dates is inspected for:",
                    points: [
                        "Size & uniformity",
                        "Moisture level",
                        "Natural sweetness",
                        "Overall freshness"
                    ]
                },
                {
                    title: "Our fresh dates are ideal for:",
                    points: [
                        "Fruit retailers & wholesale markets",
                        "Supermarkets & grocery chains",
                        "Hotels & catering services",
                        "Ramadan & festive demand",
                        "Household consumption"
                    ]
                }
            ]
        }),

        KeyFeatures: {
            title: `Key Features of Our Fresh Dates`,
            img: `/faq.webp`,

            list: [
                "Premium-grade, handpicked Fresh dates",
                "Rich natural sweetness",
                "High in fiber, vitamins, and minerals",
                "No artificial preservatives",
                "Carefully sorted and graded",
                "Available in bulk and retail packs",
                "Fresh seasonal availability",
            ]
        },

        industries: [
            {
                title: "Retailers & Fruit Vendors",
                desc: "Reliable bulk supply for daily market sales.",
                icon: Store
            },
            {
                title: "Hotels & Restaurants",
                desc: "Premium fresh dates for buffets and desserts.",
                icon: Hotel
            },
            {
                title: "Supermarkets",
                desc: "Attractive, fresh display-quality dates.",
                icon: Factory
            },
            {
                title: "Festive & Seasonal Buyers",
                desc: "High-demand supply during Ramadan and festive seasons.",
                icon: Gift
            },
            {
                title: `Households`,
                desc: "Fresh, nutritious dates for daily health consumption.",
                icon: Home
            }
        ],

        caseStudy: (city) => ({
            title: `Case Study: Bulk Fresh Dates Supply During Festive Season in ${city}`,

            meta: {
                client: "Wholesale Fruit Trader",
                location: `${city}`,
                project: "Seasonal Bulk Fresh Dates Supply"
            },

            scope: [
                "Daily bulk supply of fresh dates",
                "Quality sorting and moisture control",
                "On-time delivery during peak demand"
            ],

            results: [
                "Strong market demand fulfillment",
                "Zero spoilage complaints",
                "Increased festive sales",
                "Continued long-term supply partnership"
            ],

            conclusion: `This project reflects Mr. Dates’ reliability as a trusted fresh dates supplier in ${city}.`
        }),

        faqs: (city) => ({
            title: `Fresh Dates Supplier in ${city} – FAQs`,

            items: [
                {
                    q: `Do you supply seasonal fresh dates in ${city}?`,
                    a: `Yes, we supply premium seasonal fresh dates across ${city}.`
                },
                {
                    q: `Are your fresh dates properly stored?`,
                    a: `Yes, we maintain appropriate storage conditions to preserve freshness and moisture.`
                },
                {
                    q: "Do you supply fresh dates in bulk?",
                    a: "Yes, we specialize in bulk and wholesale fresh dates supply."
                },
                {
                    q: "Are your dates hygienically packed?",
                    a: "Yes, all products are handled and packed under hygienic standards."
                },
                {
                    q: `Do you deliver across ${city}?`,
                    a: `Yes, we ensure timely delivery across ${city}.`
                }
            ]
        }),

        about: (city) => ({
            title: `Looking for a Reliable Fresh Dates Supplier in ${city}?`,

            subtitle: "Contact Mr. Dates today for pricing, bulk orders, or seasonal availability updates.",

            description: `We provide premium-quality fresh dates suitable for retail, wholesale, hospitality, and household consumption across ${city} markets.`
        }),

        aboutImg: "/check/bgcount.webp",
    },

    "packaged-dates-supplier-in": {
        mainImg: "/bg3.webp",
        h2: (city) => `Premium Packaged Dates Supplier in ${city}`,
        intro: (city) => (
            <>
                Mr. Dates is a trusted{" "}
                <Link
                    href={`/categories/packaged-dates`}
                    className="text-amber-500 font-semibold hover:underline"
                >
                    Premium Packaged Dates Supplier
                </Link>{" "}
                in {city}, offering premium-quality hygienically packed dates for retail, wholesale, corporate gifting, and institutional supply across {city}.
            </>
        ),
        intro2: (city) => `We specialize in ready-to-sell packaged dates available in various sizes, box types, and customized branding options. Our dates are carefully sourced, sorted, and packed using food-grade materials to maintain freshness, taste, and nutritional value.`,
        intro3: (city) => `From supermarket shelves to festive gift hampers and bulk distribution, Mr. Dates delivers consistent quality and attractive packaging solutions, making us a preferred packaged dates supplier in ${city}.`,
        introImg: "/products/barariTunisian.webp",

        whyChooseHeading: (city) => `Why Choose Mr. Dates for Packaged Dates in ${city}?`,
        whyChoose: (city) => [
            {
                title: "Premium Quality Dates",
                desc: "We pack only high-grade dates such as Medjool, Ajwa, Kimia, Safawi, and Mabroom varieties.",
                icon: Leaf
            },
            {
                title: "Hygienic & Food-Grade Packaging",
                desc: "Our packaging ensures moisture protection, long shelf life, and product safety.",
                icon: ShieldCheck
            },
            {
                title: "Custom Packaging Solutions",
                desc: "We offer customized packaging for private labeling, corporate gifting, and festive promotions",
                icon: Package
            },
            {
                title: "Bulk & Retail Supply",
                desc: "Available in retail packs (250g, 500g, 1kg) and bulk cartons for wholesalers and distributors.",
                icon: Truck
            },
            {
                title: `Competitive Pricing`,
                desc: "Transparent pricing structure suitable for retailers, supermarkets, and corporate buyers.",
                icon: IndianRupee
            }],

        Details: (city) => ({
            title: `Packaged Dates Supplier in ${city}, India`,
            description: (
                <>
                    Mr. Dates is among the leading suppliers of{" "}
                    <Link
                        href={`/categories/packaged-dates`}
                        className="font-bold hover:underline"
                    >
                        Packaged Dates Supplier in {city}
                    </Link>{" "}
                    delivering ready-to-sell products that meet modern food safety and hygiene standards.
                </>
            ),

            sections: [
                {
                    title: "We ensure:",
                    points: [
                        "Proper sorting and grading",
                        "Sealed moisture-controlled packaging",
                        "Attractive labeling and branding options",
                        `Timely delivery across ${city}`
                    ]
                },
                {
                    title: "Every batch of Packaged dates is inspected for:",
                    points: [
                        "Size & uniformity",
                        "Moisture level",
                        "Natural sweetness",
                        "Overall freshness"
                    ]
                },
                {
                    title: "Our packaged dates are ideal for:",
                    points: [
                        "Supermarkets & grocery chains",
                        "Dry fruit retailers & wholesalers",
                        "Hotels & restaurants",
                        "Corporate gifting companies",
                        "Household consumption"
                    ]
                }
            ]
        }),

        KeyFeatures: {
            title: `Key Features of Our Packaged Dates`,
            img: `/products/sukkari.webp`,

            list: [
                "Premium-grade sorted dates",
                "Hygienically packed in food-grade materials",
                "Air-tight and moisture-protected packaging",
                "Customizable branding options",
                "Long shelf life",
                "Available in multiple weight options",
                "Suitable for retail display and gifting",
            ]
        },

        industries: [
            {
                title: "Retailers & Fruit Vendors",
                desc: "Ready-to-sell packaged dates with barcoding and labeling.",
                icon: Store
            },
            {
                title: "Distributors & Wholesalers",
                desc: "Bulk packaged supply for resale and distribution.",
                icon: Factory
            },
            {
                title: "Corporate & Festive Gifting",
                desc: "Customized branded date boxes for festivals and events.",
                icon: Gift
            },
            {
                title: "Hotels & Catering Services",
                desc: "Neatly packed dates for hospitality and buffet presentation.",
                icon: Hotel
            },
            {
                title: `E-commerce Sellers`,
                desc: "Attractive and durable packaging suitable for online delivery.",
                icon: Home
            }
        ],

        caseStudy: (city) => ({
            title: `Case Study: Packaged Dates Supply for ${city} Supermarket Chain`,

            meta: {
                client: "Retail Supermarket Chain",
                location: `${city}`,
                project: "Private Label Packaged Dates Supply"
            },

            scope: [
                "Custom-branded retail packs",
                "Multiple size variants (250g, 500g, 1kg)",
                "Regular monthly bulk supply"
            ],

            results: [
                "Increased shelf visibility",
                "Strong festive season sales",
                "Positive customer feedback",
                "Ongoing long-term partnership"
            ],

            conclusion: `This project highlights Mr. Dates’ reliability as a professional packaged dates supplier in ${city}.`
        }),

        faqs: (city) => ({
            title: `Packaged Dates Supplier in ${city} – FAQs`,

            items: [
                {
                    q: `What types of packaging do you offer?`,
                    a: `We offer retail pouches, sealed boxes, gift packs, and private-label packaging.`
                },
                {
                    q: `Do you provide customized branding?`,
                    a: `Yes, we offer private labeling and customized packaging solutions.`
                },
                {
                    q: "Are your packaged dates hygienically packed?",
                    a: "Yes, all products are packed using food-grade materials under hygienic conditions."
                },
                {
                    q: "Do you supply packaged dates in bulk?",
                    a: "Yes, we supply both retail-ready packs and bulk packaged cartons."
                },
                {
                    q: `Do you deliver across ${city}?`,
                    a: `Yes, we ensure timely delivery across ${city}.`
                }
            ]
        }),

        about: (city) => ({
            title: `Looking for a Reliable Packaged Dates Supplier in ${city}?`,

            subtitle: "Contact Mr. Dates today for pricing, samples, bulk orders, or customized packaging solutions.",

            description: `We provide high-quality packaged dates tailored for retail shelves, wholesale distribution, gifting, and e-commerce businesses across ${city} markets.`
        }),

        aboutImg: "/products/sagai.webp",
    },
};
