import perfil from "../assets/hapvida.webp";

const Header = () => {
    return (
        <div className="header">
            <img
                src={perfil}
                alt="Foto de perfil"
                className="profile"
            />
            <h1>Hapvida</h1>
            <p>Faz bem para você</p>
        </div>
    );
};

export default Header;

