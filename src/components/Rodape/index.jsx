import './Rodape.css';
import facebookLogo from '/images/fb.png';
import twitterLogo from '/images/tw.png';
import instagramLogo from '/images/ig.png';
import logo from '/images/logo.png';

const Rodape = () => {
    return (
        <footer className='rodape'>
            <ul className='redes-sociais'>
                <li><a href="https://facebook.com"><img src={facebookLogo} alt="Imagem com a logo do facebook que leva o usuário para o deles." /></a></li>
                <li><a href="https://twitter.com"><img src={twitterLogo} alt="Imagem com a logo do twitter que leva o usuário para o deles." /></a></li>
                <li><a href="https://instagram.com"><img src={instagramLogo} alt="Imagem com a logo do instagram que leva o usuário para o deles." /></a></li>
            </ul>
            <img src={logo} alt="" />
            <p>Desenvolvido por Alura.</p>
        </footer>
    )
}

export default Rodape