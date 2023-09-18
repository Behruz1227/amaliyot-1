import React from 'react'
import './Nawbar.css'
function Nawbar() {
    return (
        <>
            <div className='nawbar'>
               <p className='prompt'>Приветсвую вас Алексей, желаю огромных продаж! </p>
               <p className='srok'>Oсталось 6 дней до активации </p>
               <p className='slujbaPoderjki'>Cлужба поддержки</p>
               <select className='langs'>
                    <option>Русский</option>
                    <option>O'zbek Tili</option>
                    <option>English</option>
               </select>
               <svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25" fill="currentColor" class="envelope bi bi-envelope-fill" viewBox="0 0 16 16">
               <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
               </svg>  
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="notification bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
</svg>
        
        
            </div> 
        </>
    )
}

export default Nawbar
