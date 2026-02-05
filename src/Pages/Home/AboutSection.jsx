import './AboutSection.css'
import star from '../../assets/images/star.png';
import book from '../../assets/images/book.png';
import dev  from '../../assets/images/development.png';


export function AboutSection(){
    return(
           <>
        <section id='About' className='AboutSection'> 
          <div className='about-header'>About Me</div>
          <p>
          Hello, I’m Ben , a computer science student and full-stack developer
          passionate about exploring technology and building web applications.
          I’ve been learning full-stack development and experimenting with different tools
          exploring new technologies to improve my skills. Focused on learning and growth, I aim
          to expand my knowledge, challenge myself, and develop practical experience
          while preparing for a career in tech.
          </p>
          <div className='about-cards'>
             <div className='a-card'>
                <img src={star} alt="image" />
                <div className='about-card-header'>Full stack focused</div>
                <div className='card-info-about'><code>Building modern client-side and server-side web applications</code></div>
             </div>
             <div className='a-card'>
                  <img src={book} alt="book" />
                  <div className='about-card-header'>Diploma Student</div>
                  <div className='card-info-about'><code>Learning through hands-on practice, projects, and real-world use cases.</code></div>

             </div>
             <div className='a-card'>
                <img src={dev} alt="dev" />
               <div className='about-card-header'>Future-Oriented</div>
               <div className='card-info-about'><code>Continuously growing my skills and adapting to modern development tools.</code></div>
             </div>
          </div>
        </section>
    </>
    )
 
}

