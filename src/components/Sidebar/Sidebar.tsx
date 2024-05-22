"use client";
import "./Sidebar.css";
import Link from "../Link/Link";
import {
  faPieChart,
  faRightFromBracket,
  faFile,
  faLayerGroup,
  faStar,
  faInfoCircle,
  faHistory,
  faProjectDiagram,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import DropdownButton from "../DropdownButton/DropdownButton";
import Button from "../Button/Button";

const Sidebar = () => {
  return (
    <div id="sidebar" className="sidebar-container" aria-label="Sidebar">
      <Link href="/" text="Dashboard" icon={faPieChart} />
      <Link href="/media" text="Media" icon={faFile} />
      <DropdownButton
        text="Sections"
        icon={faLayerGroup}
        dropdownItems={[
          <Link href="/hero" text="Hero" icon={faStar} key={"hero-section"} />,
          <Link
            href="/about"
            text="About"
            icon={faInfoCircle}
            key={"about-section"}
          />,
          <Link
            href="/experiences"
            text="Experiences"
            icon={faHistory}
            key={"experiences-section"}
          />,
          <Link
            href="/projects"
            text="Projects"
            icon={faProjectDiagram}
            key={"projects-section"}
          />,
          <Link
            href="/skills"
            text="Skills"
            icon={faList}
            key={"skills-section"}
          />,
        ]}
      />
      <Button
        onClick={() => {
          console.log("clicked");
        }}
        text="Logout"
        icon={faRightFromBracket}
      />
    </div>
  );
};

export default Sidebar;
