import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRegion } from "../../redux/countriesSlice";

export function SelectEle() {
  const [isClicked, setIsClicked] = useState(false);
  const [btnValue, setBtnValue] = useState("Filter by Region");
  const region = ["All", "Asia", "Americas", "Africa", "Europe", "Oceania"];
  const dispatch=useDispatch()
  return (
    <div>
      <button
        onClick={() => setIsClicked(!isClicked)}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="bg-white focus:outline-none font-medium rounded-lg text-sm px-5 py-4 text-center inline-flex items-center justify-between w-60 shadow-lg text-gray-700 dark:bg-[#2B3945] dark:text-white  "
        type="button"
      >
        {btnValue}{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      <div
        style={{ display: isClicked ? "block" : "none" }}
        id="dropdown"
        className="hidden bg-white divide-y divide-gray-100 rounded-sm shadow w-60 dark:bg-[#2B3945] mt-2 absolute"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-white"
          aria-labelledby="dropdownDefaultButton"
        >
          {region.map((r, i) => {
            return (
              <li
                onClick={() => {
                  setBtnValue(r);
                  setIsClicked(false);
                  dispatch(addRegion(r))
                }}
                key={i}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#2c3a45] dark:hover:text-white"
              >
                {r}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
