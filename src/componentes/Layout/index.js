import { Post, Post2, Post3, Post4 } from '../Post'
import { Story } from '../Story'
import { Suggestion } from '../Suggestion'
import './style.css'

export function Layout() {
    return (
        <>

        <div className="MainGrid">  

            <div className="first-column" style={{gridArea: "firstColumn"}}>
                <div className="box-story">
                    <Story />
                </div>

                <div className="box" style={{margin: "30px 0px"}}>
                    <Post /> <Post2 /> <Post3 /> <Post4 />
                </div>
            </div>

            <div style={{gridArea: "secondColumn"}}>

                <div className="suggestionBox">
                    <Suggestion />
                </div>

            </div>

        </div>
        </>

        


    )
};