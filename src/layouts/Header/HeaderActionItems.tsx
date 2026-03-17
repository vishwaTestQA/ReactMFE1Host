
import * as styles from "./Header.module.css"

type Props = {
    setOpenSearch: (v:boolean) => void
}

const HeaderActionItems = ({setOpenSearch}:Props) => {

  return (
     <div className={`flex spaceBetween flexGap_20 hdr_actionItems`}>
          <button onClick={() => setOpenSearch(true)} className={styles.searchButton_mobile}>search</button>
          <div className="flex center flexGap_5">
          <div className="headerIcon">
          <img src="assets/images/login.jpg"/>  
          </div>
          <button>Login</button>
          <div className="headerIcon">
          <img src="assets/images/arrow.jpg"/> 
          </div>
          </div>

          <div className="flex center flexGap_5">
            <button>More</button>
            <div className="headerIcon">
            <img src="assets/images/arrow.jpg"/> 
            </div>
          </div>

          <div className="flex center flexGap_5">
            <div className="headerIcon cartIcon">
            <img src="assets/images/cart.jpg"/> 
            </div>
            <button>Cart</button>
          </div>

         </div>
  )
}

export default HeaderActionItems