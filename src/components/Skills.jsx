import bookImage from '../images/book.jpg';

const skills = [
  {
    name: "JavaScript",
    img: {bookImage},
  },
  {
    name: "React",
    img: {bookImage},
  },
  {
    name: "HTML",
    img: {bookImage},
  },
  {
    name: "CSS",
    img: {bookImage},
  },
  {
    name: "Git",
    img: {bookImage},
  },
  {
    name: "Sass",
    img: {bookImage},
  },
  {
    name: "WebPack",
    img: {bookImage},
  },
  {
    name: "SQL",
    img: {bookImage},
  },
  {
    name: "SSH",
    img: {bookImage},
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
          </div>
        ))}
      </div>
    </div>
  ) 
}