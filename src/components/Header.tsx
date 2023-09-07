import Logo from '../assets/name-logo.svg';
import TTNE from "../assets/ttne.png";
import { SiApplemusic, SiSpotify, SiSoundcloud, SiYoutubemusic, SiInstagram } from 'react-icons/si';

const Header = () => {
  return (
    <div className="navbar fixed top-0 left-0 bg-base-300 z-50">
      <div className='navbar-start'></div>
      <div className='navbar-center flex flex-col m-1'>
        <img src={Logo} alt="Logo" className="w-250 h-20" />
        <div className="flex flex-row items-center justify-center mt-2 gap-10">
          <a href="https://music.apple.com/us/artist/arranged-godly/1458058829" target="_blank" rel="noreferrer">
            <SiApplemusic className="w-10 h-10 text-base-content fill-red-500 bg-white rounded-xl shadow-xl" />
          </a>
          <a href="https://open.spotify.com/artist/6fU2oYGFt9cpE6lZqvn2pI?si=lQxMBmXEQOqmaMyuhKswJg" target="_blank" rel="noreferrer">
            <SiSpotify className="w-10 h-10 text-base-content fill-green-500 bg-black rounded-3xl shadow-xl" />
          </a>
          <a href="https://soundcloud.com/arrangedgodly" target="_blank" rel="noreferrer">
            <SiSoundcloud className="w-10 h-10 text-base-content fill-orange-500 bg-white rounded-lg shadow-xl" />
          </a>
          <a href="https://music.youtube.com/channel/UCQc6xJJvsDmFtbdg4CO0ohw?si=3komBTu1TbwiH12S" target="_blank" rel="noreferrer">
            <SiYoutubemusic className="w-10 h-10 text-base-content fill-red-500 bg-white rounded-3xl shadow-xl" />
          </a>
          <a href="https://www.instagram.com/arrangedgodly/" target="_blank" rel="noreferrer">
            <SiInstagram className="w-10 h-10 text-base-content fill-pink-500 bg-white rounded-xl shadow-xl" />
          </a>
        </div>
      </div>
      <div className='navbar-end'></div>
    </div>
  )
}

export default Header;