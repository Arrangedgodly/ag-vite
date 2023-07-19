import Logo from '../assets/name-logo.svg';

const Header = () => {
  return (
    <div className="navbar fixed top-0 left-0 bg-base-300 z-50">
      <div className='navbar-start'></div>
      <div className='navbar-center'>
        <img src={Logo} alt="Logo" className="w-250 h-20" />
      </div>
      <div className='navbar-end'></div>
    </div>
  )
}

export default Header;