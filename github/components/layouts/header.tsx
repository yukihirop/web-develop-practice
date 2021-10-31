import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBell, faPlus, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import GitHubSearch from "@comp/molecules/github-search";
import GitHubProfileMenu from "@comp/molecules/github-profile-menu";
import GitHubProfilePlus from "@comp/molecules/github-profile-plus";
import { useState, useRef, useEffect } from "react";

const Header: React.VFC = () => {
  const menus = [
    {
      label: "Pull requests",
      link: "https://github.com/pulls",
    },
    {
      label: "Issues",
      link: "https://github.com/issues",
    },
    {
      label: "Marketplace",
      link: "https://github.com/marketplace",
    },
    {
      label: "Explore",
      link: "https://github.com/explore",
    },
  ];

  const profile = {
    username: "yukihirop",
    status: "💪 burning",
  };

  const profileImgUrl =
    "https://avatars.githubusercontent.com/u/11146767?s=40&v=4";

  const [isShowPlus, setIsShowPlus] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const plusRef = useRef<HTMLDivElement>(null!);
  const menuRef = useRef<HTMLDivElement>(null!);
  const documentClickHandler = useRef(null!);

  function closeWithClickOutSide(e: React.MouseEvent<HTMLInputElement>) {
    if (isShowPlus) {
      setIsShowPlus(false);
    }
    if (isShowMenu) {
      setIsShowMenu(false);
    }
  }

  useEffect(() => {
    documentClickHandler.current = (e: React.MouseEvent<HTMLInputElement>) => {
      if (plusRef && plusRef.current.contains(e.target as HTMLInputElement))
        return;
      if (menuRef && menuRef.current.contains(e.target as HTMLInputElement))
        return;
      setIsShowPlus(false);
      setIsShowMenu(false);
    };

    document.addEventListener("click", documentClickHandler.current);
  });

  return (
    <header className="flex bg-black h-14 justify-between">
      <div className="max-w-full mx-6 my-auto flex flex-row space-x-4">
        <FontAwesomeIcon icon={faGithub} className="w-8 h-8 text-white" />
        <GitHubSearch />
        <div className="flex flex-row space-x-3 text-white my-auto text-sm font-semibold">
          {menus.map((menu, index) => (
            <a key={index} href={menu.link}>
              {menu.label}
            </a>
          ))}
        </div>
      </div>
      <div className="my-auto flex flex-row space-x-3 mx-6">
        <div id="github-profile-notify" className="flex my-auto">
          <FontAwesomeIcon
            icon={faBell}
            className="w-4 h-4 text-white my-auto"
          />
        </div>
        <div ref={plusRef} id="github-profile-plus" className="my-auto">
          <details className="flex flex-row">
            <summary hidden={!isShowPlus} className="flex flex-row">
              <FontAwesomeIcon
                icon={faPlus}
                className="w-4 h-4 text-white my-auto"
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                className="w-4 h-4 text-white my-auto"
              />
            </summary>
            <div className="absolute top-12 right-20">
              <GitHubProfilePlus />
            </div>
          </details>
        </div>
        <div ref={menuRef} id="github-profile-menu" className="my-auto">
          <details>
            <summary hidden={!isShowMenu} className="flex flex-row">
              <img
                src={profileImgUrl}
                alt="profile icon"
                className="w-6 h-6 rounded-full my-auto"
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                className="w-4 h-4 text-white my-auto"
              />
            </summary>
            <div className="absolute top-12 right-8">
              <GitHubProfileMenu profile={profile} />
            </div>
          </details>
        </div>
      </div>
    </header>
  );
};

export default Header;
