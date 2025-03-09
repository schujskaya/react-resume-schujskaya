const skills = [
  {
    name: "JavaScript",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="height: 100px;color: red;fill: #6d1f15;"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>',
  },
  {
    name: "React",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="height: 100px;color: red;fill: #6d1f15;"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>',
  },
  {
    name: "HTML",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="height: 100px;color: red;fill: #6d1f15;"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>',
  },
  {
    name: "CSS",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="height: 100px;color: red;fill: #6d1f15;"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>',
  },
  {
    name: "Git",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="height: 100px;color: red;fill: #6d1f15;"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>',
  },
  {
    name: "Sass",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="height: 100px;color: red;fill: #6d1f15;"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>',
  },
  {
    name: "WebPack",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="height: 100px;color: red;fill: #6d1f15;"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>',
  },
  {
    name: "SQL",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="height: 100px;color: red;fill: #6d1f15;"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>',
  },
  {
    name: "SSH",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="height: 100px;color: red;fill: #6d1f15;"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>',
  },
];

export function Skills() {
  return (
    <div className="skills">
      <h2>Стек технологий</h2>
      <div className="skills__list">
        {skills.map((skill) => (
          <div className="skills__item" key={skill.name}>            
            <h3>{skill.name}</h3>             
            <div dangerouslySetInnerHTML={{ __html: skill.svg }} />
          </div>          
        ))}
      </div>
    </div>
  ) 
}
