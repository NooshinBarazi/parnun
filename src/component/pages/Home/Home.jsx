import HeroSection from "./HeroSection";
import Menu from "./Menu";
import NavBar from "./NavBar";

const Home = () => {
    return ( 
        
        <div className="bg-gray-500 font-sans">
        <NavBar />
        <Menu />
        <HeroSection />
        </div>
        
     );
}
 
export default Home;