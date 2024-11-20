import { useState } from "react";
import { EXAMPLES, TAB_MENUS } from "../../constants";
import Section from "../Section";
import TabButton from "./../TabButton";
import TabContent from "./../TabContent";
import "./Examples.css";
import Tabs from "../Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  const handleSelect = (selectedMenu) =>
    setSelectedTopic(selectedMenu.toLowerCase());

  return (
    <Section sectionId={"examples"} title="Examples">
      <Tabs
        buttons={TAB_MENUS.map((menu) => (
          <TabButton
            key={menu}
            onSelect={() => handleSelect(menu)}
            isSelected={selectedTopic === menu.toLowerCase()}
          >
            {menu}
          </TabButton>
        ))}
      >
        <div id="tab-content">
          <TabContent {...EXAMPLES[selectedTopic]} />
        </div>
      </Tabs>
    </Section>
  );
}
