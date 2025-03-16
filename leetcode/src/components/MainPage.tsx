import { Favorite } from "./Favorite"
import { ProblemsList } from "./ProbemsList"
import { SideBar } from "./SideBar"

export function MainPage() {
    return <div className="flex h-full w-full ">
        <SideBar />
        <div className="ml-10 lg:ml-52 h-full lg:flex w-full pr-10 ">
            <Favorite />
            <ProblemsList />    
        </div>
    </div>
}