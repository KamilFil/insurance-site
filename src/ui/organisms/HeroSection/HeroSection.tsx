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
                    <p>Chronimy To, Co Najcenniejsze - Twoje Bezpieczeństwo i <br/>Spokój Ducha. Twój Zaufany Partner w Świecie Ubezpieczeń!.</p>
                    <Button color={'primary2'} text={"Zobacz ofertę"} link={'#offer'}/>
                </div>
                <div></div>
            </Container>
        </section>

    )
}