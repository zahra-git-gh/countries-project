import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ButtonCountry({ code }) {
  console.log(code);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => {
        return res.json();
      })
      .then((data1) => {
        setData(data1);
      })
      .catch((err) => console.log(err));
  }, [code]);

  return (
    <Link to={`/${code}`} state={data && data[0]}>
      <button className=" py-1 px-8 rounded-sm bg-white shadow-lg  hover:bg-gray-200 dark:bg-[rgb(43,57,69)] dark:text-white dark:hover:bg-[#1f282f]">
        {data && data[0]?.name?.common}
      </button>
    </Link>
  );
}
