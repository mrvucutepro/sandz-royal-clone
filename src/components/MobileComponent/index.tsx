import React from 'react'
import Header from './components/Header'
import ExchangeMenu from './components/ExchangeMenu'
import GameZone from './components/GameZone'
import BoardComponent from './components/BoardComponent'
import CallCenter from './components/CallCenter'
import Footer from './components/Footer'

export default function MobileScreen() {
  return (
    <>
        <Header/>
        <ExchangeMenu/>
        <GameZone/>
        <BoardComponent title="Event"/>
        <BoardComponent title="Notice"/>
        <CallCenter/>
        <Footer/>
    </>
  )
}
