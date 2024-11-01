import './Header.css';
import Typography from '@mui/material/Typography'

type Link = {
  name: string;
  url: string;
};

type HeaderProps = {
  title: string;
  links: Link[];
};
function Header({ title, links }: HeaderProps) {
  return (
    <div className='headerContainer'>
      <Typography className='headerTitle' variant="h4">{title}</Typography>
      <nav>
        <ul  className='headerNavLinks'>
          {links.map((link) => (
            <li className='headerLinks'>
              <a className='headerAnchor' href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
