import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addSearch } from "../../redux/countriesSlice";

export function SearchInput() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const delay = setTimeout(() => {
      dispatch(addSearch(search));
    }, 2000);
    return () =>{
      return clearTimeout(delay)};
  }, [search, dispatch]);
  return (
    <div className="w-full h-14 bg-white py-3 px-6 flex items-center gap-3 rounded-lg shadow-lg max-w-96 dark:bg-[#2B3945]">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-slate-500 dark:text-white"
      />
      <input
        id="searchbar"
        onChange={(e) => setSearch(e.target.value)}
        type="serch"
        className="h-full w-full focus:border-0 focus:outline-none bg-white placeholder:text-sm dark:bg-[#2B3945] dark:text-white"
        placeholder="Search for a country ..."
      />
    </div>
  );
}
