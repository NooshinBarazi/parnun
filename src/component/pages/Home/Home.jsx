import  ArrowIcon  from "../../Icons/ArrowIcon";
import  CallIcon  from "../../Icons/CallIcon";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";

const Home = () => {
    return ( 
        <>
        <div className="bg-gray-500">
        <NavBar />
        <ArrowIcon />
        <HeroSection />
        </div>
        </>
     );
}
 
export default Home;