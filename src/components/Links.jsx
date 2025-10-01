import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdAppShortcut, MdComputer } from "react-icons/md";
const linksData = [
    { name: "Protótipo App Motivaé", url: "https://www.figma.com/proto/pJ78BxuSo4PrX4aGUYine1", icon: <MdAppShortcut /> },
    { name: "Protótipo Sistema Motivaé", url: "https://www.figma.com/proto/IFOjEjk6XmJIAviJQbks1N", icon: <MdComputer /> },
    { name: "João Sousa", url: "https://www.linkedin.com/in/jo%C3%A3o-sousa-357292229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ", icon: <FaLinkedin /> },
    { name: "Thayna Pontes", url: "https://www.linkedin.com/in/thainapontes?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ", icon: <FaLinkedin /> },
    { name: "Thiago Andrade", url: "https://www.linkedin.com/in/thiago-andrade-7b306836a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ", icon: <FaLinkedin /> },
];

const Links = () => {
    return (
        <div className="links">
            {linksData.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.icon} {link.name}
                </a>
            ))}
        </div>
    );
};

export default Links;
