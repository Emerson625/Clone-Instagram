import './story.css'
import Emissu2 from './imgs/Eu.jpeg' 
import Cbum from './imgs/Cbum.jpg'
import Leanbeef from './imgs/leanbeef.jpg'
import Ramon from './imgs/Ramon.jpg'
import Lebron from './imgs/lebron.jpg'
import Proa from './imgs/proa.png'

export function Story () {

    return (

        <div className='container'>

            <div className='usuarios'>

                <div>
                    <img className='foto_usuario' src={Cbum}/>
                </div>

                <p>cbum</p>
                
            </div>

            <div className='usuarios'>

                <div>
                    <img className='foto_usuario' src={Emissu2}/>
                </div>

                <p>eminho</p>

            </div>

            <div className='usuarios'>

                <div>
                    <img className='foto_usuario' src={Leanbeef}/>
                </div>

                <p>leanbeefpatty</p>

            </div>

            <div className='usuarios'>

                <div>
                    <img className='foto_usuario' src={Ramon}/>
                </div>

                <p>ramondino</p>

            </div>

            <div className='usuarios'>

                <div>
                    <img className='foto_usuario' src={Lebron}/>
                </div>

                <p>lebron</p>

            </div>

            <div className='usuarios'>

                <div>
                    <img className='foto_usuario' src={Proa}/>
                </div>

                <p>proa</p>

            </div>
        
        
        </div>


    )

}