import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import CardItem from './components/Card/Card';
import Header from './components/Header/Header';
import Paginator from './components/Pagination/Pagination';

function App() {

    const {movies, totalCount, currentPage, pageSize, portionSize} = useSelector(({movies}) => movies)

    const cardList = movies.map(movie => (
        <CardItem
            key={movie.imdbID}
            title={movie.Title}
            imdbID={movie.imdbID}
            type={movie.Type}
            poster={movie.Poster}
            year={movie.Year}/>
    ))

    const [userRequest, setuserRequest] = useState('')


    return (
        <div className="App">
            <Header currentPage={currentPage} userRequest={userRequest} setuserRequest={setuserRequest}/>
            {userRequest
                ? (
                    <div className="container resultText mt-5 mb-5">
                        <h2>You searched for: {userRequest}, {totalCount} results found</h2>
                    </div>
                )
                : (
                    <div className="container resultText mt-5 mb-5">
                        <h2>Input your request in search</h2>
                    </div>
                )

            }

            <div className="paginatorContainer mt-3">
                {cardList.length === 0
                    ? ''
                    : <Paginator className="container"
                                 totalCount={totalCount}
                                 currentPage={currentPage}
                                 pageSize={pageSize}
                                 portionSize={portionSize}
                    />
                }
            </div>
            <div className="cardsContainer container mt-5 mb-4">
                {cardList}
            </div>
            <div className="paginatorContainer mt-3">
                {cardList.length === 0
                    ? ''
                    : <Paginator className="container mt-5"
                                 totalCount={totalCount}
                                 currentPage={currentPage}
                                 pageSize={pageSize}
                                 portionSize={portionSize}
                    />
                }
            </div>
        </div>
    );
}

export default App;
