import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import {getMoviesTC} from '../../redux/actions/movies';

const Header = ({userRequest, setuserRequest, currentPage}) => {
    const dispatch = useDispatch()
    const searchInput = React.createRef();

    const getMovies = () => {
        let request = searchInput.current.value;
        setuserRequest(request);
        dispatch(getMoviesTC(request, currentPage)); 
    }
    
    useEffect(() => {
        let request = searchInput.current.value;
        dispatch(getMoviesTC(request, currentPage)); 
    }, [currentPage])
    

    return (
        <header className="header">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Movie catalog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <FormControl onChange={getMovies} value={userRequest} ref={searchInput} type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                </Navbar.Collapse>
                <div className="userInfo">
                    Alexander Borisenko
                </div>
            </Navbar>
      </header>
    )
}

export default Header
