import { useRecoilState } from "recoil";
import { FilterIcon } from "../icons/FilterIcon";
import { Probems } from "../store/Problems";
import { FilterVisible } from "../store/FilterBox";
import { TickIcon } from "../icons/TickIcon";
import { RefreshIcon } from "../icons/RefreshIcon";
import { difficultFilter } from "../store/Difficulty";

export function ProblemsList() {
    const [Probem , ] = useRecoilState(Probems);
    const [filter , FilterSet] = useRecoilState(FilterVisible);
    const [filters , setFilters]= useRecoilState(difficultFilter)

    function resetHandler() {
        setFilters([])
    }
    //@ts-ignore
    function handler(e) {
        const {value , checked} = e.target;
        if(checked) {
            //@ts-ignore
            setFilters(pre => [...pre,value])
        } else {
            setFilters(pre => [...pre.filter(diff => diff !== value)])
        }
    }

    {console.log(filters.length > 0)}

    return <div className="h-full w-fit">
        <button className="bg-amber-50 text-black items-center flex px-4 gap-2 py-1 rounded-full mt-8" onClick={() => {
            FilterSet(c => !c);
        }}><FilterIcon />Filter</button>
        {filter && <div className="text-white absolute border-gray-600 p-4 mt-3 rounded-2xl border-2 bg-gray-700 text-lg">
                <div className="p-3">
                    Status
                </div>
                <div className="items-center p-3 flex">
                <div className="items-center flex">
                        <input className="relative peer shrink-0 mx-2 ml-2 appearance-none h-4 w-4 bg-gray-700 border-2 border-gray-600 rounded checked:bg-white checked:border-0" type="checkbox" /> 
                        <label>Todo</label>
                        <TickIcon />
                    </div>
                    <div className="items-center flex">
                        <input className="relative peer shrink-0 mx-2 ml-2 appearance-none h-4 w-4 bg-gray-700 border-2 border-gray-600 rounded checked:bg-white checked:border-0" type="checkbox"  /> 
                        <label>Solved</label>
                        <TickIcon />
                    </div>
                    <div className="items-center flex">
                        <input className="relative peer shrink-0 mx-2 ml-2 appearance-none h-4 w-4 bg-gray-700 border-2 border-gray-600 rounded checked:bg-white checked:border-0" type="checkbox"  /> 
                        <label>Attempted</label>
                        <TickIcon />
                    </div>
                </div>
                <div className="p-3">
                    Difficulty
                </div>
                <div className="items-center p-3 flex">
                    <div className="items-center flex">
                        <input className="relative peer shrink-0 mx-2 ml-2 appearance-none h-4 w-4 bg-gray-700 border-2 border-gray-600 rounded checked:bg-white checked:border-0" type="checkbox" onChange={handler} value={"easy"}/> 
                        <label className="text-green-400">Easy</label>
                        <TickIcon />
                    </div>
                <div className="items-center flex">
                    <input className="relative peer shrink-0 mx-2 ml-2 appearance-none h-4 w-4 bg-gray-700 border-2 border-gray-600 rounded checked:bg-white checked:border-0" type="checkbox" onChange={handler} value={"medium"} /> 
                    <label className="text-yellow-400">Medium</label>
                    <TickIcon />
                </div>
                <div className="items-center flex">
                    <input className="relative peer shrink-0 mx-2 ml-2 appearance-none h-4 w-4 bg-gray-700 border-2 border-gray-600 rounded checked:bg-white checked:border-0" type="checkbox" onChange={handler} value={"hard"}   /> 
                    <label className="text-red-500">Hard</label>
                    <TickIcon />
                </div>
            </div>
            {Probem.map((problem) => (
                //@ts-ignore
                (filters.length > 0) && filters.find((filter) => {
                    return filter == 'hard' && problem.type == "hard"
                 }) && <div className={`text-white p-2 w-full rounded px-7`}>
                    <div className="grid-cols-1 py-1  w-full flex justify-between">
                        <div>
                        {problem.title} 
                        </div>
                        <div className={`${(problem.type == "easy") ? "text-green-400" : `${(problem.type == "medium") ? "text-yellow-400":"text-red-500"}`}`}>
                            {problem.type}
                        </div>
                    </div>
                </div>
            ))}
            <div className="items-center flex p-3">
                        <input className="relative peer shrink-0 mx-2 ml-2 appearance-none h-4 w-4 bg-gray-700 border-2 border-gray-600 rounded checked:bg-white checked:border-0" type="checkbox"  /> 
                        <label>Show Tag</label>
                        <TickIcon />
                    </div>
                <button className="bg-gray-800 w-full py-1 rounded font-medium flex items-center gap-3 place-content-center" onClick={resetHandler}><RefreshIcon />
                Reset</button>
            </div>}
        <div className="grid [&>:nth-child(odd)]:bg-[#333333] [&>:nth-child(even)]:bg-none w-[44vw] mt-3">
            {Probem.map((problem) => (
                //@ts-ignore
                (filters.length <= 0) && <div className={`text-white p-2 w-full rounded px-7`}>
                    <div className="grid-cols-1 py-1  w-full flex justify-between">
                        <div>
                        {problem.title} 
                        </div>
                        <div className={`${(problem.type == "easy") ? "text-green-400" : `${(problem.type == "medium") ? "text-yellow-400":"text-red-500"}`}`}>
                            {problem.type}
                        </div>
                    </div>
                </div>
            ))}

            {Probem.map((problem) => (
                //@ts-ignore
                filters && filters.find((filter) => {
                    return filter == 'easy' && problem.type == "easy"
                 }) && <div className={`text-white p-2 w-full rounded px-7`}>
                    <div className="grid-cols-1 py-1  w-full flex justify-between">
                        <div>
                        {problem.title} 
                        </div>
                        <div className={`${(problem.type == "easy") ? "text-green-400" : `${(problem.type == "medium") ? "text-yellow-400":"text-red-500"}`}`}>
                            {problem.type}
                        </div>
                    </div>
                </div>
            ))}

            {Probem.map((problem) => (
                //@ts-ignore
                filters && filters.find((filter) => {
                    return filter == 'medium' && problem.type == "medium"
                 }) && <div className={`text-white p-2 w-full rounded px-7`}>
                    <div className="grid-cols-1 py-1  w-full flex justify-between">
                        <div>
                        {problem.title} 
                        </div>
                        <div className={`${(problem.type == "easy") ? "text-green-400" : `${(problem.type == "medium") ? "text-yellow-400":"text-red-500"}`}`}>
                            {problem.type}
                        </div>
                    </div>
                </div>
            ))}

            {Probem.map((problem) => (
                //@ts-ignore
                filters && filters.find((filter) => {
                    return filter == 'hard' && problem.type == "hard"
                 }) && <div className={`text-white p-2 w-full rounded px-7`}>
                    <div className="grid-cols-1 py-1  w-full flex justify-between">
                        <div>
                        {problem.title} 
                        </div>
                        <div className={`${(problem.type == "easy") ? "text-green-400" : `${(problem.type == "medium") ? "text-yellow-400":"text-red-500"}`}`}>
                            {problem.type}
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </div>
}