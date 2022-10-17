import './sugestao.css'
import Eu from './imgs/EuDePreto.jpeg'
import Neymar from './imgs/neymar.jpg'
import TheRock from './imgs/therock.jpg'
import MichaelB from'./imgs/MichaelB.jpg'
import Muzy from './imgs/Paulo Muzy03.jpg'
import Hernandes from './imgs/hernandes.jpg'

export function Sugestao () {

    return(

        <>
        
            <div className='cabeçalho-sugestao'>

                <div className='info-perfil'>
                    <img src={Eu} alt='Perfil'/>
                    <span><strong>oemissu</strong><p>Emissu</p></span>
                    
                </div>

                <div className='switch'>

                    <button>Switch</button>

                </div>

            </div>
        
            <div id='sugestoes'>

                <span>
                    <p>Suggestions For you</p> 
                    <strong>See All</strong>
                </span>

            </div>

            <div className='sugestoes'>

                <div className='pessoas-sugeridas'>

                    <img src={Neymar} alt='Neymar'/>

                    <span> 
                        <strong>neymarjr</strong> <p>Follows you</p> 
                    </span>
                
                </div>

                <button>Follow</button>
            </div>

            <div className='sugestoes'>

                <div className='pessoas-sugeridas'>

                    <img src={TheRock} alt='Dwayne Johnson'/>

                    <span> 
                        <strong>therock</strong> <p>Follows you</p> 
                    </span>
                
                </div>

                <button>Follow</button>
            </div>

            <div className='sugestoes'>

                <div className='pessoas-sugeridas'>

                    <img src={MichaelB} alt='Michael B Jordan'/>

                    <span> 
                        <strong>michaelbjordan</strong> <p>Follows you</p> 
                    </span>
                    
                </div>

                <button>Follow</button>

            </div>

            <div className='sugestoes'>

                <div className='pessoas-sugeridas'>

                    <img src={Muzy} alt='Neymar'/>

                    <span> 
                        <strong>paulomuzy</strong> <p>Follows you</p> 
                    </span>
                
                </div>

                <button>Follow</button>
            </div>

            <div className='sugestoes'>

                <div className='pessoas-sugeridas'>

                    <img src={Hernandes} alt='Neymar'/>

                    <span> 
                        <strong>hernandesdiaslopes</strong> <p>Follows you</p> 
                    </span>
                
                </div>

                <button>Follow</button>
            </div>      

            <section className='footer-sugestions'>

                <div className='functions'>

                    <span>

                        <p>About · Help · Press · API · Jobs · Privacy · Terms · Locations Languages </p>

                    </span>

                </div>

                <div className='copyright'>

                    <span>

                        <p>© 2022 INSTAGRAM FROM META</p>

                    </span>

                </div>

            </section>
        
        
        </>




    )


}