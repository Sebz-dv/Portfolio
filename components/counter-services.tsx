import { dataCounter } from "@/data";
import CountUp from "react-countup";

const CounterServices = () => {
    return (
        <div className="grid grid-cols-2 gap-4 p-6 mx-auto my-12 max-w-5xl md:grid-cols-4">
            {dataCounter.map(({ id, endCounter, text }) => (
                <div
                    key={id}
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
                >
                    <p className="text-4xl font-bold text-primary md:text-5xl text-black">
                        +<CountUp end={endCounter} start={0} duration={3} />
                    </p>
                    <p className="mt-2 text-sm font-medium text-gray-600 text-center md:text-base">
                        {text}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default CounterServices;
