import { SearchInput } from "./SearchInput";
import { SelectEle } from "./Select";

export function ContainerSearch(){
    return <section className="flex flex-wrap gap-5 mt-8 items-center w-full justify-between">
        <SearchInput />
        <SelectEle />
    </section>
}