import React from 'react'
import "../styles/CreateListing.scss" 
import Navbar from '../components/Navbar'
import { categories } from '../data'


const CreateListing = () => {
  return (
    <>
      <Navbar />

      <div className='create-listing'>
        <h1>Publish Your Place</h1>
        <form>
          <div className='create-listing_step1'>
            <h2>Step 1: Tell us about your place</h2>
            <hr />
            <h3>Which of these categories best describes your place?</h3>
            <div className='category-list'>
              {categories.map((item, index) => {
                <div className='category' key={index}>
                  <div className='category_icon'>{category.icon}</div>
                </div>
              })}
            </div> 
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateListing