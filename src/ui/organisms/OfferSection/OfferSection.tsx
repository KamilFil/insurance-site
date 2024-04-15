import React from "react";
import {Container} from "@/ui/atoms/Container/Container";
import './OfferSection.css'
import {Button} from "@/ui/atoms/Button/Button";
import {CardItem} from "@/ui/molecues/CardItem/CardItem";


interface Props {
    pageWidth: number
}



export const OfferSection:React.FC<Props> = ({pageWidth}) => {
    const dataCard = [
        {
            id:1,
            title: "Ubezpiecz Życie",
            description:"Zabezpiecz przyszłość swoją i bliskich dzięki naszemu elastycznemu ubezpieczeniu na życie, które dostosuje się do każdej sytuacji.",
            image:"insurance-about.jpg",
            link:'tel:00000000'
        },
        {
            id:2,
            title: "Ubezpiecz Dom",
            description:"Chron swój dom przed niespodziewanymi zdarzeniami jak pożar czy włamanie, korzystając z naszej kompleksowej oferty ubezpieczeniowej.",
            image:"insurance-about.jpg",
            link:'tel:00000000'
        },
        {
            id:3,
            title: "Ubezpiecz Auto",
            description:"Zapewnij sobie spokój ducha podczas jazdy, wybierając nasze ubezpieczenie samochodowe, które pokrywa kolizje, kradzieże i uszkodzenia.",
            image:"insurance-about.jpg",
            link:'tel:00000000'
        },
    ]

    return (
        <section className='offer' id={"offer"}>
            <Container size={pageWidth}>
                <div className='offer-items'>
                    {dataCard ? dataCard.map(e => (
                        <CardItem key={e.id} title={e.title} description={e.description} imageName={e.image}>
                            <Button color={'primary'} text={'Skontaktuj się'} link={e.link}/>
                        </CardItem>
                    )) : null}
                </div>
            </Container>
        </section>
 
    )
}