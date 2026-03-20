// import styles from "./Main.module.css"

// import "./Main.module.css"
// import "./Main.module.css"

// const styles = require('./Main.module.css')
import * as styles from  "./Main.module.css"
import "./Main"
import Header from "../Header/Header"
import TestableComponent from "../TestableComponent"
import MainContent from "../MainContent/MainContent"
import HeaderTwo from "../HeaderTwo/HeaderTwo"
import HeaderThree from "../HeaderTwo/HeaderThree"
import AudioComponent from "../AudioComponent"
import WelcomeComponent from "../WelcomeComponent"
// import logo from "@/assets/images/logo.jpg"

const Main = () => {
  return (
    <div className={styles.container_ecmrc}>
    <header className ={styles.hdr_ecmrc}>
    <Header/>
    <HeaderTwo/>
    <HeaderThree/>
    </header>
    <main className={styles.main_ecmrc}>
       {/* <TestableComponent/> */}
       <WelcomeComponent name="vishwa"/>
       <WelcomeComponent name="akchaya"/>
       <AudioComponent/>
       <MainContent/>


    </main>
    <footer className={styles.ftr_ecmrc}>
      footer
    </footer>

    {/* <header className = "hdr_ecmrc">
          header
    </header>
    <main className = "main_ecmrc">
       main
    </main>
    <footer className = "ftr_ecmrc" >
      footer
    </footer> */}

    </div>
  )
}

export default Main