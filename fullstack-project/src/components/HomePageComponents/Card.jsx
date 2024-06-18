import { Link } from "react-router-dom";

export function Card({ data }) {
  return (
    <Link to={`/${data.cca3}`} state={data} className="h-auto w-full max-w-[265px] ">
    <section className="max-w-[265px] h-auto w-full mt-10 rounded-md shadow-lg cursor-pointer hover:scale-105 transition-all duration-300">
      <div
        style={{ backgroundImage: `url(${data.flags.png})` }}
        className="w-full h-40 bg-cover bg-center rounded-t-md"
      ></div>
      <div className="w-full h-48 bg-white dark:bg-[#2B3945] p-8 rounded-b-md">
        <h1 className="mb-3 font-extrabold text-lg dark:text-white">
          {data.name.common}
        </h1>
        <p className="font-semibold dark:text-white">
          Population: <span className=" text-[#858585]">{data.population}</span>
        </p>
        <p className="font-semibold dark:text-white">
          Region: <span className=" text-[#858585]">{data.region}</span>
        </p>
        <p className="font-semibold dark:text-white">
          Capital: <span className=" text-[#858585]">{data.capital}</span>
        </p>
      </div>
    </section>
    
    </Link>
  );
}
