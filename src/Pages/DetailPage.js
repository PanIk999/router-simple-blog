import Data from "../Data";
import "./DetailPage.css";
import { useParams } from "react-router-dom";

let blog = Data;

const DetailPage = () => {
  let params = useParams();
  console.log(params.id);
  let bloggy = blog[params.id];
  return (
    <div className="App">
      <div className="soloBlog">
        <img src={bloggy.img_url} alt="Blog Pic"></img>
        <h3>{bloggy.title}</h3>
        <h4>{bloggy.published_date}</h4>
        <p>{bloggy.description}</p>
        <h5>by {bloggy.author}</h5>
      </div>
    </div>
  );
};

export default DetailPage;
