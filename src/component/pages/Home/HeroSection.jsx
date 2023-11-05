import ArrowIcon from "../../Icons/ArrowIcon";
import CallIcon from "../../Icons/CallIcon";
// import person from 'images/person.png'
// import Person from 'images/person.png'
const HeroSection = () => {
  return (
    <>
      <div className="flex justify-between text-right">
        <div className="max-w-[50%] flex flex-col justify-between">
          <h1 className="text-5xl text-secondary font-black leading-none">
            آژانس طراحی و پیاده سازی بیزینس و کسب کار های بزرگ
          </h1>
          <p className="text-base text-secondary opacity-50">
            طراحی و پیاده سازی وبسایت و پلتفرم حرفه ای و سئو شده برای بیزینس و
            کسب و کار های بزرگ با جدیدترین متد و زبان روز دنیا
          </p>
          <div className="flex justify-between">
            <button className="bg-primary rounded-md rounded-tr-sm px-30 py-13 flex items-center justify-start border border-5">
              <span className="text-white text-sm">شروع کنید</span>
              <ArrowIcon />
            </button>
            <button className="flex items-center">
              <CallIcon />
              <span className="text-primary">نمونه کارها</span>
            </button>
          </div>
          <button>
            <span>دریافت مشاوره</span>
            <div className="w-1">
              <CallIcon />
            </div>
            <span>دریافت مشاوره</span>
          </button>
        </div>
        <div>
          <div>
            <img src={"images/Illustration.png"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
