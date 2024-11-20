import { CORE_CONCEPTS } from "../../constants";

import Section from "../Section";
import CoreConcept from "./CoreConcept";
import "./CoreConcepts.css";

export default function CoreConcepts() {
  return (
    <Section sectionId="core-concepts" title={"Core Concepts"}>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </Section>
  );
}
