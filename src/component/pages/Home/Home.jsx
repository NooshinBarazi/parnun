import HeroSection from "./HeroSection";
import Menu from "./Menu";
import NavBar from "./NavBar";

const Home = () => {
    return ( 
        
        <div className="bg-gray-500">
        <NavBar />
        <Menu />
        <HeroSection />
        </div>
        
     );
}
 
export default Home;