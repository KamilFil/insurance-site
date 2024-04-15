import React from "react";
import {Container} from "@/ui/atoms/Container/Container";
import './CtaSection.css';
import {CallToAction} from "@/ui/molecues/CallToAction/CallToAction";

interface Props {
    pageWidth: number
}
export const CtaSection:React.FC<Props> = ({pageWidth}) => {

    const ctaData = {
        title:'Skontaktuj się z Nami',
        description:'Odkryj najlepsze ubezpieczenia roku! Twoje zdanie może wszystko zmienić. Przejrzyj naszą starannie dobraną listę ubezpieczeń i oddaj głos na tego, który według Ciebie zasługuje na miano najlepszego.',
    }

    return (
        <section className='cta'>
            <Container size={pageWidth}>
                <CallToAction title={ctaData.title} description={ctaData.description} btnText={"Napisz do nas!"} link={"mailto:kontakt@insuralife.pl"}></CallToAction>
            </Container>
        </section>
    )
}