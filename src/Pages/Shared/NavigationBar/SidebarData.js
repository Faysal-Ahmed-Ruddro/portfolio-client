import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "HOME",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "ABOUT",
    path: "/about",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "PROJECTS",
    path: "/projects",
    icon: <AiIcons.AiFillProject />, 
    cName: "nav-text",
  },
  {
    title: "SKILLS",
    path: "/skills",
    icon: <AiIcons.AiFillSetting />, 
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
