import { Post, Post2, Post3, Post4, Post5 } from '../Post'
import { Story } from '../Story'
import { Sugestao } from '../Sugestão'
import './layout.css'

export function Layout () {

    return (

        <>

            <div id='MainGrid'>

                <div className='PrimeiraColuna' style={{gridArea: "firstColumn"}}>

                    <div className="box1"> 
                
                       <Story />

                    </div>


                    <div className="box1" id='post2'> 
                
                        <Post />

                    </div>

                    <div className="box1" id='post2'> 
                
                        <Post2 />

                    </div>

                    <div className="box1" id='post2'> 
                
                        <Post3 />

                    </div>

                    <div className="box1" id='post2'> 
                
                        <Post4 />

                    </div>

                    <div className="box1" id='post2'> 
                
                        <Post5 />

                    </div>

                </div>

                    <div className="box2" style={{gridArea: "secondColumn"}}> 
                
                        <Sugestao />

                    </div>

            </div>

        </>


    )

}
