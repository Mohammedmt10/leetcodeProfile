
import { SideBarIcon } from "../icons/SideBarIcon"
import { useRecoilState } from "recoil";
import { sidebarOpen } from "../store/sidebarState";

export function SideBar() {
    const [open , setOpen] = useRecoilState(sidebarOpen);
    return <div className={`${open ? "w-68 h-screen p-6 border-2 border-gray-600 fixed" : "w-fit h-fit p-2 ml-52 rounded translate-3 absolute" } bg-gray-800 text-white `}>
        <div className="flex items-center justify-between">
        {open && <div className="font-bold text-xl">
            My lists
        </div>}
        <div onClick={()=>{
            setOpen(c => !c)
        }}>
            <SideBarIcon />
        </div>
        </div>
    </div>
}