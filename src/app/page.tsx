import Image from "next/image";
import shoeImg from "../../public/img/shoe.jpg"
import perfumeImg from "../../public/img/perfume.jpg"
import earbudsImg from "../../public/img/earbuds.jpg"
import mobileImg from "../../public/img/mobile.jpg"

export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-center pt-20 font-bold uppercase tracking-wide">Products</h1>
      <div className="grid bg-blue-50 px-16 mt-12 mx-auto gap-4 md:grid-cols-2 md:px-16 lg:grid-cols-4 lg:px-8 cursor-pointer">
        
        <div className="w-full h-[400px] mx-auto my-auto p-2 border-2 border-slate-300 hover:border-cyan-500 duration-500 rounded-lg shadow-lg shadow-slate-400 sm:w-full">
            <div className="w-full h-[200px]">
              <Image src={shoeImg} alt="photo" className="rounded-t-lg w-full h-full" />
            </div>
            <div className="w-full h-[200px] flex flex-col gap-3">
            <h3 className="text-center text-2xl font-semibold mt-4 tracking-wide">Shoe</h3>
            <p className="text-center mt-">Price: <span className="text-lg font-semibold">4,000</span><span>/ Rs</span></p>
            <button className="w-full my-auto text-lg bg-cyan-500 text-white shadow-lg shadow-slate-300 py-2 rounded-lg hover:rounded-3xl border-2 hover:bg-transparent hover:text-black hover:border-2 hover:border-cyan-500 duration-500">Buy Now</button>
            </div>
        </div>
        <div className="w-full h-[400px] mx-auto my-auto p-2 border-2 border-slate-300 hover:border-cyan-500 duration-500 rounded-lg shadow-lg shadow-slate-400 sm:w-full">
            <div className="w-full h-[200px]">
              <Image src={perfumeImg} alt="photo" className="rounded-t-lg w-full h-full" />
            </div>
            <div className="w-full h-[200px] flex flex-col gap-3">
            <h3 className="text-center text-2xl font-semibold mt-4 tracking-wide">Perfume</h3>
            <p className="text-center mt-">Price: <span className="text-lg font-semibold">1,000</span><span>/ Rs</span></p>
            <button className="w-full my-auto text-lg bg-cyan-500 text-white shadow-lg shadow-slate-300 py-2 rounded-lg hover:rounded-3xl border-2 hover:bg-transparent hover:text-black hover:border-2 hover:border-cyan-500 duration-500">Buy Now</button>
            </div>
        </div>
        <div className="w-full h-[400px] mx-auto my-auto p-2 border-2 border-slate-300 hover:border-cyan-500 duration-500 rounded-lg shadow-lg shadow-slate-400 sm:w-full">
            <div className="w-full h-[200px]">
              <Image src={earbudsImg} alt="photo" className="rounded-t-lg w-full h-full" />
            </div>
            <div className="w-full h-[200px] flex flex-col gap-3">
            <h3 className="text-center text-2xl font-semibold mt-4 tracking-wide">Earbuds</h3>
            <p className="text-center mt-">Price: <span className="text-lg font-semibold">2,500</span><span>/ Rs</span></p>
            <button className="w-full my-auto text-lg bg-cyan-500 text-white shadow-lg shadow-slate-300 py-2 rounded-lg hover:rounded-3xl border-2 hover:bg-transparent hover:text-black hover:border-2 hover:border-cyan-500 duration-500">Buy Now</button>
            </div>
        </div>
        <div className="w-full h-[400px] mx-auto my-auto p-2 border-2 border-slate-300 hover:border-cyan-500 duration-500 rounded-lg shadow-lg shadow-slate-400 sm:w-full">
            <div className="w-full h-[200px]">
              <Image src={mobileImg} alt="photo" className="rounded-t-lg w-full h-full" />
            </div>
            <div className="w-full h-[200px] flex flex-col gap-3">
            <h3 className="text-center text-2xl font-semibold mt-4 tracking-wide">Mobile</h3>
            <p className="text-center mt-">Price: <span className="text-lg font-semibold">20,000</span><span>/ Rs</span></p>
            <button className="w-full my-auto text-lg bg-cyan-500 text-white shadow-lg shadow-slate-300 py-2 rounded-lg hover:rounded-3xl border-2 hover:bg-transparent hover:text-black hover:border-2 hover:border-cyan-500 duration-500">Buy Now</button>
            </div>
        </div>
      </div>
    </>
  );
}
