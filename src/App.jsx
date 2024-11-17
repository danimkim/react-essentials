import Header from "@components/Header";
import { CORE_CONCEPTS, EXAMPLES, TAB_MENUS } from "./constants";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import TabContent from "./components/TabContent";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  const handleSelect = (selectedMenu) =>
    setSelectedTopic(selectedMenu.toLowerCase());
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {TAB_MENUS.map((menu) => (
              <TabButton key={menu} onSelect={() => handleSelect(menu)}>
                {menu}
              </TabButton>
            ))}
          </menu>
          <div id="tab-content">
            <TabContent {...EXAMPLES[selectedTopic]} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
