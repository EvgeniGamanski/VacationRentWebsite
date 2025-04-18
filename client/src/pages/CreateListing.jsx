import React, { useState } from 'react';
import "../styles/CreateListing.scss";
import Navbar from '../components/Navbar';
import { categories, facilities, types } from '../data';
import variables from "../styles/variables.scss";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { IoIosImages } from "react-icons/io";
import { RemoveCircleOutline, AddCircleOutline } from '@mui/icons-material';
import { BiTrash } from 'react-icons/bi';

const CreateListing = () => {
  const [category, setCategory] = useState("");
  const [type, setType] = useState("")
  const [amenities, setAmenities] = useState([])

  const [formLocation, setFormLocation] = useState({
    streetAddress: "",
    aptSuite: "",
    city: "",
    province: "",
    country: ""
  })

  const handleChangeLocation = (e) => {
    const { name, value } = e.target
    setFormLocation({
      ...formLocation,
      [name]: value,
    });
  };
  
  const [guestCount, setGuestCount] = useState(1)
  const [bedroomCount, setBedroomCount] = useState(1)
  const [bedCount, setBedCount] = useState(1)
  const [bathroomCount, setBathroomCount] = useState(1)
 
  const [photos, setPhotos] = useState([])

  const handleUploadPhotos = (e) => {
    const newPhotos = e.target.files
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos])
  }

  const handleDragPhoto = (result) => {
    if(!result.destination) return

    const items = Array.from(photos)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setPhotos(items)
  }

  const handleRemovePhotos = (indexToRemove) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_,index) => index !== indexToRemove))
  }

  return (
    <>
      <Navbar />

      <div className="create-listing">
        <h1>Publish Your Place</h1>
        <form>
          <div className='create-listing_step1'>
            <h2>Step 1: Tell us about your place</h2>
            <hr />
            <h3>Which of these categories best describes your place?</h3>
            <div className='category-list'>
              {categories.map((item, index) => {
                <div className={`category ${category === item.label ? "selected" : "" }`} key={index} onClick={() => setCategory(item.label)}>
                  <div className='category_icon'>{item.icon}</div>
                  <p>{item.label}</p>
                </div>
              })}
            </div>

            <h3>What type of place will guests have?</h3>
            <div className='type-list'>
              {types?.map((item, index) => (
                <div 
                className={`type ${type === item.name ? "selected" : ""}`} 
                key={index} onClick={() => setType(item.name)}>
                  <div className='type_text'>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className='type_icon'>{item.icon}</div>
                </div>
              ))}
            </div>

            <h3>Where is your place located?</h3>
            <div className='full'>
              <div className='location'>
                <p>Street Address</p>
                <input type="text" placeholder='Street Address' name='streetAddress' 
                value={formLocation.streetAddress}
                onChange={handleChangeLocation}
                required 
                />
              </div>
            </div>

            <div className='half'> 
              <div className='location'>
                <p>Apartment, Suite, etc. (if applicable)</p>
                <input type='text' placeholder='Apt, Suite, etc. (if applicable)' name='aptSuite' required 
                value={formLocation.aptSuite}
                onChange={handleChangeLocation}
                />
              </div>

              <div className='location'>
                <p>City</p>
                <input type='text' placeholder='City' name='city' value={formLocation.city}
                onChange={handleChangeLocation}
                 required />
              </div>
            </div>

            <div className='half'> 
              <div className='location'>
                <p>Province</p>
                <input type='text' placeholder='Province' name='province'
                value={formLocation.province}
                onChange={handleChangeLocation}
                required />
              </div>

              <div className='location'>
                <p>Country</p>
                <input type='text' placeholder='Country' name='country'
                value={formLocation.country}
                onChange={handleChangeLocation}
                 required />
              </div>
            </div>

            <h3>Share some basics about your place</h3>
            <div className='basics'>
              <div className='basic'>
                <p>Guests</p>
                <div className='basic_count'>
                  <RemoveCircleOutline sx={{ fontSize: "25px", cursor: "pointer", "&:hover":{ color: variables.pinkred } }} />
                  <p>1</p>
                  <AddCircleOutline sx={{ fontSize: "25px", cursor: "pointer", "&:hover":{ color: variables.pinkred } }} />
                </div>
              </div>

              <div className='basic'>
                <p>Bedrooms</p>
                <div className='basic_count'>
                  <RemoveCircleOutline sx={{ fontSize: "25px", cursor: "pointer", "&:hover":{ color: variables.pinkred } }} />
                  <p>1</p>
                  <AddCircleOutline sx={{ fontSize: "25px", cursor: "pointer", "&:hover":{ color: variables.pinkred } }} />
                </div>
              </div>

              <div className='basic'>
                <p>Beds</p>
                <div className='basic_count'>
                  <RemoveCircleOutline sx={{ fontSize: "25px", cursor: "pointer", "&:hover":{ color: variables.pinkred } }} />
                  <p>1</p>
                  <AddCircleOutline sx={{ fontSize: "25px", cursor: "pointer", "&:hover":{ color: variables.pinkred } }} />
                </div>
              </div>

              <div className='basic'>
                <p>Bathrooms</p>
                <div className='basic_count'>
                  <RemoveCircleOutline sx={{ fontSize: "25px", cursor: "pointer", "&:hover":{ color: variables.pinkred } }} />
                  <p>1</p>
                  <AddCircleOutline sx={{ fontSize: "25px", cursor: "pointer", "&:hover":{ color: variables.pinkred } }} />
                </div>
              </div>
            </div>
          </div>

          <div className='create-listing_step2'>
            <h2>Step 2: Make your place stand out</h2>
            <hr />

            <h3>Tell guests what your place has to offer</h3>
            <div className='amenities'>
              {facilities?.map((item, index) => (
                <div className='facility' key={index}>
                  <div className='facility_icon'>{item.icon}</div>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>

            <h3>Add some photos of your place</h3>
            <DragDropContext onDragEnd={handleDragPhoto}>
              <Droppable droppableId='photos' direction='horizontal'>
                {(provided) => (
                  <div className='photos' {...provided.droppableProps} ref={provided.innerRef}
                  >
                    { photos.length < 1 && (
                      <>
                          <input id="image" type='file' style={{ display: "none" }} accept='image/*' 
                          onChange={handleUploadPhotos} 
                          multiple
                          />
                          <label htmlFor='image' className='alone'>
                            <div className='icon'><IoIosImages /></div>
                            <p>Upload from your device</p>
                          </label>
                      </>
                    )}

                    {photos.length >= 1 && (
                      <>
                        {photos.map((photo, index) => {
                          return (
                            <Draggable key={index} draggableId={index.toString()} index={index}>
                              {(provided) => (
                                <div className='photo' ref={provided.innerRef} {...provided.draggableProps} 
                                {...provided.dragHandleProps}
                                >
                                  <img src={URL.createObjectURL(photo)} alt='place' />
                                    <button type='button' onClick={() => handleRemovePhotos(index)}>
                                      <BiTrash />
                                    </button>
                                </div>
                              )}
                            </Draggable>
                          )
                        })}
                        <input id="image" type='file' style={{ display: "none" }} accept='image/*' 
                          onChange={handleUploadPhotos} 
                          multiple
                          />
                          <label htmlFor='image' className='together'>
                            <div className='icon'><IoIosImages /></div>
                            <p>Upload from your device</p>
                          </label>  
                      </>
                    )}
                  </div>
                )}
              </Droppable>
            </DragDropContext>

            <h3>What makes your place attractive and exciting?</h3>
            <div className='description'>
              <p>Title</p>
              <input type='text' placeholder='Title' name='title' required />
              <p>Description</p>
              <textarea type='text' placeholder='Description' name='description' required />
              <p>Highlight</p>
              <input type='text' placeholder='Highlight' name='highlight' required />
              <p>Highlight details</p>
              <textarea type='text' placeholder='Highlight details' name='highlightDesc' required />
              <p>Now, set your PRICE</p>
              <span>$</span>
              <input type="number" placeholder='100' name='price' 
              className='price' required
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateListing