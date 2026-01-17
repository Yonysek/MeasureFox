import { Page } from "./Page";
import { MdClose } from "react-icons/md"
export function GraphDialog() {
    return (<dialog open>
<Page>
<div className="flex flex-row justify-between">
    <h2>Edit chromatogram</h2>
<MdClose color="var(--color-primary)"/>
</div>
</Page>
    </dialog>)
}