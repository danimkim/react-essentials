import { useState } from "react";
import { EXAMPLES, TAB_MENUS } from "../../constants";
import Section from "../Section";
import TabButton from "./../TabButton";
import TabContent from "./../TabContent";
import "./Examples.css";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  const handleSelect = (selectedMenu) =>
    setSelectedTopic(selectedMenu.toLowerCase());

  return (
    <Section sectionId={"examples"} title="Examples">
      <menu>
        {TAB_MENUS.map((menu) => (
          <TabButton
            key={menu}
            onSelect={() => handleSelect(menu)}
            isSelected={selectedTopic === menu.toLowerCase()}
          >
            {menu}
          </TabButton>
        ))}
      </menu>
      <div id="tab-content">
        <TabContent {...EXAMPLES[selectedTopic]} />
      </div>
    </Section>
  );
}
