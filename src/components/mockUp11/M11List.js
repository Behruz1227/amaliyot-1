import React from 'react'
import { afonse } from '../assets'

function M11List() {
  return (
    <div className='row w-100 mokUp13-list mt-3'>
      <div className="col">30.11.2019 00:49</div>
      <div className="col-3"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#3DD598" />
        <path d="M16.8108 15.1541H15.1892C14.2654 15.1541 13.5138 14.3142 13.5138 13.282C13.5138 12.2496 14.2654 11.4098 15.1892 11.4098H18.4323C18.8504 11.4098 19.1893 11.0311 19.1893 10.5639C19.1893 10.0968 18.8504 9.71804 18.4323 9.71804H16.7569V7.84586C16.7569 7.37872 16.418 7 16 7C15.582 7 15.2431 7.37872 15.2431 7.84586V9.71804H15.1893C13.4307 9.71804 12 11.3168 12 13.282C12 15.2471 13.4307 16.8458 15.1893 16.8458H16.8108C17.7346 16.8458 18.4862 17.6857 18.4862 18.718C18.4862 19.7503 17.7346 20.5902 16.8108 20.5902H13.5677C13.1497 20.5902 12.8108 20.9689 12.8108 21.436C12.8108 21.9032 13.1497 22.2819 13.5677 22.2819H15.2431V24.1541C15.2431 24.6213 15.582 25 16 25C16.418 25 16.7569 24.6213 16.7569 24.1541V22.2819H16.8108C18.5693 22.2819 20 20.6831 20 18.718C20 16.7529 18.5693 15.1541 16.8108 15.1541Z" fill="white" />
      </svg>  <span className='ms-2'><img src={afonse} alt="." /></span>
        <span className='ms-2'> Afonso Pinto</span>
      </div>
      <div className="col">1</div>
      <div className="col-2">Самира</div>
      <div className="col text-center">13000</div>
      <div className="col-2 float-end">
        <div class="form-check float-end">
          <input class="form-check-input float-end" type="checkbox" value="" id="flexCheckDefault2" />
        </div>
      </div>
    </div>
  )
}

export default M11List