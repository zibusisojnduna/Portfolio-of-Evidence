import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./assets/w3.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <section style={{margin:"5%", textAlign:"center", backgroundColor:"white", padding:"5%", borderRadius:"10px"}}>
        <h1>My Portfolio</h1>
        <p>Hi, my name is  Zibusiso Nduna, an aspiring web developer with a focus on creating clean, user-friendly websites that provide seamless experiences across all devices. With a strong background in front-end development and a passion for design, I build responsive, fast-loading sites that help businesses thrive online. Browse my projects and feel free to reach out if you’d like to discuss how I can help bring your website vision to life.</p>
      </section>

      <section style={{margin:"5%", textAlign:"center", backgroundColor:"white", padding:"5%", borderRadius:"10px"}}>
        <h1>About Me</h1>
        <p>I have grown up and lived in Pietermaritzburg my whole life. In my spare time I often like to read, play video games and watch sports. My interest in coding began around 2021 when I came across a video explaining how programming works in video game development. A highly motivated, quick-learning, and technically skilled professional with a
solid foundation in modern web and mobile application development,
seeking to transition into the IT sector to further leverage technical expertise
and creative problem-solving abilities. Proficient in React, Node.js, JavaScript,
Redux, and React Native, with hands-on experience in developing dynamic,
user-focused applications.</p>
      </section>

      <section style={{margin:"5%", textAlign:"center", backgroundColor:"white", padding:"5%", borderRadius:"10px"}}>
        <h1>My Skills</h1>
        <p></p>
      </section>

      <section style={{margin:"5%", textAlign:"center", backgroundColor:"white", padding:"5%", borderRadius:"10px"}}>
        <h1>My Work</h1>

      </section>

      <section style={{margin:"5%", textAlign:"center", backgroundColor:"white", padding:"5%", borderRadius:"10px"}}>
        <h1>My Experience</h1>
      </section>

      <section style={{margin:"5%", textAlign:"center", backgroundColor:"white", padding:"5%", borderRadius:"10px"}}>
        <h1>Contacts</h1>
      </section>
    </div>
    </>
  )
}

export default App
