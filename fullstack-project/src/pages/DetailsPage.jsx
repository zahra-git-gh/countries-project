import { Button } from "../components/DetailsPageComponents/Button";
import { DetailsCard } from "../components/DetailsPageComponents/DetailsCard";
import { useLocation } from "react-router-dom";
export function DetailsPage(){
    const obj=useLocation()
    return <section className="w-full px-5 min-[500px]:px-10">
        <Button/>
        <DetailsCard data={obj.state}/>
    </section>
}