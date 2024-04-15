import React from "react";
import {Container} from "@/ui/atoms/Container/Container";
import './AboutUsSection.css'
import {Button} from "@/ui/atoms/Button/Button";


interface Props {
    pageWidth: number

}
export const AboutUsSection:React.FC<Props> = ({pageWidth}) => {
    return (
        <section className='about' id="about-us">
            <Container size={pageWidth}>
                <div className='about-content'>
                    <h2>O nas</h2>
                    <p>Urodzeni z pasji do ochrony i wsparcia w kluczowych momentach, oferujemy szeroką gamę ubezpieczeń dostosowanych do indywidualnych potrzeb. Nasze podejście opiera się na zaufaniu i indywidualnej obsłudze, a innowacje i ciągłe słuchanie naszych klientów pozwalają nam zawsze wyznaczać nowe standardy w branży. Misją, która nas napędza, jest nie tylko zapewnienie ochrony, ale także budowanie świadomości ubezpieczeniowej. Z nami możesz czuć się bezpiecznie, w każdym aspekcie Twojego życia.</p>
               <Button text={'Sprawdź opinie'} color={'primary'} link={'#opinion'}/>
                </div>
                <div className='about-img'>
                    <img src={"/img/insurance-about.jpg"}/>
                </div>
            </Container>
        </section>
    )
}