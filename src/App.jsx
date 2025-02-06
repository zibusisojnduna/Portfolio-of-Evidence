import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./assets/w3.css"
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";



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
        <p>- I am proficient in the follwoing languages: HTML, CSS, JavaScript, React, Node, React Native, Redux, MongoDB, Express, SQL and Node.js</p>
        <p>- Collaborative skills</p>
        <p>- Effective time managemnt</p>
        <p>- Excellent verbal and written communicatioin skills</p>
        <p>- Strong organizational skills</p>
        <p>- Cross functional team managemnt skills</p>
        <p>- Full computer literacy skills:Microsoft Office</p> 
      </section>

      <section style={{margin:"5%", textAlign:"center", backgroundColor:"white", padding:"5%", borderRadius:"10px"}}>
        <h1>My Projects</h1>
        <p>Here is some of the work I have done over time, feel free to take a look</p>
        
        <div style={{margin:"5%", textAlign:"center", backgroundColor:"whitesmoke", padding:"5%", borderRadius:"10px"}}>
          <p>Name: Social Media Page</p>
          <p>Description: A simple social media page that allows users to post and share content on their own page.</p>
          <p>Technologies Used: HTML, CSS, JavaScript</p>
          <p>Link:<a href=' https://github.com/zibusisojnduna/Social-Media-Page-2'> https://github.com/zibusisojnduna/Social-Media-Page-2</a></p>
        </div>

        <div style={{margin:"5%", textAlign:"center", backgroundColor:"whitesmoke", padding:"5%", borderRadius:"10px"}}>
          <p>Name: Data Form</p>
          <p>Description: A form that allows users to input their personal information.</p>
          <p>Technologies Used: HTML, CSS, JavaScript</p>
          <p>Link: <a href='https://github.com/zibusisojnduna/Data-Form'>https://github.com/zibusisojnduna/Data-Form</a></p>
        </div>

        <div style={{margin:"5%", textAlign:"center", backgroundColor:"whitesmoke", padding:"5%", borderRadius:"10px"}}>
          <p>Name: MongoDB Collections and Documents</p>
          <p>Description: A project that consists of creating a MongoDB database and collections and documents.</p>
          <p>Technologies Used: MongoDB</p>
          <p>Link:<a href='https://github.com/zibusisojnduna/Task-21-MongoDB-Collections-and-Documents'>https://github.com/zibusisojnduna/Task-21-MongoDB-Collections-and-Documents</a></p>
        </div>

        <div style={{margin:"5%", textAlign:"center", backgroundColor:"whitesmoke", padding:"5%", borderRadius:"10px"}}>
          <p>Name: Quiz Application</p>
          <p>Description: An app that allows the user to answer mulitple choice questions.</p>
          <p>Technologies Used: Node</p>
          <p>Link: <a href='https://github.com/zibusisojnduna/Task-13-Quiz-Application'>https://github.com/zibusisojnduna/Task-13-Quiz-Application</a></p>
        </div>

        <p>If you are interested in seeing more of my work, feel free to take a look at my github profile: <a href='https://github.com/zibusisojnduna'>Here</a></p>

      </section>

      <section style={{margin:"5%", textAlign:"center", backgroundColor:"white", padding:"5%", borderRadius:"10px"}}>
        <h1>My Experience</h1>
        <p>Here is a history of some of my experience in the work place:</p>

        <div style={{margin:"5%", textAlign:"center", backgroundColor:"whitesmoke", padding:"5%", borderRadius:"10px"}}>
          <h1>Sasopsbiz</h1>
          <p>January 2022 - October 2023</p>
          <p>Intern</p>
          <p>- Prepared and managed client invoices, ensuring accuracy and timely delivery</p>
          <p>- Maintained and updated the company website, enhancing functionality and user engagement.</p>
          <p>- Performed administrative duties at the reception, including scheduling and communication management</p>
          <p>- Supported the organization and facilitation of business workshops, contributing to successful event execution.</p>
          <p>- Provided technical support to office tenants, resolving IT-related issues promptly and efficiently.</p>
        </div>

        <div style={{margin:"5%", textAlign:"center", backgroundColor:"whitesmoke", padding:"5%", borderRadius:"10px"}}>
          <h1>mLab</h1>
          <p>October 2023 - March 2024</p>
          <p>Trainee</p>
          <p>- Learned the following programming languages: HTML, CSS, JavaScript</p>
          <p>- Gained proficiency in web development, including responsive design, user experience, and front-end development</p>
          <p>- Developed and maintained a portfolio of projects, showcasing my skills in HTML, CSS, JavaScript, and responsive design</p>
          <p>- Collaborated with cross-functional teams to deliver innovative solutions and deliverables</p>
        </div>

        <div style={{margin:"5%", textAlign:"center", backgroundColor:"whitesmoke", padding:"5%", borderRadius:"10px"}}>
          <h1>mLab</h1>
          <p>July 2024 - Present</p>
          <p>Trainee</p>
          <p>- Learned the following programming languages: React, Node js, MongoDB, Express, JavaScript, React Native, Redux</p>
          <p>- Gained proficiency in web development, including responsive design, user experience ,front-end development and back-end development</p>
          <p>- Developed and maintained a portfolio of projects, showcasing my skills in React, Node js, MongoDB, Express, JavaScript, React Native and Redux</p>
          <p>- Collaborated with cross-functional teams to deliver innovative solutions and deliverables</p>
        </div>
      </section>

      <section style={{margin:"5%", textAlign:"center", backgroundColor:"white", padding:"5%", borderRadius:"10px"}}>
        <h1>Contacts</h1>
        <p>If you are interested in contacting me, feel free to reach me at the following platforms:</p>
        <p><MdEmail /> zibusisonduna2001@gmail.com</p>
        <p><FaLinkedin /><a href='www.linkedin.com/in/zibusiso-nduna-943a34300'>www.linkedin.com/in/zibusiso-nduna-943a3430</a></p>
        <p><FaGithub /><a href='https://github.com/zibusisojnduna'>https://github.com/zibusisojnduna</a></p>
      </section>

      <section style={{margin:"5%", textAlign:"center", backgroundColor:"white", padding:"5%", borderRadius:"10px"}}>
        <h1>Thank You!</h1>
        <p>For taking time out of your day to look at my portfolio.</p>
      </section>
    </div>
    </>
  )
}

export default App
