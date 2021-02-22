
import FunRobo from '../Components/fun';
import React, {Component } from 'react';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import Robot from '../Components/Robot';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
        robo:[],
        searchField:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(users =>this.setState({robo:users}))
         }

onSearchChange = (event) => 
{
     this.setState({searchField:event.target.value});
    
}

    render()
     {
        const filterRobots = this.state.robo.filter(robo => {
            return robo.name.toLowerCase().includes(this.state.searchField.toLowerCase());
             })
             if (this.state.robo.length === 0){
                 return <h1> Loading.. Please Wait</h1>
             }
             else
             {
                return (
                    <React.Fragment>
                        <div className="tc">
                        <h1>BE GRATEFUL</h1>
                        <SearchBox searchChange = {this.onSearchChange}/>
                        <Scroll>
                        <FunRobo robo = {filterRobots} />
                        </Scroll>
                        </div>
                    </React.Fragment>
                )
                }
             }
}
export default App;

