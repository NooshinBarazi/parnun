import ArrowIcon from "../../Icons/ArrowIcon";

// import person from './images/person'
const HeroSection = () => {
    return ( 
        <>
        <div className="flex space-between">
        <div>
            <h1 className="text-5xl text-secondary">آژانس طراحی و پیاده سازی بیزینس و کسب کار های بزرگ</h1>
            <p className="text-base text-secondary opacity-50">طراحی و پیاده سازی وبسایت و پلتفرم حرفه ای و سئو شده برای بیزینس و کسب و کار های بزرگ با جدیدترین متد و زبان روز دنیا</p>
            <button className="bg-primary rounded-full flex">
                <span className="text-white">شروع کنید</span>
                <ArrowIcon />
            </button>
        </div>
        <div>
            <div>
                <img src={'images/person'} alt='person'/>
                <img src=""/>
                <h1 className="text-5xl text-secondary">آژانس طراحی و پیاده سازی بیزینس و کسب کار های بزرگ</h1>
            <p className="text-base text-secondary opacity-50">طراحی و پیاده سازی وبسایت و پلتفرم حرفه ای و سئو شده برای بیزینس و کسب و کار های بزرگ با جدیدترین متد و زبان روز دنیا</p>
                </div>
        </div>
        </div>
        </>
     );
}
 
export default HeroSection;