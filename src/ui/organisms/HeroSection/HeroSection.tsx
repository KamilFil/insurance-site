import  React from "react";
import {Container} from "@/ui/atoms/Container/Container";
import './HeroSection.css'
import {Button} from "@/ui/atoms/Button/Button";



interface Props {
    pageWidth: number

}
export const HeroSection:React.FC<Props> = ({pageWidth}) => {
    return (
        <section className='hero'>
            <div className='hero-img'><img src={"/img/insurance-hero.jpg"}/><div className="hero-img-overlay"></div></div>
            <Container size={pageWidth}>
                <div className="hero-content">
                    <h1>InsuraLife</h1>

                        <p>
                        Oferujemy szeroki zakres ubezpieczeń, dostosowanych do Twoich indywidualnych potrzeb.
                        Skontaktuj się z nami już dziś i zobacz, jak łatwo możesz żyć spokojniej.</p>
                    <Button color={'primary2'} text={"Zobacz ofertę"} link={'#offer'}/>
                </div>
                <div></div>
            </Container>
        </section>

    )
}