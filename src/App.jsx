import Header from "@components/Header";
import { CORE_CONCEPTS, TAB_MENUS } from "./constants";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  const handleSelect = (selectedMenu) => {
    console.log(`Selected Menu: ${selectedMenu}`);
  };

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
        </section>
      </main>
    </div>
  );
}

export default App;
