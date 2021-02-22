
const SearchBox = ({searchField, searchChange}) =>{
    return (
        <div className="pa2">
        <input className="ba pa3 b--green bg-lightest-blue" 
        type="search" 
        placeholder="Type your fvrt robot" 
        onChange={searchChange} />
        </div>
    );
}
export default SearchBox;