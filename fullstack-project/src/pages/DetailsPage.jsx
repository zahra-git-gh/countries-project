import { Button } from "../components/DetailsPageComponents/Button";
import { DetailsCard } from "../components/DetailsPageComponents/DetailsCard";

export function DetailsPage(){
    return <section className="w-full px-5 min-[500px]:px-10">
        <Button/>
        <DetailsCard/>
    </section>
}