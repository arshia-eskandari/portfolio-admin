import './Link.css'
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC } from "react";

interface ISidebarLinksProp {
  href?: string;
  text: string;
  icon?: IconDefinition;
}

const SidebarLink: FC<ISidebarLinksProp> = ({
  text,
  icon,
  href = "/not-found",
}) => {
  return (
    <Link href={href}>
      <div className="link-container">
        {icon ? (
          <FontAwesomeIcon
            icon={icon}
            className="link-icon"
          />
        ) : null}
        <span className="ms-3">{text}</span>
      </div>
    </Link>
  );
};

export default SidebarLink;
