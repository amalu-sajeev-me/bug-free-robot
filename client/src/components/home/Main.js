import Section from "./Section";
import "./main.css";

const intro = `Et mollit labore do commodo culpa incididunt reprehenderit excepteur aliqua. Exercitation et veniam ad consectetur nulla pariatur. Esse culpa nulla exercitation est dolore laboris enim Lorem cillum nostrud enim esse. In est est eu duis exercitation enim pariatur nulla consequat nostrud et. Quis exercitation eiusmod deserunt dolore ad officia eiusmod cillum voluptate ea aliquip voluptate velit. 
Sint incididunt enim cupidatat mollit voluptate. 
Cupidatat do ad commodo esse culpa. 
Commodo deserunt anim sint veniam quis.
Velit voluptate adipisicing est ad. Fugiat minim et elit aliqua minim.
Ad elit aliqua nulla velit eiusmod.
Elit velit tempor aliquip nostrud ullamco magna aute excepteur mollit consectetur reprehenderit veniam.`;

function Main(props) {
  return (
    <div className="main">
      <Section css="intro" h="INTRODUCTION">
        {intro}
      </Section>
      <Section css="welcome" h="welcome note!">
        nice to have you here!
      </Section>
      <Section css="aside" h="">
              <button>join the community</button>
              <br />
        <button>already a member</button>
      </Section>
    </div>
  );
}

export default Main;
