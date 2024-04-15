import React from "react";
import {Container} from "@/ui/atoms/Container/Container";
import './SeoSection.css';
import {SeoBox} from "@/ui/molecues/SeoBox/SeoBox";


interface Props {
    pageWidth: number

}
export const SeoSection:React.FC<Props> = ({pageWidth}) => {

    const dataSeo = [
        {
            title:"Jakie zdarzenia są objęte tym ubezpieczeniem i czy istnieją wyłączenia, które powinienem znać?",
            description:"Nasze ubezpieczenie obejmuje szereg zdarzeń, takich jak wypadki, naturalne katastrofy czy kradzież. Ważne jest, aby zwrócić uwagę na wyłączenia, które zazwyczaj dotyczą zdarzeń spowodowanych umyślnie, wojen, katastrof nuklearnych, a także zaniedbań w utrzymaniu zabezpieczonego mienia. Szczegółową listę zdarzeń objętych ochroną i wyłączeń znajdziesz w ogólnych warunkach ubezpieczenia dostępnych w naszej siedzibie lub na stronie internetowej."
        },
        {
            title:"Jakie są procedury w przypadku zgłoszenia szkody i jak długo trwa proces wypłaty odszkodowania?",
            description:"Procedura zgłoszenia szkody jest prosta i można ją rozpocząć telefonicznie lub online. Po zgłoszeniu, nasz rzeczoznawca skontaktuje się z Tobą w celu ustalenia szczegółów i oceny szkody. Staramy się przetwarzać większość zgłoszeń w ciągu 30 dni roboczych od momentu otrzymania wszystkich wymaganych dokumentów. Przy większych szkodach czas ten może się wydłużyć, jednak nasz zespół dokłada wszelkich starań, aby proces przebiegał sprawnie i transparentnie."
        },
        {
            title:"Dlaczego warto skorzystać z ubezpieczenia?",
            description:"Ubezpieczenia są kluczowe dla stabilności finansowej, oferując ochronę przed nieprzewidzianymi wydarzeniami. Dobre ubezpieczenie dostosowuje się do indywidualnych potrzeb, zapewniając spokój ducha i bezpieczeństwo finansowe."
        },
        {
            title:"Czy mogę dostosować zakres ubezpieczenia do moich indywidualnych potrzeb?",
            description:"Tak, oferujemy elastyczne opcje, które pozwalają na dostosowanie zakresu ubezpieczenia do Twoich indywidualnych potrzeb. Możesz wybrać dodatkowe klauzule i rozszerzenia, aby lepiej zabezpieczyć swoje mienie lub zdrowie. Skontaktuj się z naszym doradcą, który pomoże Ci skonfigurować polisę idealnie odpowiadającą Twojej sytuacji."
        }
    ]

    return (
        <section className='seo'>
            <Container size={pageWidth}>
                <h2 className='seo-title'>Najczęściej zadawane pytania?</h2>
                <div className="seo-items">
                    {dataSeo.map((item,i) => (
                    <SeoBox key={i} title={item.title} description={item.description}></SeoBox>
                    ))}
                </div>
            </Container>
        </section>

    )
}