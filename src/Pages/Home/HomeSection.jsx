import './HomeSection.css'
import portfolio from '../../assets/images/arrow-up-right-from-square-solid-full.svg';
import contact from '../../assets/images/address-book-regular-full.svg';
import instaicon from '../../assets/images/square-instagram-brands-solid-full2.svg';
import giticon from '../../assets/images/square-github-brands-solid-full.svg';
import discordicon from '../../assets/images/discord-brands-solid-full.svg';
export function HomeSection(){
    return(
        <>
            <section id='Home' className='HomeSection'>
                <div className='hero'>
                    <div className='title1'>Full Stack</div>
                    <div className='title2'>Developer</div>
                    <div className='mini-title'>Computer Science Student</div>
                    <div className='motto'>Exploring tech, designing solutions, and turning visions into code.</div>
                    <div className='current-skillz'>
                        <div>React</div>
                        <div>Javascript</div>
                        <div>Laravel</div>
                        <div>PostgreSQL</div>
                    </div>
                    <div className='abou-cont'>
                        <div>Portfolio
                            <img src={portfolio} alt="image" />
                        </div>
                        <div>Contact
                            <img src={contact} alt="image" />
                        </div>
                    </div>
                    <div className='socio'>
                        <div className='github'>
                            <img src={giticon} alt="image" />
                        </div>
                       
                        <div className='instagram'>
                            <img src={instaicon} alt="image" />
                        </div>
                         <div className='discord'>
                            <img src={discordicon} alt="image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}