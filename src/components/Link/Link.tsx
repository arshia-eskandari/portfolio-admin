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
      <div className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group group-hover">
        {icon ? (
          <FontAwesomeIcon
            icon={icon}
            className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white"
          />
        ) : null}
        <span className="ms-3">{text}</span>
      </div>
    </Link>
  );
};

export default SidebarLink;
