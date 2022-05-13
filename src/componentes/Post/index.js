import "./style.css"
import {FiMoreHorizontal} from "react-icons/fi"
import {IoMdHeartEmpty} from "react-icons/io"
import {BsChat} from "react-icons/bs"
import {FiSend} from "react-icons/fi"
import {BsBookmark} from "react-icons/bs"
import {BsEmojiSmile} from "react-icons/bs"
import user1 from '../../images/user1.png'
import user2 from '../../images/user2.png'
import user5 from '../../images/user5.png'
import user6 from '../../images/user6.png'
import post1 from '../../images/post1.jpg'
import post2 from '../../images/post2.jpg'
import post3 from '../../images/post3.jpg'
import post4 from '../../images/post4.jpg'
import heart from '../../images/Vector.png'
import { IconContext } from "react-icons"

export function Post() {
    return (
        <div className="container-geral"> 

            <header className="header-post">
                <div className="infos-post">
                    <img src={user1}/>
                    <p>bryan</p>
                </div>

            <FiMoreHorizontal />
            </header>

        <div className="img-post">
            <img src={post1}/>
        </div>

        <div className="footer-post">

            <IconContext.Provider value={{size: "20px"}}>

                <section className="engagement-post">
                    <div className="icons-1">
                        <div className="icon"> <img src={heart}/> </div>
                        <div className="icon"> <BsChat /> </div>
                        <div className="icon"> <FiSend /> </div>
        
                    </div>

                        <div className="icon"> <BsBookmark /> </div>
                </section>

            </IconContext.Provider>

            <section className="like">
                <span> 61 curtidas </span>
            </section>

            <div className="legend">
                <p>
                    <span>bryan</span> Apenas um exemplo
                </p>
            </div>

            <div className="time-post">
                <time>HÁ 1 HORA</time>
            </div>

            <div className="comment" >

        <div className="fake-comment" >

            <IconContext.Provider value={{size: '25px'}}>
                <div className="icon">
                    <BsEmojiSmile />
                </div>
                
            </IconContext.Provider>

            <input placeholder="Adicione um comentário..." />
        </div>

        <button>Publicar</button>

        </div>

        </div>
        
        
        </div>
    )
}

export function Post2() {
    return (
        <div className="container-geral">

            <header className="header-post">
                <div className="infos-post">
                    <img src={user2}/>
                    <p>rebecca</p>
                </div>

            <FiMoreHorizontal />
            </header>

        <div className="img-post">
            <img src={post2}/>
        </div>

        <div className="footer-post">

            <IconContext.Provider value={{size: "20px"}}>

                <section className="engagement-post">
                    <div className="icons-1">
                        <div className="icon"> <img src={heart}/> </div>
                        <div className="icon"> <BsChat /> </div>
                        <div className="icon"> <FiSend /> </div>
        
                    </div>

                        <div className="icon"> <BsBookmark /> </div>
                </section>

            </IconContext.Provider>

            <section className="like">
                <span> 101 curtidas </span>
            </section>

            <div className="legend">
                <p>
                    <span>rebecca</span> Apenas um exemplo
                </p>
            </div>

            <div className="time-post">
                <time>HÁ 1 HORA</time>
            </div>

            <div className="comment" >

        <div className="fake-comment" >

            <IconContext.Provider value={{size: '25px'}}>
                <div className="icon">
                    <BsEmojiSmile />
                </div>
                
            </IconContext.Provider>

            <input placeholder="Adicione um comentário..." />
        </div>

        <button>Publicar</button>

        </div>

        </div>
        
        
        </div>
    )
}

export function Post3() {
    return (
        <div className="container-geral">

            <header className="header-post">
                <div className="infos-post">
                    <img src={user5}/>
                    <p>joseph</p>
                </div>

            <FiMoreHorizontal />
            </header>

        <div className="img-post">
            <img src={post3}/>
        </div>

        <div className="footer-post">

            <IconContext.Provider value={{size: "20px"}}>

                <section className="engagement-post">
                    <div className="icons-1">
                        <div className="icon"> <img src={heart}/> </div>
                        <div className="icon"> <BsChat /> </div>
                        <div className="icon"> <FiSend /> </div>
        
                    </div>

                        <div className="icon"> <BsBookmark /> </div>
                </section>

            </IconContext.Provider>

            <section className="like">
                <span> 151 curtidas </span>
            </section>

            <div className="legend">
                <p>
                    <span>joseph</span> Apenas um exemplo
                </p>
            </div>

            <div className="time-post">
                <time>HÁ 1 HORA</time>
            </div>

            <div className="comment" >

        <div className="fake-comment" >

            <IconContext.Provider value={{size: '25px'}}>
                <div className="icon">
                    <BsEmojiSmile />
                </div>
                
            </IconContext.Provider>

            <input placeholder="Adicione um comentário..." />
        </div>

        <button>Publicar</button>

        </div>

        </div>
        
        
        </div>
    )
}

export function Post4() {
    return (
        <div className="container-geral">

            <header className="header-post">
                <div className="infos-post">
                    <img src={user6}/>
                    <p>amanda</p>
                </div>

            <FiMoreHorizontal />
            </header>

        <div className="img-post">
            <img src={post4}/>
        </div>

        <div className="footer-post">

            <IconContext.Provider value={{size: "20px"}}>

                <section className="engagement-post">
                    <div className="icons-1">
                        <div className="icon"> <img src={heart}/> </div>
                        <div className="icon"> <BsChat /> </div>
                        <div className="icon"> <FiSend /> </div>
        
                    </div>

                        <div className="icon"> <BsBookmark /> </div>
                </section>

            </IconContext.Provider>

            <section className="like">
                <span> 261 curtidas </span>
            </section>

            <div className="legend">
                <p>
                    <span>amanda</span> Apenas um exemplo
                </p>
            </div>

            <div className="time-post">
                <time>HÁ 1 HORA</time>
            </div>

            <div className="comment" >

        <div className="fake-comment" >

            <IconContext.Provider value={{size: '25px'}}>
                <div className="icon">
                    <BsEmojiSmile />
                </div>
                
            </IconContext.Provider>

            <input placeholder="Adicione um comentário..." />
        </div>

        <button>Publicar</button>

        </div>

        </div>
        
        
        </div>
    )
}



