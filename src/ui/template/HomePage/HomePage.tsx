import {type Metadata} from "next";
import {Header} from "@/ui/organisms/Header/Header";
import {HeroSection} from "@/ui/organisms/HeroSection/HeroSection";
import {AboutUsSection} from "@/ui/organisms/AboutUsSection/AboutUsSection";
import {OfferSection} from "@/ui/organisms/OfferSection/OfferSection";
import {CtaSection} from "@/ui/organisms/CtaSection/CtaSection";
import {Opinion} from "@/ui/organisms/Opinion/Opinion";
import {SeoSection} from "@/ui/organisms/SeoSection/SeoSection";
import {Footer} from "@/ui/organisms/Footer/Footer";

export function generateMetadata(): Metadata {
    return {
        title: 'Ubezpieczenia | InsuraLife.pl',
        description: 'Ubezpieczenia na życie, zdrowotne, majątkowe i inne. Sprawdź ofertę InsuraLife.pl',
        robots: {
            index: false,
            follow: false,
        },
    };
}

const dataOpinion = [
    {
        id: 1,
        name: "Marek L",
        rating: 2,
        opinion:
            "To ubezpieczenie na życie zmieniło moje podejście do planowania przyszłości. Jestem spokojniejszy, wiedząc, że w przypadku niespodziewanych zdarzeń, moja rodzina będzie miała zapewnione wsparcie finansowe.",
        img: "",
    },    {
        id: 1,
        name: "Marek L",
        rating: 2,
        opinion:
            "To ubezpieczenie na życie zmieniło moje podejście do planowania przyszłości. Jestem spokojniejszy, wiedząc, że w przypadku niespodziewanych zdarzeń, moja rodzina będzie miała zapewnione wsparcie finansowe.",
        img: "",
    },
]

export const HomePage = () => {
    const pageWidth = 1200;

    return <>
        <Header pageWidth={pageWidth}/>
        <main>
            <HeroSection pageWidth={pageWidth}></HeroSection>
            <AboutUsSection pageWidth={pageWidth}></AboutUsSection>
            <OfferSection pageWidth={pageWidth}></OfferSection>
            <CtaSection pageWidth={pageWidth}></CtaSection>
            <Opinion opinions={dataOpinion}></Opinion>
            <SeoSection pageWidth={pageWidth}></SeoSection>
        </main>
        <Footer pageWidth={pageWidth}/>
    </>
}