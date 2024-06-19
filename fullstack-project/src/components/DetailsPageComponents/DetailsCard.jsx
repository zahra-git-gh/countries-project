import { NotFoundPage } from "../../pages/NotFoundPage";
import { ButtonCountry } from "./ButtonCountry";

export function DetailsCard({ data }) {
  console.log(data);
  if(!data){
    return <NotFoundPage/>
  }
  let nativename = "";
  let currencies = "";
  let languages = Object.values(data.languages).join(" ,");
  console.log(data.name.nativeName);
  for (const name in data.name.nativeName) {
    nativename = data.name.nativeName[name].common;
  }
  for (const curr in data.currencies) {
    currencies += " " + data.currencies[curr].symbol;
  }
  return (
    <section className="w-full mt-14 mb-28 h-max flex flex-col lg:flex-row lg:gap-x-10">
      <div className="w-full flex flex-col items-center justify-center">
        <img className="w-full max-w-[500px]" src={data.flags.png} alt="" />
      </div>
      <div className="w-full flex flex-col lg:items-start">
        {/* desc */}
        <div className=" mt-10 flex flex-wrap gap-x-4 items-center sm:justify-center lg:flex-row lg:flex-nowrap gap-y-7">
          <div className="">
            <h1 className="dark:text-white font-bold text-xl mb-4">
              {data.name.common}
            </h1>
            <p className="dark:text-white mb-3 font-semibold">
              Native Name: <span className="text-[#858585]">{nativename}</span>
            </p>
            <p className="dark:text-white mb-3 font-semibold">
              Population:{" "}
              <span className="text-[#858585]">{data.population}</span>
            </p>
            <p className="dark:text-white mb-3 font-semibold">
              Region: <span className="text-[#858585]">{data.region}</span>
            </p>
            <p className="dark:text-white mb-3 font-semibold">
              Sub Region:{" "}
              <span className="text-[#858585]">{data.subregion}</span>
            </p>
            <p className="dark:text-white mb-3 font-semibold">
              Capital: <span className="text-[#858585]">{data.capital}</span>
            </p>
          </div>
          <div>
            <p className="dark:text-white mb-3 font-semibold">
              Top Level Domain:{" "}
              <span className="text-[#858585]">{data.tld[0]}</span>
            </p>
            <p className="dark:text-white mb-3 font-semibold">
              Currencies: <span className="text-[#858585]">{currencies}</span>
            </p>
            <p className="dark:text-white mb-3 font-semibold">
              Languages: <span className="text-[#858585]">{languages}</span>
            </p>
          </div>
        </div>
        {/* border countries */}
        {data.borders ? (
          <div className="mb-11 lg:flex lg:items-center sm:gap-x-4">
            <div className="sm:flex sm:justify-center lg:flex lg:items-center lg:gap-x-4">
              <p className="dark:text-white font-semibold text-lg">
                Border Countries:
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-2 ">
                {data.borders.map((caa3, i) => {
                  return <ButtonCountry key={i} code={caa3} />;
                })}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
