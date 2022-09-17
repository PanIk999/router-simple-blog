import "./BlogCard.css";

import { Link } from "react-router-dom";

const BlogCard = (props) => {
  return (
      <div className="blogCard">
        <img src={props.img} alt="BlogPic"></img>
        <h2>{props.title}</h2>

        <Link to={`/${props.id}`} style={{ textDecoration: 'none', padding: '0.36rem 1.8rem', marginTop: '1rem', border: 'solid 0.18rem green', color: 'green', borderRadius: '0.63rem' }}>Read More</Link>
      </div>
  
  );
};

export default BlogCard;
