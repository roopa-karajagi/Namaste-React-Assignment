const SearchBar = () =>(
    <div className="input-group">
        <div className="form-outline">
        <input type="text" placeholder="search..." />
        </div>
        <button type="button" className="btn btn-primary">
        <i class="fa fa-search" aria-hidden="true"></i>
        </button>
        
    </div>
)

export default SearchBar;