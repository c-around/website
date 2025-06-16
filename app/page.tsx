import {HeroSection} from "@/components/sections/HeroSection";
import {ServicesSection} from "@/components/sections/ServicesSection";
import {ContactSection} from "@/components/sections/ContactSection";
import ReviewsSection from "@/components/sections/reviewsSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-zinc-900">
            <HeroSection/>
            <ServicesSection/>
            <ReviewsSection/>
            <ContactSection/>
        </main>
    );
}