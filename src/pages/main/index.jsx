import React from 'react'
import { Outlet } from 'react-router-dom'

// Assets importation
import './style.scss'

// Layout importation
import __MAIN_HEADER__ from '@pages/main/layout/header/mainHeader'
import __MAIN_FOOTER__ from '@pages/main/layout/footer/mainFooter'

// Components importation
import ScroolToTop from '@components/ui/scrollToTop/scrollToTop'


function main() {
  return (
    <div className='main-container'>
      {/* CONSTANT COMPONENTS */}
      <ScroolToTop />

      <__MAIN_HEADER__/>
      <div className="main-content">
        <Outlet />
      </div>
      <__MAIN_FOOTER__/>
    </div>
  )
}

export default main
