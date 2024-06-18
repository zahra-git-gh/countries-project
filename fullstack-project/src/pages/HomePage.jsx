
import { ContainerCards } from "../components/HomePageComponents/ContainerCards";
import { ContainerSearch } from "../components/HomePageComponents/ContainerSearch";

export function HomePage() {
    
  return (
    <section className="w-full h-max px-5 md:px-12">
      <ContainerSearch />
      <ContainerCards />
    </section>
  );
}
