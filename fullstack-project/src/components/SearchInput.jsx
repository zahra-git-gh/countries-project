import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function SearchInput() {
  return (
    <div className="w-full h-14 bg-white py-3 px-6 flex items-center gap-3 rounded-lg shadow-lg max-w-96 dark:bg-[#2B3945]">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-slate-500 dark:text-white"
      />
      <input
        type="serch"
        className="h-full w-full focus:border-0 focus:outline-none bg-white placeholder:text-sm dark:bg-[#2B3945] dark:text-white"
        placeholder="Search for a country ..."
      />
    </div>
  );
}
