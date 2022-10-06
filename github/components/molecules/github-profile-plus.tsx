const GitHubProfilePlus: React.VFC = () => {
  const menus = [
    {
      label: "New repository",
      link: "https://github.com/new",
    },
    {
      label: "Import repository",
      link: "https://github.com/new/import",
    },
    {
      label: "New gist",
      link: "https://gist.github.com/",
    },
    {
      label: "New organization",
      link: "https://github.com/organizations/plan",
    },
    {
      label: "New project",
      link: "https://github.com/new/project",
    },
  ];

  return (
    <div className="flex flex-col max-h-full w-34 rounded-md bg-white border text-xs">
      <div className="flex flex-col">
        {menus.map((menu, index) => {
          return (
            <a
              key={index}
              href={menu.link}
              className={`p-2 hover:bg-blue-500 hover:text-white ${
                index == 0 ? "mt-2" : ""
              } ${index == menus.length - 1 ? "mb-2" : ""}`}
            >
              {menu.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default GitHubProfilePlus;
