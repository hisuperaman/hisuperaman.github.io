import {portfolio} from "@/data/portfolio";
import {siteUrl} from "@/data/site";

export const dynamic = "force-static";

export const GET = () => {
    const vCard = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${portfolio.identity.name}`,
        `N:;${portfolio.identity.name};;;`,
        'TITLE:Web Developer for Small Businesses',
        `EMAIL;TYPE=INTERNET:${portfolio.contact.email}`,
        `URL:${siteUrl}/services/`,
        'NOTE:Websites\\, maintenance\\, SEO and digital growth for small businesses.',
        'END:VCARD',
    ].join('\r\n');

    return new Response(vCard, {headers: {'Content-Type': 'text/vcard; charset=utf-8'}});
};
