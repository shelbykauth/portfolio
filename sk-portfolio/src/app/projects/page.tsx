import ProjectCard from "./project-card";

const projectList: Project[] = [
  {
    title: "CIAO",
    imageUrl: "images/projects/ciao-thumbnail.png",
    projectUrl: "",
    description: `
      I worked on CIAO from 2020 to 2025.  I built it from the ground up for
      Rocky Mountain Research Station, under contract with the US Forest Service
      through Cynerge Consulting.  I was the only developer on the project for most of the first year.
      It was architected in Angular, Node.js, and Postgres, hosted in Kubernetes and later AWS.
      In 2022, it was picked as the US Forest Service's choice for field safety personnel tracking,
      beating out 15 other solutions, both in-house and off-the-shelf, 
      and was greenlit for enterprise expansion.
      Selected for its low cost and high stability, it grew gracefully into a 
      multi-tenant application designed for up to 20,000 concurrent users,
      and transitioned seamlessly from Kubernetes to AWS.
    `,
  },
  {
    title: "Smokejumper",
    imageUrl: "images/projects/madb-thumbnail.png",
    projectUrl: "",
    description: `
      I was called into the Smokejumper suite as extra support while CIAO was in O&M.
      Over the years, I decorrupted the legacy data (SQL Server),
       upgraded the Angular frontend and the .NET Core backend, 
       fixed several Telerik reports, improved frontend performance and stability,
       and hunted countless bugs.
    `,
  },
  {
    title: "Countless Others",
    imageUrl: "",
    projectUrl: "",
    description: `
      Lorem Ispum... Look, I have a lot more projects than this.
      But this portfolio is under construction, and writing out things to make myself look good
      is a lot more difficult than just making web applications behave correctly.
      I will be adding more to this list soon, but it takes a bit to describe them all.
      In the future, I plan on recording what I'm doing for myself and my portfolio,
      rather than just for the project management and budget tracking.
    `,
  },
];

export default function Projects() {
  return (
    <>
      <h1 className="text-5xl">Projects</h1>
      <p className="text-lg">{"Here's a list of my projects!"}</p>
      <div className="flex flex-col gap-4 items-stretch">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            side={index % 2 === 0 ? "left" : "right"}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </>
  );
}
