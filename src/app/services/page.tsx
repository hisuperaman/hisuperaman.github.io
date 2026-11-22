import type {Metadata} from "next";
import {Services} from "@/views";
import {serviceAreas} from "@/data/services";

export const metadata: Metadata = {
    title: "Affordable Website Design & SEO for Small Businesses in Mandi",
    description: "Web developer in Mandi, Himachal Pradesh. I build, maintain and optimise affordable websites for local small businesses — website design, local SEO, Google Business Profile and digital growth. Free consultation.",
    keywords: [
        "web developer in Mandi",
        "website design Mandi",
        "website developer Himachal Pradesh",
        "small business website",
        "affordable website design",
        "affordable website maintenance",
        "local SEO services",
        "SEO services Mandi",
        "Google Business Profile setup",
        "website maintenance services",
        "digital marketing for small business",
        ...serviceAreas.map((area) => `website design ${area}`),
    ],
    alternates: {canonical: "/services/"},
    openGraph: {
        title: "Websites, SEO & digital growth for small businesses in Himachal",
        description: "Fast, modern websites, local SEO and Google Business Profile setup for small businesses in Mandi and across Himachal Pradesh.",
        url: "/services/",
        type: "website",
    },
};

export default Services;
