import './Header.css';

function Header() {
    return (
        <header className='header'>
            <div className='div-logo'>
                <img src="./images/logo.png" alt="Logo" />
                <h2>Furniro</h2>
            </div>
            <div className='div-menu'>
                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className='div-search'>
                <img src="./images/perfil.png" alt="" />
                <img src="./images/lupa.png" alt="" />
                <img src="./images/coracao.png" alt="" />
                <img src="./images/carrinho.png" alt="" />
            </div>
        </header>
    );
}

export default Header;