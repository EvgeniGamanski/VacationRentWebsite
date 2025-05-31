import { useParams } from "react-router-dom"
import "../styles/List.scss"
import { useSelector } from "react-redux"

const SearchPage = () => {
    const { search } = useParams()
    const listings = useSelector((state) => state.listings)
    return (
    <>
    <NavBar />
    <h1 className="title-list">{search}</h1>
    <div className="list">
        {wishList?.map(
            ({
                 _id,creator ,listingPhotoPaths, city, province, country, category, type, price, booking = false }) => (
            <ListingCard 
                listingId={_id}
                creator={creator}
                listingPhotoPaths={listingPhotoPaths}
                city={city}
                province={province}
                country={country}
                category={category}
                type={type}
                price={price}
                booking={booking}
            />))}
    </div>
    </>
  )
}

export default SearchPage