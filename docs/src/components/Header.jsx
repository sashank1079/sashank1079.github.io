import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ padding: '1rem', background: '#f8f9fa', textAlign: 'center' }}>
    <nav>
      <Link to="/">About</Link> |{' '}
      <Link to="/education">Education</Link> |{' '}
      <Link to="/skills">Skills</Link> |{' '}
      <Link to="/experience">Experience</Link> |{' '}
      <Link to="/projects">Projects</Link>
    </nav>
  </header>
);

export default Header;
