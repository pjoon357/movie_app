import React from "react";
import axios from "axios";
import Movie from "../components/Movies";
import "./Home.css";

class Home extends React.Component {
    state = {
      isLoading: true,
      movies: []
    };
    getMovies = async () => {//async 비동기로 만듬 await붙어있는 함수가 다 끝나고 진행되도록 함
      const {
        data: {
          data: {
            movies
          }
        }
      } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
      this.setState({ //변하는 값 설정
        movies,
        isLoading: false
      });
    };
    componentDidMount = () => {
      this.getMovies();
    };

    render() {
      const {
        isLoading,
        movies
      } = this.state;
      return ( <section className = "container" > { //jsx는 html속성의 class와 객체의 class가 혼돈이 오기 때문에 className으로 적어줘야한다.
          isLoading ? ( <div className = "loader" >
            <span className = "loader__text" > Loading... </span>  
            </div> ) : (
              <div className = "movies">
                {movies.map(movie => (
                  <Movie
                    key = {movie.id}
                    id = {movie.id}
                    year = {movie.year}
                    title = {movie.title}
                    summary = {movie.summary}
                    poster = {movie.medium_cover_image}
                    genres = {movie.genres}
                  />
                ))}
              </div>
            )
        } </section>);
      }
    }

    export default Home;