const Footer = () => {
    const yearNow = new Date().getFullYear()
    return ( 
        <footer>
            Copyright { yearNow } Ninjalist
        </footer>
     );
}
 
export default Footer;