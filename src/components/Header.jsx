import perfil from "../assets/elevare.png";

const Header = () => {
    return (
        <div className="header">
            <img
                src={perfil}
                alt="Foto de perfil"
                className="profile"
            />
            <h1>ELEVARE</h1>
        </div>
    );
};

export default Header;

