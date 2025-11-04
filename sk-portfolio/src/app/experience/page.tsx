import Image from "next/image";
import experienceMarkDown from "./experience.md";
import Markdown from "react-markdown";

export default function Experience() {
  return (
    <>
      <h1 className="text-5xl mr-auto ml-auto">Work Experience</h1>
      <table className="[&_td]:p-6">
        <thead>
          <tr className="sr-only">
            <th>Dates</th>
            <th>Company and Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2018 - 2025</td>
            <h3>Cynerge Consulting</h3>
            <p></p>
          </tr>
          <tr>
            <td>2017 - 2018</td>
            <td>Adviso, Inc</td>
          </tr>
          <tr>
            <td>2007 - 2018</td>
            <td>Freelance / Apprenticeship</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
