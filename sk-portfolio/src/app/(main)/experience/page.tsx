export default function Experience() {
  return (
    <>
      <h1 className="text-4xl mr-auto ml-auto bg-[background]/80 rounded-lg">
        Work Experience
      </h1>
      <table className="[&_td]:p-6 bg-[background]/80 rounded-lg">
        <thead>
          <tr className="sr-only">
            <th>Dates</th>
            <th>Company and Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2018 - 2025</td>
            <td>
              <h3 className="text-2xl">Cynerge Consulting</h3>
              <ul className=" max-w-xl">
                <li>
                  Full-stack Application Developer, primarily contracting for US
                  Forest Service.
                </li>
                <li>
                  Lead Developer on CIAO - Check In And Out, used for field
                  safety tracking.
                </li>
                <li>
                  Full-Stack surge support for several major projects across
                  half a dozen stacks
                </li>
                <li>
                  Agile/Scrum methodologies with daily check-ins and frequent
                  commits
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>2017 - 2018</td>
            <td>
              <h3 className="text-2xl">Adviso, Inc</h3>
              <ul className="max-w-xl">
                <li>
                  Junior Programmer, primarily working on frontend features.
                </li>
                <li>Created dynamic online pricebook</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>2010 - 2018</td>
            <td>
              <h3 className="text-2xl">Freelance / OWebPro</h3>
              <ul className="max-w-xl">
                <li>
                  Apprentice Web Developer under Marie Kauth, founder of
                  OWebPro.
                </li>
                <li>
                  Frontend JavaScript debugging, optimizing SQL Queries, Quality
                  Assurance.
                </li>
                <li>
                  Independent Study of over 20 languages, a dozen platforms, and
                  general best practices.
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
