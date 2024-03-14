import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const [movie,setMovie]=useState("");
    const [loading,setLoading]=useState(true);
    const getMovie=async()=>{
        try{
        const json = await(await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();
        const filteredMovie = json.data.movies.filter(movie => movie.id === parseInt(id));
        console.log(filteredMovie);
        setMovie(filteredMovie);
        console.log(parseInt(id));
        setLoading(false);
    }catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };
  
    useEffect(()=> {
    getMovie();
    },[]);
console.log(movie.title)
    return loading ? <h1>Detail Loading...</h1>: (<div>
        <h1>{movie[0].title}</h1> 
        <img src={movie[0].medium_cover_image}/>
        <h2>Rating : {movie[0].rating} <br/>genres : {movie[0].genres}</h2>
        <p>{movie[0].summary}</p>
        <h2></h2>
    </div>
);
}
export default Detail;