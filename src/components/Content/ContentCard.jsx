import { FaHeart, FaStar } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";


const ContentCard = () => {
    return (
        <div className=" bg-green-500 rounded-xl p-4 height h-[300px] w-[300px] flex flex-col gap-3">
            <div className="relative ">
                <img src="https://mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food-1024x683.jpg" alt="food" className="rounded-xl h-[140px] w-full object-fill" />
                <div className="absolute top-1 right-1 w-[40px] h-[40px] rounded-full bg-cyan-50 flex items-center justify-center cursor-pointer hover:bg-stone-500 transition-all">
                    <FaHeart />
                </div>
                <div className="absolute bottom-1 left-1 w-[100px] h-[35px] rounded-full bg-cyan-50 flex items-center justify-center cursor-pointer gap-2">
                    <IoMdTimer className="text-xl" />
                    <div className="flex gap-1 font-bold">
                        <p>25</p>
                        <p>min</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center">
                <p className="font-bold text-slate-900">Hamburguer</p>
                <div className="flex gap-1   items-center">
                    <FaStar className=" text-yellow-300 " />

                    <p className=" text-lg font-bold text-slate-900">4.5</p>
                </div>
            </div>
            <div className="w-full">
                <div className="text-sm text-gray-600">Details, Reviews, etc</div>
            </div>

            <div className="w-full flex justify-center items-center">
                <button className="w-[90%] h-[40px] bg-cyan-500 rounded-full text-white font-bold">
                    View More
                </button>
            </div>
        </div>
    )
};

export default ContentCard;
