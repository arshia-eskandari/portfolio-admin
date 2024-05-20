"use client";
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
    <div
      id="default-sidebar"
      className="h-screen w-80 overflow-y-auto bg-gray-50 dark:bg-slate-900 p-8"
      aria-label="Sidebar"
    >
      <Link href="/" text="Dashboard" icon={faPieChart} />
      <Link href="/media" text="Media" icon={faFile} />
      <DropdownButton
        text="Sections"
        icon={faLayerGroup}
        dropdownItems={[
          <Link
            href="/hero"
            text="Hero"
            icon={faStar}
            key={"hero-section"}
          />,
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
      <Link href="/login" text="Logout" icon={faRightFromBracket} />
      <Button onClick={() => {}}  text="Logout" icon={faRightFromBracket} textAlign="left"/>
    </div>
  );
};

export default Sidebar;
