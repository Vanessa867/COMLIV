import './Header.css';


const Header = () => {
  return (
    <header>
      <h1>ComLiv</h1>
      <nav>
        <a href="/">Nutrir</a>
        <a href="/pessoas">Pessoas</a>
        <a href="/livros">Livros</a>
      </nav>
      <div>
        <a href="/cadastrar" className="registro-link">Cadastrar</a>
        <button>Entrar</button>
      </div>
    </header>
  );
};
  
  export default Header;