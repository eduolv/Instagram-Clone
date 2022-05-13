import './style.css';
import user1 from '../../images/user1.png'
import user2 from '../../images/user2.png'
import user3 from '../../images/user3.png'
import user4 from '../../images/user4.png'
import user5 from '../../images/user5.png'
import user6 from '../../images/user6.png'
import user7 from '../../images/user7.png'
import user8 from '../../images/user8.png'

export function Story() {
    return (
        <div className='container-story'>

            <div className='user-elements'>
                <div>
                    <img className='image-user-story' src={user1}/>
                </div>

                <span>bryan</span>
            </div>

            <div className='user-elements'>
                <div>
                    <img className='image-user-story' src={user2}/>
                </div>

                <span>rebecca</span>
            </div>

            <div className='user-elements'>
                <div>
                    <img className='image-user-story' src={user3}/>
                </div>

                <span>brian</span>
            </div>
            
            <div className='user-elements'>
                <div>
                    <img className='image-user-story' src={user4}/>
                </div>

                <span>sarah</span>
            </div>

            <div className='user-elements'>
                <div>
                    <img className='image-user-story' src={user5}/>
                </div>

                <span>joseph</span>
            </div>

            <div className='user-elements'>
                <div>
                    <img className='image-user-story' src={user6}/>
                </div>

                <span>amanda</span>
            </div>

            <div className='user-elements'>
                <div>
                    <img className='image-user-story' src={user8}/>
                </div>

                <span>jay</span>
            </div>

            <div className='user-elements'>
                <div>
                    <img className='image-user-story' src={user7}/>
                </div>

                <span>jason</span>
            </div>


        </div>
    )
}