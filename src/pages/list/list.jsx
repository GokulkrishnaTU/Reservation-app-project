import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/header'
import Navbar from '../../components/navbar/navbar'
import Searchitem from '../../components/searchitem/searchitem'
import "./list.css"




function list() {

  const [open,setOpen] = useState(false)


  const location=useLocation()
  console.log('location fristone ', location);

  const [destination,setDestinaton]=useState(location.state.destination)
  const [date,setDate]=useState(location.state.date)
  const [option,setOption]=useState(location.state.options)


  // console.log('location: ', destination,date,option);
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destinaton</label>
              <input type="text" name ="" id="" placeholder={destination}/>

            </div>
            <div className="lsItem" >
              <label htmlFor="">check-in Date</label >
              <span onClick={()=>{setOpen(!open)}} >{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>
              {open&&<DateRange
  onChange={item => setDate([item.selection])} minDate={new Date()}
  ranges={date}
  
/>}
            </div>

            <div className="lsItem">
              <label htmlFor="">Options</label>

            </div>

            <div className="OptionLIst">
           <span className='lsOpenList'>Min price <small>per Night</small></span>
           <input type="text" className="isOptionInp"  />



            </div>
            <div className="OptionLIst">
           <span className='lsOpenList'>Max price <small>per Night</small></span>
           <input type="text" className="isOptionInp" />



            </div>
            <div className="OptionLIst">
           <span className='lsOpenList'>Adult </span>
           <input type="number" min={1} className="isOptionInp" placeholder={option.adult} />



            </div>
            <div className="OptionLIst">
           <span className='lsOpenList'>Children </span>
           <input type="number" min={1} className="isOptionInp"placeholder={option.children} />



            </div>
            <div className="OptionLIst">
           <span className='lsOpenList'>Room </span>
           <input type="number" min={1} className="isOptionInp" placeholder={option.room} />



            </div>
            <button className='lsbutton'>Search</button>

          </div>
          <div className="listResult">
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default list
