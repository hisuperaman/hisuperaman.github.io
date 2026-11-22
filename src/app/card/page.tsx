import type {Metadata} from "next";
import QRCode from "qrcode";
import {BusinessCard} from "@/views";
import {siteUrl} from "@/data/site";

const cardUrl = `${siteUrl}/card/`;

export const metadata: Metadata = {
    title: "Digital Business Card",
    description: "Aman — web developer for small businesses. Websites, maintenance, SEO and digital growth. Request a free call.",
    alternates: {canonical: "/card/"},
    openGraph: {
        title: "Aman — Web Developer for Small Businesses",
        description: "Websites, maintenance, SEO and digital growth. Request a free call.",
        url: "/card/",
        images: ["/images/avatar.jpeg"],
    },
};

export default async function CardPage() {
    const qrSvg = await QRCode.toString(cardUrl, {type: 'svg', margin: 0, errorCorrectionLevel: 'M'});
    return <BusinessCard cardUrl={cardUrl} qrSvg={qrSvg}/>;
}
