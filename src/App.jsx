import Header from "@components/Header/Header";
import { CORE_CONCEPTS } from "./constants";
import CoreConcept from "./components/CoreConcept/CoreConcept";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
