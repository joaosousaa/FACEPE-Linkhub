import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiSitepoint } from "react-icons/si";
const linksData = [
    { name: "Site Hapvida", url: "https://www2.hapvida.com.br/", icon: <SiSitepoint /> },
    { name: "Whatszap", url: "https://api.whatsapp.com/send/?phone=5585981708231&text=Ol%C3%A1&type=phone_number&app_absent=0", icon: <FaWhatsapp /> },
    { name: "Instagram", url: "https://www.instagram.com/hapvidasaude/", icon: <FaInstagram /> },
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
