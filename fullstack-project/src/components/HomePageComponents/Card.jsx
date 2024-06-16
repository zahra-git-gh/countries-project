export function Card() {
  return (
    <section className="max-w-[265px] h-auto w-full mt-10 rounded-md shadow-lg">
      <div
        style={{ backgroundImage: "url('https://flagcdn.com/w320/wf.png')" }}
        className="w-full h-40 bg-cover bg-center rounded-t-md"
      ></div>
      <div className="w-full h-48 bg-white dark:bg-[#2B3945] p-8 rounded-b-md">
        <h1 className="mb-3 font-extrabold text-lg dark:text-white">Germany</h1>
        <p className="font-semibold dark:text-white">Population: <span className=" text-[#858585]">8427374</span></p>
        <p className="font-semibold dark:text-white">Region: <span className=" text-[#858585]">Europe</span></p>
        <p className="font-semibold dark:text-white">Capital: <span className=" text-[#858585]">Berlin</span></p>
      </div>
    </section>
  );
}
