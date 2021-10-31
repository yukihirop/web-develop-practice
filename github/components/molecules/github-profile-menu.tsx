type Props = {
  profile: {
    username: string;
    status: string;
  };
};

const GitHubProfileMenu: React.FC<Props> = ({ profile }) => {
  const yourMenus = [
    {
      label: "Your Profile",
      link: "https://github.com/profile",
    },
    {
      label: "Your repositories",
      link: "https://github.com/repositories",
    },
    {
      label: "Your codespaces",
      link: "https://github.com/codespaces",
    },
    {
      label: "Your organizations",
      link: "https://github.com/organizations",
    },
    {
      label: "Your enterprises",
      link: "https://github.com/enterprises",
    },
    {
      label: "Your projects",
      link: "https://github.com/projects",
    },
    {
      label: "Your stars",
      link: "https://github.com/stars",
    },
    {
      label: "Your gists",
      link: "https://github.com/gists",
    },
  ];

  const otherMenus = [
    {
      label: "Upgrade",
      link: "https://github.com/account/choose?action=upgrade",
    },
    {
      label: "Feature preview",
    },
    {
      label: "Help",
      link: "https://docs.github.com/ja",
    },
    {
      label: "Settings",
      link: "https://github.com/settings/profile",
    },
  ];

  return (
    <div className="flex w-34 max-h-full flex-col rounded-md bg-white border text-xs">
      <div className="p-3 cursor-pointer mt-1">
        Signed in as <span className="font-semibold">{profile.username}</span>
      </div>
      <hr />
      <div className="p-3">
        <button className="w-full rounded-md border-solid border-2 p-1">
          {profile.status}
        </button>
      </div>
      <hr />
      <div className="flex flex-col">
        {yourMenus.map((menu, index) => (
          <a
            key={index}
            href={menu.link}
            className="p-2 hover:bg-blue-500 hover:text-white"
          >
            {menu.label}
          </a>
        ))}
      </div>
      <hr />
      <div className="flex flex-col">
        {otherMenus.map((menu, index) => {
          if (menu.link)
            return (
              <a
                key={index}
                href={menu.link}
                className="p-2 hover:bg-blue-500 hover:text-white"
              >
                {menu.label}
              </a>
            );
        })}
      </div>
      <hr />
      <div className="flex flex-col mb-1">
        <a href="#" className="p-2 hover:bg-blue-500 hover:text-white">
          Sign out
        </a>
      </div>
    </div>
  );
};

export default GitHubProfileMenu;
