import { useEffect, useState } from 'react'
import './style.css'
import perfil from "../../images/foto-perfil.png"

export function Suggestion() {  

    return (
        <div className="container-suggestion">
            <div className="header-suggestion" >
                <img src={perfil} />

                <div className="user-infos-suggestion">

                    <div className="infos" >
                        <span>eduolv</span>
                        <p>Eduardo Oliveira</p>
                    </div>

                    <button className="switch" >Mudar</button>

                </div>
            </div>

            <div className="header-main-suggestion" >

                <span> 300 Seguidores </span>
                <span> 100 Seguindo </span>
                <span> 22 Publicações </span>
                
            </div>

            <footer className="footer-suggestion" >
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                <p>&copy; 2022 INSTAGRAM FROM META</p>

            </footer>
        </div>
    )
}