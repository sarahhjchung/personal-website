import React from "react";
import { ReactComponent as Github } from "../assets/Github.svg";
import { ReactComponent as Link } from "../assets/Link.svg";

const ProjectContainer = ({
  className,
  title,
  description,
  comment,
  github,
  link,
  techUsed,
  img,
}) => {
  return (
    <div className={`${className} grid grid-cols-2 gap-4`}>
      {img}
      <div className="space-y-4">
        <div className="flex items-center">
          <h4 className="font-bold italic mr-auto">{title}</h4>
          <div className="flex items-center ml-auto">
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <Github
                  className={`cursor-pointer inline-block hover:opacity-50 w-8 h-8 px-1 fill-red`}
                />
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noreferrer">
                <Link
                  className={`cursor-pointer inline-block hover:opacity-50 w-8 h-8 px-1 fill-red`}
                />
              </a>
            )}
          </div>
        </div>
        <p className="font-semibold opacity-80">{description}</p>
        <p className="font-semibold opacity-80">{comment}</p>
        <p className="font-semibold text-red uppercase ">{techUsed}</p>
      </div>
    </div>
  );
};

export default ProjectContainer;
