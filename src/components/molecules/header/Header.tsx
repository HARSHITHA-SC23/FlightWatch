import { Link } from 'react-router-dom';
import './Header.css';
import Typography from '@mui/material/Typography'

type HeaderLink = {
  name: string;
  url: string;
};

type HeaderProps = {
  title: string;
  links: HeaderLink[];
};
function Header({ title, links }: HeaderProps) {
  return (
    <div className='headerContainer'>
      <Typography className='headerTitle' variant="h4">{title}</Typography>
      <nav>
        <ul  className='headerNavLinks'>
          {links.map((link) => (
            <li className='headerLinks'>
              <Link className='headerAnchor' to={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
