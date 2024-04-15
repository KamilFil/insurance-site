import {Container} from "@/ui/atoms/Container/Container";
import './Footer.css'
type Props = {
    pageWidth: number;

}
export const Footer:React.FC<Props> = ({pageWidth}) => {
    return (
        <footer className='footer'>
            <Container size={pageWidth}>
                <div className="footer-content">
                    <div className="footer-content-item">
                    <div className="footer-content-item-img">
                        <img src={"/img/insura-logo-f.png"}/>
                    </div>
                    </div>
                    <div className="footer-content-item">
                        <h3>Informacje</h3>
                        <ul>
                            <li>O nas</li>
                            <li>Regulamin</li>
                            <li>Polityka Prywatności</li>
                            <li>Polityka Cookies</li>
                        </ul>
                    </div>
                    <div className="footer-content-item">
                        <h3>Ubezpieczenia</h3>
                        <ul>
                            <li>Ubezpieczenia samochodowe</li>
                            <li>Ubezpieczenia zdrowotne</li>
                            <li>Ubezpieczenia na życie</li>
                            <li>Ubezpieczenia domu</li>
                        </ul>
                    </div>
                    <div className="footer-content-item">
                        <h3>Kontakt</h3>
                        <ul>
                            <li>Telefon: 123-456-789</li>
                            <li>Email:</li>
                        </ul>
                    </div>
                </div>
            </Container>
            <div className="footer-copy"><p>Copy</p></div>
        </footer>
    )
}