import {Faq, Service} from "@/definitions";
import {Gauge, LayoutTemplate, MapPin, Rocket, Search, Wrench} from "lucide-react";

export const services: Service[] = [
    {
        title: 'Website design & development',
        description: 'A fast, mobile-friendly website that explains what you do and turns visitors into calls, bookings and walk-ins.',
        points: ['Custom design, no cookie-cutter templates', 'Works perfectly on phones', 'Click-to-call, WhatsApp and Google Maps built in'],
        icon: LayoutTemplate,
    },
    {
        title: 'Website maintenance & support',
        description: 'I keep your website updated, secure and online so you can focus on running your business.',
        points: ['Content, price and photo updates', 'Security updates and backups', 'Uptime monitoring and quick fixes'],
        icon: Wrench,
    },
    {
        title: 'Local SEO',
        description: 'Show up when people nearby search for what you sell — "cafe in Mandi", "homestay near Manali", "clinic near me".',
        points: ['Keyword research for your area', 'On-page SEO and structured data', 'Monthly ranking and traffic reports'],
        icon: Search,
    },
    {
        title: 'Google Business Profile & Maps',
        description: 'Get found on Google Maps with a complete, verified profile that earns trust and reviews.',
        points: ['Profile setup and verification', 'Photos, categories and services', 'Review collection strategy'],
        icon: MapPin,
    },
    {
        title: 'Speed, domain & hosting',
        description: 'I handle the technical side — domain, hosting, email and performance — end to end.',
        points: ['Domain and business email setup', 'Fast, reliable hosting', 'Core Web Vitals optimisation'],
        icon: Gauge,
    },
    {
        title: 'Digital growth',
        description: 'Simple tools that bring in more customers: online booking, enquiry forms, analytics and social media integration.',
        points: ['Booking and enquiry forms', 'Google Analytics and Search Console', 'Instagram and WhatsApp integration'],
        icon: Rocket,
    },
];

export const industries = [
    'Cafes & restaurants',
    'Hotels & homestays',
    'Clinics & doctors',
    'Coaching & schools',
    'Retail shops',
    'Salons & gyms',
    'Travel & tour operators',
    'Local service providers',
];

export const processSteps = [
    {title: 'Free consultation', description: 'We talk about your business, your customers and what you want the website to achieve.'},
    {title: 'Plan & design', description: 'I plan the pages and content, then share a design for your feedback before building.'},
    {title: 'Build & launch', description: 'I build the site, set up SEO and Google Business Profile, and take it live on your domain.'},
    {title: 'Maintain & grow', description: 'I keep it updated, monitor rankings and suggest improvements as your business grows.'},
];

export const serviceAreas = [
    'Mandi',
    'Sundernagar',
    'Kullu',
    'Manali',
    'Bilaspur',
    'Hamirpur',
    'Shimla',
    'Dharamshala',
];

export const serviceFaqs: Faq[] = [
    {
        question: 'How much does a small business website cost?',
        answer: 'It depends on the number of pages and features you need — a simple 4–5 page business website costs far less than an online store or booking system. I keep packages affordable for small business budgets — tell me what you need and I will send a clear, fixed quote with no hidden charges.',
    },
    {
        question: 'How long does it take to build a website?',
        answer: 'A typical small business website takes 1–3 weeks from our first conversation to going live, depending on how quickly content like photos and text is ready.',
    },
    {
        question: 'Do you only work with businesses in Mandi?',
        answer: 'I am based in Mandi, Himachal Pradesh and love working with local businesses across Himachal — Sundernagar, Kullu, Manali, Bilaspur, Shimla and more. I also work remotely with small businesses anywhere in India.',
    },
    {
        question: 'Will my website show up on Google?',
        answer: 'Every website I build includes on-page SEO, structured data, a sitemap and Google Search Console setup. For competitive searches, ongoing local SEO and a strong Google Business Profile make the biggest difference.',
    },
    {
        question: 'Can I update the website myself?',
        answer: 'Yes. I can set up an easy way for you to change text and photos, or you can simply message me and I will make the updates as part of a maintenance plan.',
    },
    {
        question: 'Who owns the website and domain?',
        answer: 'You do. The domain, content and website are registered in your name, so you are never locked in.',
    },
];
