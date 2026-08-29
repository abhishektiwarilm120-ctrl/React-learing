import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './component/card.jsx'






function App() {



const jobs = [
  {
    brandLogo: " https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0.jpg",
    name: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/028/339/965/original/microsoft-icon-logo-symbol-free-png.png",
    name: "Microsoft",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?w=159&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    name: "Amazon",
    datePosted: "3 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "  https://tse1.mm.bing.net/th/id/OIP.MuSIHbtdSslrhqVqi_x-QgHaFD?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: " https://logodix.com/logo/319831.jpg",
    name: "Apple",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$47/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.mos.cms.futurecdn.net/6Vq8z9bYjvy7R4LebLjkwh.jpg",
    name: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo:"https://static.vecteezy.com/system/resources/previews/024/039/095/original/nvidia-logo-transparent-free-png.png",
    name: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.fpuSDCPA7hWj7cTx8QJ2EgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Tesla",
    datePosted: "6 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$44/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: " https://www.sportsvideo.org/wp-content/uploads/2016/04/adobe.gif",
    name: "Adobe",
    datePosted: "10 weeks ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.8cVvfRa7ttYLc-DaFnrO5gHaE4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    name: "Salesforce",
    datePosted: "2 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$49/hour",
    location: "Hyderabad, India"
  }
];



  return (
   






<div className='parent'>

 {jobs.map(function(elem){
  return <Card company={elem.name} postdate={elem.datePosted}   post={elem.post}
  tag1={elem.tag1} tag2={elem.tag2}  pay={elem.pay} location={elem.location}   
  brandlogo={elem.brandLogo}/>
})} 



</div>







  )
}

export default App
