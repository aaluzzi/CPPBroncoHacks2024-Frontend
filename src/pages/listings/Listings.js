import { Link } from "react-router-dom";
import SearchBar from "../../SearchBar";

export default function Listings() {
     //TODO fetch from backend properly
    const listings = [
        { id: 'asd23-asnnsdfb-a244', title: 'Five-Star Green Binder' },
        { id: 'gnnSadf-adfnn-afga$Dlf', title: 'Cuetec Avid Chroma Hydra' },
      ];
    
      return (
        <div>
          <SearchBar />
          <h1 className="text-xl font-bold">Listings</h1>
          <ul>
            {listings.map((listing) => (
              <li key={listing.id}>
                <Link to={`/listings/${listing.id}`}>{listing.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      );
}