import Image from "next/image";

const loremIpsum = [
  `

          Chase red laser dot fall over dead (not really but gets sypathy) yet
          make it to the carpet before i vomit mmmmmm annoy kitten brother with
          poking and stare at imaginary bug poop in litter box, scratch the
          walls. Howl uncontrollably for no reason only use one corner of the
          litter box yet stare at the wall, play with food and get confused by
          dust or scratch so owner bleeds scratch the box loves cheeseburgers
          but meow. Terrorize the hundred-and-twenty-pound rottweiler and steal
    `,
  `
          Attempt to leap between furniture but woefully miscalibrate and
          bellyflop onto the floor; what's your problem? i meant to do that now
          i shall wash myself intently slap the dog because cats rule so
          headbutt owner's knee. Playing with balls of wool cat playing a fiddle
          in hey diddle diddle? sleep nap but sleep all day whilst slave is at
          work, play all night whilst slave is sleeping. Sleep on dog bed, force
    `,
];

const cardBorderTailwinds =
  "border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-6";

export default function ProjectCard(project: Project) {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 ${
        project.side === "left" ? "sm:flex-row" : "sm:flex-row-reverse"
      }`}
    >
      {project.imageUrl ? (
        <Image
          src={project.imageUrl}
          alt={project.title}
          width="300"
          height="200"
          className="self-start"
        />
      ) : (
        <h2 className="5xl basis-1/3">{project.title}</h2>
      )}
      <div className={`basis-2/3 ${cardBorderTailwinds} bg-[background]/80`}>
        {/* {loremIpsum.map((text, index) => (
          <p key={index} className="">
            {text}
          </p>
        ))} */}
        {project.description}
      </div>
    </div>
  );
}
