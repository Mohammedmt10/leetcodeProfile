import { DownArrow } from "../icons/DownArrow";
import { ForkIcon } from "../icons/ForkIcon";
import { LockIcon } from "../icons/lockIcon";
import { PlayIcon } from "../icons/PlayIcon";
import { RefreshIcon } from "../icons/RefreshIcon";
import { StarIcon } from "../icons/Star";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement} from "chart.js";

// Register required Chart.js components
Chart.register(ArcElement);
Chart.register({
    id: 'centerText',
    beforeDraw: (chart) => {
      const { ctx, width, height } = chart;
      const text = `${chart.data.datasets[0].data[0]}/`; // Show first data value
      ctx.save();
      ctx.font = '600 25px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fff';
      ctx.fillText(text, width / 2 -10, height / 2);
      ctx.restore();
    },
  });
  Chart.register({
    id: 'centerTextmini',
    beforeDraw: (chart) => {
      const { ctx, width, height } = chart;
      //@ts-ignore
      const text =`${chart.data.datasets[0].data[1]+chart.data.datasets[0].data[0]}`; // Show first data value
      ctx.save();
      ctx.font = '20px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fff';
      ctx.fillText(text, width / 2 + 17, height / 2 + 2);
      ctx.restore();
    },
  });
    Chart.register({
    id: 'centerSolved',
    beforeDraw: (chart) => {
      const { ctx, width, height } = chart;
      const text = `Solved`; // Show first data value
      ctx.save();
      ctx.font = '20px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fff';
      ctx.fillText(text, width / 2, height / 2 + 30);
      ctx.restore();
    },
  });
export function Favorite() {
    return (
        <div className="bg-gray-700 h-fit px-8 w-fit pt-8 pb-3 text-white m-10 ml-20">
            <StarIcon />
            <div className="text-5xl font-bold">Favorite</div>
            <div className="flex items-center">
                Username &middot; questonslength &middot; <LockIcon /> Private <DownArrow />
            </div>
            <div className="flex gap-3 mt-3 border-b-2 pb-6 mb-3">
                <button className="flex items-center gap-2 bg-amber-50 text-black px-3 rounded-full">
                    <PlayIcon /> Practice
                </button>
                <button className="bg-gray-800 p-2 rounded-full">
                    <ForkIcon />
                </button>
            </div>
            <div className="justify-between flex items-center">
                <div>Progress</div>
                <div>
                    <RefreshIcon />
                </div>
            </div>
            <div className="w-full">
                <div className="flex items-center h-fit m-2 w-full ">
                    <div className="bg-[#333333] h-52 w-full">
                    <Doughnut
                        data={{
                            labels: ["Done", "Not Done"],
                            datasets: [
                                {
                                    label: "",
                                    data: [19, 0],
                                    backgroundColor: ["#4CAF50", "#FF5252"],
                                    borderWidth: 0,
                                    borderRadius : 100
                                },
                            ],
                        }}
                        
                        options={{
                            layout : {
                                padding : 30,
                            },
                            
                            cutout : "95%",
                            circumference : 270,
                            rotation : 225,
                        }}
                    />
                    </div>
                    <div className="ml-5">
                        <div className="bg-[#333333] p-2 px-7 m-2 "><div className="text-green-600">Easy</div> 11/11</div>
                        <div className="bg-[#333333] p-2 px-7 m-2"><div className="text-yellow-400">Med.</div> 7/7</div>
                        <div className="bg-[#333333] p-2 px-7 m-2"><div className="text-red-600">Hard</div> 1/1</div>
                    </div>
            </div>
                </div>
        </div>
    );
}
