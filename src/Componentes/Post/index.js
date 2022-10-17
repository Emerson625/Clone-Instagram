import './post.css'
import EuDePreto from './imgs/EuDePreto.jpeg'
import { FiMoreHorizontal } from 'react-icons/fi'
import TheLittles from './imgs/TheLittles.jpeg'
import { FiHeart, FiSend } from 'react-icons/fi'
import { BsChat, BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { AiOutlineSmile } from 'react-icons/ai'
import Papito from './imgs/papito.jpg'
import PaieIrmao from './imgs/PaieIrmao.jpg'
import Ramon from './imgs/Ramon.jpg'
import Olympia from './imgs/tropheuolympia.jpeg'
import Taça from './imgs/taca.jpg'
import Ney from './imgs/ney.jpg'
import Luffy from './imgs/luffy.jpg'
import GolD from './imgs/GolD.jpg'

export function Post () {

    return(

        <>
        
            <header className='cabeçalho'>

                <div className='info-post'>
                    <div className='fundo-perfil'>
                        <img className='foto-post' src={EuDePreto}/>
                    </div>
                    <p>oemissu</p>
                </div>

                <div className='settings'><FiMoreHorizontal /></div>

            </header>

            <div className='imagem-post'>

                <img src={TheLittles} width='469px' height='587'/>

            </div>

            <div className='footer-post'>

                <section className='engajamento-post'>

                    <div className='icon-1'>
                        <div className='icon'>
                            <IconContext.Provider value={{size: '24px'}}>
                            <FiHeart />
                            <BsChat />
                            <FiSend />
                            </IconContext.Provider>
                        </div>
                    </div>

                    <div id='favoritar'>
                    <IconContext.Provider value={{size: '20px'}}>
                    <BsBookmark />
                    </IconContext.Provider>
                    </div>
                </section>

                
                <section className='likes'>
                    <span>21k likes</span>
                </section>


                <div className='legenda'>
                    <p>The<strong> Littles</strong> não param!</p>
                </div>

                <div className='tempo-postado'>
                    <p>5 minutes ago</p>
                </div>

                <div className='comentarios'>
                    <span>
                        <strong>Oracle</strong><p>Precisamos desse time para a nossa empresa para ontem!</p>
                    </span>

                    <span>
                    <strong>BancoPAN</strong><p>Nada disso! Já assinamos com eles. Eles são nossos.</p>
                    </span>

                    <span>
                    <strong>Microsoft</strong><p>You are so funny, boys. They are already mine.</p>
                    </span>
                </div>

                <div className='comentar'>

                    <div className='comentar1'>
                        <IconContext.Provider value={{size: '24px'}}>
                                <AiOutlineSmile />
                        </IconContext.Provider>
                        <input placeholder='Add a comment...'/>
                        
                    </div>
                    <button>Post</button>
                    
                </div>

            </div>
            
        </>
    )

}

export function Post2 () {

    return(

        <>
        
            <header className='cabeçalho'>

                <div className='info-post'>
                    <div id='fundo-perfil'>
                        <img className='foto-post' src={Papito}/>
                    </div>
                    <p>edilson5391</p>
                </div>

                <div className='settings'><FiMoreHorizontal /></div>

            </header>

            <div className='imagem-post'>

                <img src={PaieIrmao} width='469px' height='587'/>

            </div>

            <div className='footer-post'>

                <section className='engajamento-post'>

                    <div className='icon-1'>
                        <div className='icon'>
                            <IconContext.Provider value={{size: '24px'}}>
                            <FiHeart />
                            <BsChat />
                            <FiSend />
                            </IconContext.Provider>
                        </div>
                    </div>

                    <div id='favoritar'>
                    <IconContext.Provider value={{size: '20px'}}>
                    <BsBookmark />
                    </IconContext.Provider>
                    </div>
                </section>

                
                <section className='likes'>
                    <span>25 likes</span>
                </section>


                <div className='legenda'>
                    <p>Saudade dessa época.</p>
                </div>

                <div className='tempo-postado'>
                    <p>48 minutes ago</p>
                </div>

                <div className='comentarios'>
                    <span>
                        <strong>emissu</strong><p>Nossa, quanto tempo! Te amo paizão.</p>
                    </span>

                    <span>
                    <strong>ewertonsebastiao</strong><p>Velhos tempos. Saudade quando vc tinha cabelo.</p>
                    </span>
                    <span>
                    <strong>ewertonsebastiao</strong><p>kkkkk</p>
                    </span>
                    
                </div>

                <div className='comentar'>

                    <div className='comentar1'>
                        <IconContext.Provider value={{size: '24px'}}>
                                <AiOutlineSmile />
                        </IconContext.Provider>
                        <input placeholder='Add a comment...'/>
                        
                    </div>
                    <button>Post</button>
                    
                </div>

            </div>
            
        </>
    )

}

export function Post3 () {

    return(

        <>
        
            <header className='cabeçalho'>

                <div className='info-post'>
                    <div id='fundo-perfil'>
                        <img className='foto-post' src={Ramon}/>
                    </div>
                    <p>ramondinopro</p>
                </div>

               <div className='settings'><FiMoreHorizontal /></div>

            </header>

            <div className='imagem-post'>

                <img src={Olympia} width='469px' height='587'/>

            </div>

            <div className='footer-post'>

                <section className='engajamento-post'>

                    <div className='icon-1'>
                        <div className='icon'>
                            <IconContext.Provider value={{size: '24px'}}>
                            <FiHeart />
                            <BsChat />
                            <FiSend />
                            </IconContext.Provider>
                        </div>
                    </div>

                    <div id='favoritar'>
                    <IconContext.Provider value={{size: '20px'}}>
                    <BsBookmark />
                    </IconContext.Provider>
                    </div>
                </section>

                
                <section className='likes'>
                    <span>300k likes</span>
                </section>


                <div className='legenda'>
                    <p>Podem me aguardar. Esse ano o Olympia é meu!</p>
                </div>

                <div className='tempo-postado'>
                    <p>1 hour ago</p>
                </div>

                <div className='comentarios'>
                    <span>
                        <strong>cbum</strong><p>Did you forget that i'm in this competition?</p>
                    </span>

                    <span>
                    <strong>renato_carinani</strong><p>Vamo, filho! Todo o Brasil está com vc.</p>
                    </span>
                    <span>
                    <strong>ruff_diesel</strong><p>Are you kidding me, bro? haha</p>
                    </span>
                    
                </div>

                <div className='comentar'>

                    <div className='comentar1'>
                        <IconContext.Provider value={{size: '24px'}}>
                                <AiOutlineSmile />
                        </IconContext.Provider>
                        <input placeholder='Add a comment...'/>
                        
                    </div>
                    <button>Post</button>
                    
                </div>

            </div>
            
        </>
    )

}

export function Post4 () {

    return(

        <>
        
            <header className='cabeçalho'>

                <div className='info-post'>
                    <div id='fundo-perfil'>
                        <img className='foto-post' src={Ney}/>
                    </div>
                    <p>neymarjr</p>
                </div>

                <div className='settings'><FiMoreHorizontal /></div>

            </header>

            <div className='imagem-post'>

                <img src={Taça} width='469px' height='587'/>

            </div>

            <div className='footer-post'>

                <section className='engajamento-post'>

                    <div className='icon-1'>
                        <div className='icon'>
                            <IconContext.Provider value={{size: '24px'}}>
                            <FiHeart />
                            <BsChat />
                            <FiSend />
                            </IconContext.Provider>
                        </div>
                    </div>

                    <div id='favoritar'>
                    <IconContext.Provider value={{size: '20px'}}>
                    <BsBookmark />
                    </IconContext.Provider>
                    </div>
                </section>

                
                <section className='likes'>
                    <span>2m likes</span>
                </section>


                <div className='legenda'>
                    <p>Esse ano vai ser tudo nosso!	&#127463;&#127479; &#129393;</p>
                </div>

                <div className='tempo-postado'>
                    <p>23 hour ago</p>
                </div>

                <div className='comentarios'>
                    <span>
                        <strong>mbappe</strong><p>Tu plaisante, n'Est-ce pas?</p>
                    </span>

                    <span>
                    <strong>leomessi</strong><p>&#129319;</p>
                    </span>
                    <span>
                    <strong>cr7</strong><p>	&#129335;</p>
                    </span>
                    
                </div>

                <div className='comentar'>

                    <div className='comentar1'>
                        <IconContext.Provider value={{size: '24px'}}>
                                <AiOutlineSmile />
                        </IconContext.Provider>
                        <input placeholder='Add a comment...'/>
                        
                    </div>
                    <button>Post</button>
                    
                </div>

            </div>
            
        </>
    )

}

export function Post5 () {

    return(

        <>
        
            <header className='cabeçalho'>

                <div className='info-post'>
                    <div id='fundo-perfil'>
                        <img className='foto-post' src={Luffy}/>
                    </div>
                    <p>luffy</p>
                </div>

                <div className='settings'><FiMoreHorizontal /></div>

            </header>

            <div className='imagem-post'>

                <img src={GolD} width='469px' height='587'/>

            </div>

            <div className='footer-post'>

                <section className='engajamento-post'>

                    <div className='icon-1'>
                        <div className='icon'>
                            <IconContext.Provider value={{size: '24px'}}>
                            <FiHeart />
                            <BsChat />
                            <FiSend />
                            </IconContext.Provider>
                        </div>
                    </div>

                    <div id='favoritar'>
                    <IconContext.Provider value={{size: '20px'}}>
                    <BsBookmark />
                    </IconContext.Provider>
                    </div>
                </section>

                
                <section className='likes'>
                    <span>50k likes</span>
                </section>


                <div className='legenda'>
                    <p>Superarei esse homem. Custe o que custar! &#129393;</p>
                </div>

                <div className='tempo-postado'>
                    <p>3 hour ago</p>
                </div>

                <div className='comentarios'>
                    <span>
                        <strong>sanji</strong><p>Descobrirei o All Blue!</p>
                    </span>

                    <span>
                    <strong>teach</strong><p>Só por cima do meu cadáver. HAHA</p>
                    </span>
                    <span>
                    <strong>zoro</strong><p>Vc superará ele, senão não posso ser o maior espadachin!</p>
                    </span>
                    
                </div>

                <div className='comentar'>

                    <div className='comentar1'>
                        <IconContext.Provider value={{size: '24px'}}>
                                <AiOutlineSmile />
                        </IconContext.Provider>
                        <input placeholder='Add a comment...'/>
                        
                    </div>
                    <button>Post</button>
                    
                </div>

            </div>
            
        </>
    )

}