import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { FiHeart, FiSend } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import { SlArrowDown } from 'react-icons/sl'
import './style.css'
import Eu from './Imgs/EuDePreto.jpeg'

export function Header() {
    return(

        <header className="header">

            <div className="container">

                <div className='container-logo'>

                    <img className="logo" src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-1.png" alt='Instagram'/>

                    <div id='seta'>
                    <IconContext.Provider value={{size: '10px'}}>
                        <SlArrowDown />
                    </IconContext.Provider>
                    </div>

                </div>

                <div className="fake_input">

                    <IconContext.Provider value={{width: '16px' ,height: '16px', color: '#8E8E8E'}}>

                    <AiOutlineSearch />

                    </IconContext.Provider>

                    <input placeholder='Search' />

                </div>

                <div className='icones'>

                    <IconContext.Provider value={{size:'24px'}}>

                        <div><AiFillHome /> </div>
                        <div><FiSend /> </div>
                        <div><BsPlusSquare /> </div>
                        <div><MdOutlineExplore /> </div>
                        <div><FiHeart /> </div>

                    </IconContext.Provider>

                    <img className='foto-perfil' src={Eu}/>
                </div>

            </div>

        </header>

    )
}