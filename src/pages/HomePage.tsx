import velocityGif from '../assets/velocitySkating.gif'
import RecipeForRuin from '../assets/RecipeForRuin.png'
import landingPageEF from '../assets/landingpagebetter.png'
import budgetingStatsEF from '../assets/budgeting_page_2.png'
import headshot from '../assets/headshot.jpg'
import linkedInLink from '../assets/linkedIn_account_f.png'
import githubLink from '../assets/github_account_e.png'
import twitterLink from '../assets/twitter_account_f.png'
import type {picture} from '../components/picture.tsx'
import type {video} from '../components/video.tsx'
import Carousel from '../components/carousel.tsx'
import '../App.css'


/**
 * The HomePage component. This holds the home page.
 * This component puts in the structure and content of the site.
 * params: Nothing
 * returns fully constructured component for the app.tsx to assemble with other components.
 */


//This variable contains the union between the interfaces for picture or video and kept as the mediaItem.
export type mediaItem = picture | video;




function Home() {


  const mediaListForEM: mediaItem[] = [];

  const contactItemsList: mediaItem[] = [];


  mediaListForEM.push({
    type:"picture",
    src: landingPageEF,
    alt: "landingpage",
    href: "https://manh9amazing.github.io/finalSpring/html/register.html"

  });

  mediaListForEM.push({
    type:"picture",
    src: budgetingStatsEF,
    alt: "budgeting stats",
    href: "https://manh9amazing.github.io/finalSpring/html/register.html"
  })


  contactItemsList.push({
    type:"picture",
    src: linkedInLink,
    alt: "linkedInlink",
    href: "https://www.linkedin.com/in/andy-nguyen-97658ag/"
  })

  contactItemsList.push({
    type:"picture",
    src: githubLink,
    alt: "linkedInlink",
    href: "https://github.com/andy-N-10010"
  })
  
  contactItemsList.push({
    type:"picture",
    src: twitterLink,
    alt: "twitterLink",
    href: "https://x.com/andy45759650/"
  })
  

  return (
    <>
    <div className="containerForNameAndImage">
    <h1 className="Name">Andy Nguyen</h1>
    <a href="https://www.linkedin.com/in/andy-nguyen-97658ag/" target="_blank">
    <img src={headshot} className="headshot" alt = "my headshot"></img>
    </a>
    </div>

    <div className="containerForTitleAndAboutMeAndProjectsList">
    <h2 className="title">Software Engineer and Computer Scientist</h2>
    <meta name="keywords" content= "Software Engineer and Computer Scientist"></meta>

    <h3>Programming Languages</h3>
    <p>Java, Python, C, C++, C#, TypeScript, Racket, Bash </p>
    <meta name="keywords" content= "Java, Python, C, C++, C#, TypeScript, Racket, Bash"></meta>

    <h3>Frameworks & Tools & API's</h3>
    <p>Unity Game Engine, Unreal Engine 5, Git, MS Visual Studio, Jenkins, ESLint, React, TensorFlow, Keras, Springboot, SQL, Firebase, VIM, Docker, Rep.it </p>
    <meta name="keywords" content= "Unity Game Engine, Unreal Engine 5, Git, MS Visual Studio, Jenkins, ESLint, React, TensorFlow, Keras, Springboot, SQL, Firebase, VIM, Docker, Rep.it"></meta>

    <h3>Skill Set</h3>
    <p>Software Engineering, Data structures and algorithms, Object-Oriented Programming, Test driven development</p>
    <meta name="keywords" content= "Software Engineering, Data structures and algorithms, Object-Oriented Programming, Test driven development"></meta>

    <p>Software Design Patterns, Networking, Artificial Intelligience, Game Engine Programming, Game Design/Development</p>
    <meta name="keywords" content= "Software Design Patterns, Networking, Artificial Intelligience, Game Engine Programming, Game Design/Development"></meta>

    <h3>About me</h3>
    <p className="aboutMeContent">Hello and welcome to my portfolio website. I like building stuff that are cool and fun. My work is geared towards projects that help out too.</p>
    <meta name="description" content= "Hello and welcome to my portfolio website. I like building stuff that are cool and fun. My work is geared towards projects that help out too."></meta>



    <h2 className="projectsListTitle">You can connect to me through my other social media contacts:</h2>
    <h3><a href="https://www.linkedin.com/in/andy-nguyen-97658ag/" target="_blank">https://www.linkedin.com/in/andy-nguyen-97658ag/</a></h3>

    <h3><a href="https://github.com/andy-N-10010" target="_blank">https://github.com/andy-N-10010</a></h3> 

    <h3><a href="https://x.com/andy45759650/" target="_blank">https://x.com/andy45759650/</a></h3>

    <h3>andynguyen373@gmail.com</h3>
    
    <h2 className="projectsListTitle">Projects</h2>

    </div>
    
    <div className="containerForProjectBox">
    <h2 className="projectNameVelocity">VeloCity</h2>

    <a href="https://linktr.ee/watercoolerfish?fbclid=PAZXh0bgNhZW0CMTEAAac0gBfuXAjv84Qd-iyQG1mDJEjVrQ2Hvr7F7d3eJ2q5uFisnW1kTWseV9Y53Q_aem_0vsKZtaveBs_5fhrQdOf8Q" target="_blank">
    <img src={velocityGif} className="Velocity gif logo" alt="Velocity gif" />
    </a>

    <p className="projectContent">This is a multiplayer beat-em-up rollerskating game. I'm the lead programmer for 6 people in my group in addition to the other members of the art department. We worked in C++ and blueprints within the Unreal Engine. If you want to try out the game, it can be found <a href="https://linktr.ee/watercoolerfish?fbclid=PAZXh0bgNhZW0CMTEAAac0gBfuXAjv84Qd-iyQG1mDJEjVrQ2Hvr7F7d3eJ2q5uFisnW1kTWseV9Y53Q_aem_0vsKZtaveBs_5fhrQdOf8Q" target="_blank">here</a>. </p>
    
    </div>

    <div className="containerForProjectBox">
    <h2 className="projectNameRFR">Recipe For Ruin</h2>

    <a href="https://totally-legit-game-studio.com/index.html" target="_blank">
    <img src={RecipeForRuin} className="recipe for ruin logo" alt="Recipe for ruin logo"></img>
    </a>

    <p className="projectContent">This is a Top Down Action-Adventure rougelike created in Unity. I worked with 18 others as the programmer. I made the mini map game mechanic and helped debug. I was also the main playtester for the game. This meant that I made unit tests and stress tested the game so it could be safe to play without breaking unexpectedly. If you want to give the game a try, you can find it <a href="https://totally-legit-game-studio.com/index.html" target="_blank">here</a>. </p>


    </div>

    <div className="containerForProjectBox">


    <h2 className="projectNameEM">Effcient Money</h2>


    <Carousel items = {mediaListForEM}></Carousel>

    <p className="projectContent">This is a website about practical ways to help you manage your money. I was the product owner and front end developer for this. I worked with 3 other people with a total team of 4 in which I directed the vision of the project for the team. It used firebase as the backend and html/css/javascript as the frontend. If you want to try this site for yourself, find it <a href="https://manh9amazing.github.io/finalSpring/html/register.html" target="_blank">here</a>. </p>


    <div className="containerForProjectBox">

    <h2 className="projectNameLinks">Links:</h2>
    
    <Carousel items = {contactItemsList}></Carousel>


    <p className="projectContent">If you liked my work and want to work together or contact me, you can find me at the links attached to the images. Thank you for visiting! </p>

    
    </div>


    </div>

    </>
  )
}

export default Home
