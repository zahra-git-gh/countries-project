
import { ContainerCards } from "../components/ContainerCards";
import { ContainerSearch } from "../components/ContainerSearch";

export function HomePage(){
    return <section className="w-full h-max px-5 md:px-12">
        <ContainerSearch/>
        <ContainerCards/>
    </section>
}