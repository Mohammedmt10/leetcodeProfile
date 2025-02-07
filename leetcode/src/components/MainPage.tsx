import { Favorite } from "./Favorite"
import { ProblemsList } from "./ProbemsList"
import { SideBar } from "./SideBar"

export function MainPage() {
    return <div className="flex h-full bg-black-300 ">
        <SideBar />
        <Favorite />
        <ProblemsList />    
    </div>
}