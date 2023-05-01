import {FaGithub} from 'react-icons/fa';

function Footer(){
    const curr_year = new Date().getFullYear();

    return (
        <footer className='footer flex-vertical padd-vert'>
                <FaGithub size={40}/>
                <h4>Copyright &copy; {curr_year} All rights reserved.</h4>
        </footer>
    );
}

export default Footer;