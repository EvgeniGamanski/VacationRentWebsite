import { useDispatch } from "react-redux";
import { categories } from "../data";
import "../styles/Listings.scss";
import ListingCard from "./ListingCard";
import Loader from "./Loader"
import { useState } from "react";

const Listings = () => {
  const dispatch = useDispatch()
  const [loading, setLoading ] = useState(true)

  const [selectedCategory, setSelectedCategory] = useState("")
 
  const listings = useSelector((state) => state.listings)

  const getFeedListings = async () => {
    try {
        const response = await fetch("http://localhost:3001/")
    } catch (err) {}
  }
  return (
    <div className='category-list'>
        {categories?.map((category, index) => (
            <div className={`category`} key={index}>
                <div className="category_icon">{category.icon}</div>
                <p>{category.label}</p>
            </div>
        ))}
    </div>
  )
}

export default Listings