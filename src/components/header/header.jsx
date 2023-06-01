import React from 'react'
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane,faCar,faTaxi,faBed,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import {format} from "date-fns"
import { useNavigate } from 'react-router-dom';

function Header({type}) {


        const [options,setOptions] = useState({
          adult:1,
          children:4,
          room:1

        })
        const [open,setOpen] = useState(false)
        const [openOption,setOptionOpen]=useState(false)
        const [destination,setDestinaton]=useState("")

           
const navigate = useNavigate()

const search =()=>{
 navigate("/hotel",{state:{destination,date,options}})


}
        
        
const [date,setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const handleOption=(name,operation)=>{
    setOptions(options=>{return{
      ...options,

  
      
      
      // [name]:operation==="i"?options[name]+1 :options[name]-1

      [name]: operation === "i" ? options[name] + 1 :
      options[name] === 1 ? 1 :
      options[name] - 1
    }})
 

  }
  return (
    <div className='header'>
                    <div className={type==="list"?"headerContainer listmode":"headerContainer"}>

        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <FontAwesomeIcon icon="fa-brands fa-servicestack" />
            <span>stays</span>

            
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>

            
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>

            
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Attraction</span>

            
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi</span>

            
            </div>
    
        </div>


        {type!=="list"&&
          
          <>
        <h1 className="headerTitle">A lifetime of discounts ?</h1>
        <p className="headerDesc">
            get rewarded fro your travels and unlock instant svings 
        </p>
        <button className='headerbtn'>Sign in / Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faTaxi}  className="headerIcon"/>
            <input type="text" placeholder='wher are you going' name="" id="" className='headerSearchInput'
            onChange={(e)=>setDestinaton(e.target.value)}/>

            </div>
     
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays}  className="headerIcon"/>
            <span onClick={()=>setOpen(!open)}  className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>
            {open&&<DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  minDate={new Date()}
  ranges={date}
  className="dataRange"
/>}
      
        </div>

            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faTaxi}  className="headerIcon"/>
            <span onClick={()=>setOptionOpen(!openOption)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room` }</span>
            {openOption&&  <div className="options">
              <div className="optionItem">
                <span className="optionText">adult</span>
                <div className="optionCounter">
                  
                <button className="optionCount" onClick={()=>handleOption("adult","d")}>-</button>
                <span className='optionNumber' >{options.adult}</span>
                <button className="optionCount" onClick={()=>handleOption("adult","i")}>+</button>
              </div>
                </div>

              <div className="optionItem">
                

                <span className="optionText">chindren</span>
                <div className="optionCounter">                


                <button className="optionCount" onClick={()=>handleOption("children","d")}>-</button>
                <span className='optionNumber' >{options.children}</span>
                <button className="optionCount" onClick={()=>handleOption("children","i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">                


                <button className="optionCount" onClick={()=>handleOption("room","d")}>-</button>
                <span className='optionNumber' >{options.room}</span>
                <button className="optionCount" onClick={()=>handleOption("room","i")}>+</button>
                </div>
                </div>
                
                </div>

            }
     


              </div>
        <div className="headerSearchItem">
        <div className="searchItem">
            <button onClick={search} className='searchBtn' >search</button>
        </div>
        

        </div>




        </div>


        </>}


      
        </div>
        

        
        
    </div>
  )
}

export default Header
