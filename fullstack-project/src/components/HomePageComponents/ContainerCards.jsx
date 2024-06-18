import { Card } from "./Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../redux/countriesSlice";
export function ContainerCards() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.countriesReducer.data);
  const filterRagion = useSelector(
    (state) => state.countriesReducer.filterRagion
  );
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  const state = useSelector((state) => state.countriesReducer.liveSearch);
  return (
    <section className="w-full flex flex-wrap justify-center sm:justify-between gap-x-8 gap-y-1 ">
      {data?.map((obj, i) => {
        if (filterRagion === "All" ) {
          if(obj.name.common.toLowerCase().includes(state.toLowerCase())){

            return <Card data={obj} key={i} />;
          }
        }else {
          if (obj.region && obj.region === filterRagion && obj.name.common.toLowerCase().includes(state.toLowerCase())) {
            return <Card data={obj} key={i} />;
          }
        }
      })}
    </section>
  );
}
