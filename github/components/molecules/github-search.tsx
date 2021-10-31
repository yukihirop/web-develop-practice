import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const GitHubSearch: React.VFC = () => {
  return (
    <div className="flex column">
      <input
        id="github-search"
        type="text"
        className="h-8 w-64 my-auto border-solid border-opacity-50 border outline-none border-gray-50 rounded-md bg-transparent text-xs text-gray-300 text-bold p-2 placeholder-opacity-100"
        placeholder="Search or jump to..."
      />
      <span className="border my-auto p-1 border-solid border border-gray-50 border-opacity-50 rounded relative right -ml-7 z-2">
        <FontAwesomeIcon
          icon={faCode}
          className="w-3 h-3 text-gray-50 text-opacity-50"
        />
      </span>
    </div>
  );
};

export default GitHubSearch;
