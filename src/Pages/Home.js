import { Link } from 'react-router-dom';
import Background from "../Images/router_simple-blog.jpg"
import Button from "../Components/Button" 

const Home = () => {
    return ( 
        <div className="imgContainer">
            <img className="image" src={Background} alt="Background" />
            <section className="welcome"><h2>Welcome to my </h2><h2>simpleBlog</h2>
            <Link to="./blog" style={{ textDecoration: 'none', padding: '0.36rem 1.8rem', marginTop: '1rem', border: 'solid 0.18rem green', color: 'green', borderRadius: '0.45rem' }}>Go To Articles</Link></section>
            
            
        </div>
     );
}
 
export default Home;