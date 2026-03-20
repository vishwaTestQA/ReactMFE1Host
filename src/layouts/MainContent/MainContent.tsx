import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import {isWeekend} from "../../shared/utils"
import "react-datepicker/dist/react-datepicker.css"

type Props = {}

const MainContent = (props: Props) => {
      const [selectedDate, setSelectedDate] = useState(new Date()) 
      const [selectedDate2, setSelectedDate2] = useState(new Date()) 
      const [selectedDate3, setSelectedDate3] = useState(new Date()) 
      const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptatem cumque, culpa inventore, in officiis distinctio ratione illum reprehenderit nobis maxime et consectetur possimus animi vel expedita cum. Ipsam, nam."
  return (
    <div className='normalPadding'>
        <p>{lorem.repeat(20)}</p>
        <DatePicker
           selected={selectedDate}
           onChange={(date) => setSelectedDate(date)}
           filterDate={(date) => !isWeekend(date)}
                   onClickOutside={() => setOpen(false)}

           dateFormat="dd-MMM-yyyy"
        />

        <DatePicker
           selected={selectedDate2}
           onChange={(date) => setSelectedDate2(date)}
           filterDate={(date) => isWeekend(date)}
           dateFormat="dd-MMM-yyyy"
        />

          <DatePicker
           selected={selectedDate3}
           onChange={(date) => setSelectedDate3(date)}
        //    filterDate={(date) => isWeekend(date)}
           dateFormat="dd-MMM-yyyy"
        />
    </div>
  )
}

export default MainContent