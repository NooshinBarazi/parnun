import  ArrowIcon  from "../../Icons/ArrowIcon";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";

const Home = () => {
    return ( 
        <>
        <div className="bg-gray-500">
        <h2>home page</h2>
        <ArrowIcon />
        <HeroSection />
        <NavBar />
        </div>
        </>
     );
}
 
export default Home;