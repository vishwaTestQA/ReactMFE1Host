
import * as styles from "./Header.module.css"
import * as styles2 from "./HeaderTwo.module.css"

type Props = {
    setOpenSearch: (v: boolean) => void,
    openSearch: boolean
}

const HeaderActionItemsTwo = ({ openSearch, setOpenSearch }: Props) => {

    return (
        <div className={`${styles2.flexTwo}`} style={{ height: "100%" }}>
            {!openSearch && <button onClick={() => setOpenSearch(true)} className={styles2.searchButtonTwo_mobile}>search</button>}
            <div className="flex center flexGap_5">
                <div className="headerIcon">
                    <img src="assets/images/login.jpg" />
                </div>
                <button>Login</button>
                {/* <div className="headerIcon">
          <img src="assets/images/arrow.jpg"/> 
          </div> */}
            </div>

            <div className="flex center flexGap_5">
                <div className="headerIcon">
                    <img src="assets/images/arrow.jpg" />
                </div>

                <button>More</button>

            </div>

            <div className="flex center flexGap_5">
                <div className="headerIcon cartIcon">
                    <img src="assets/images/cart.jpg" />
                </div>
                <button>Cart</button>
            </div>

        </div>
    )
}

export default HeaderActionItemsTwo