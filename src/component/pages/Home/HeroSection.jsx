import ArrowIcon from "../../Icons/ArrowIcon";
import CallIcon from "../../Icons/CallIcon";
import TextReverseIcon from "../../Icons/TextReverseIcon";
import TextIcon from "../../Icons/textIcon";
// import person from 'images/person.png'
// import Person from 'images/person.png'
const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse items-center lg:flex-row  justify-between text-right space-x-4 mt-28">
      <div className="flex flex-col justify-between  gap-y-8">
        <h1 className="text-5xl w-full text-secondary leading-none whitespace-wrap font-mono font-black lg:text-sm">آژانس طراحی و پیاده سازی </h1>
        <h1 className="text-5xl text-secondary leading-none whitespace-wrap font-mono font-black lg:text-sm">بیزینس و کسب کارهای بزرگ</h1>
        <p className="text-base text-secondary opacity-50 font-light leading-none">
          طراحی و پیاده سازی وبسایت و پلتفرم حرفه ای و سئو شده
        </p>
        <p className="text-base text-secondary opacity-50 font-light leading-none">
          برای بیزینس و کسب
          و کار های بزرگ با جدیدترین متد و زبان روز دنیا        </p>
        <div className="flex justify-start gap-x-8">
          <button className="bg-primary rounded-md rounded-tr-sm p-4 w-1/2 flex items-center justify-center">
            <span className="text-whiteLight text-sm">شروع کنید</span>
            <ArrowIcon width={34} height={34} />
          </button>
          <button className="flex items-center w-1/2  gap-x-2">
            <CallIcon width={24} height={24} />
            <span className="text-primary">نمونه کارها</span>
          </button>
        </div>
        <button className="flex flex-col bg-secondary text-whiteLight rounded-full  justify-between items-center w-fit p-4 mt-5 ">
          <TextIcon width={67} height={26} />
          <CallIcon width={26} height={26} />
          <TextReverseIcon width={67} height={26} />
        </button>
      </div>
      <div className="w-full lg:w-1/2">
        <img src={"images/Illustration.png"} alt="Illustration" />
      </div>

    </div>
  );
};

export default HeroSection;
