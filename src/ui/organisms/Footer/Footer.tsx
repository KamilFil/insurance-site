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
                        <h3>Ubezpieczenia</h3>
                        <ul>
                            <li>Ubezpieczenia autp</li>
                            <li>Ubezpieczenia na życie</li>
                            <li>Ubezpieczenia domu</li>
                        </ul>
                    </div>
                    <div className="footer-content-item">
                        <h3>Kontakt</h3>
                        <ul>
                            <li>Telefon: 000-000-000</li>
                            <li>Email: kontakt@insuralife.pl</li>
                        </ul>
                    </div>
                </div>
            </Container>
            <div className="footer-copy"><p>InsuraLife © 2024 - <a href={'https://kamil-filip.pl'}>Kamil Filip</a> </p></div>
        </footer>
    )
}