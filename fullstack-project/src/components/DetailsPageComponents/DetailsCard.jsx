import { ButtonCountry } from "./ButtonCountry";

export function DetailsCard() {
  return <section className="w-full mt-14 mb-28 h-max flex flex-col lg:flex-row lg:gap-x-10">
    <div className="w-full flex flex-col items-center justify-center">
        <img className="w-full max-w-[500px]" src="https://flagcdn.com/w320/wf.png" alt="" />
    </div>
    <div className="w-full flex flex-col lg:items-start">
        {/* desc */}
        <div className=" mt-10 flex flex-wrap gap-x-4 items-center sm:justify-center lg:flex-row lg:flex-nowrap gap-y-7">
            <div className="">
            <h1 className="dark:text-white font-bold text-xl mb-4">Belgium</h1>
            <p className="dark:text-white mb-3 font-semibold">Native Name: <span className="text-[#858585]">Belgie</span></p>
            <p className="dark:text-white mb-3 font-semibold">Population: <span className="text-[#858585]">1232434324</span></p>
            <p className="dark:text-white mb-3 font-semibold">Region: <span className="text-[#858585]">Europe</span></p>
            <p className="dark:text-white mb-3 font-semibold">Sub Region: <span className="text-[#858585]">Western Europe</span></p>
            <p className="dark:text-white mb-3 font-semibold">Capital: <span className="text-[#858585]">Brussels</span></p>

            </div>
            <div>
            <p className="dark:text-white mb-3 font-semibold">Top Level Domain: <span className="text-[#858585]">.be</span></p>
            <p className="dark:text-white mb-3 font-semibold">Currencies: <span className="text-[#858585]">Euro</span></p>
            <p className="dark:text-white mb-3 font-semibold">Languages: <span className="text-[#858585]">Dutch, French, German</span></p>
            </div>
        </div>
        {/* border countries */}
        <div className="mb-11 lg:flex lg:items-center sm:gap-x-4">
            <div className="sm:flex sm:justify-center lg:flex lg:items-center lg:gap-x-4">
            <p className="dark:text-white font-semibold text-lg">Border Countries:</p>
            <div className="flex flex-wrap gap-x-3 gap-y-2 ">
                <ButtonCountry text='France'/>
                <ButtonCountry text='Germany'/>
                <ButtonCountry text='Netherland'/>
                
            </div>

            </div>
        </div>
    </div>
  </section>;
}
