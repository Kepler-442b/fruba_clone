import { Button } from "react-bootstrap"
import styles from "../styles/SwitchButton.module.css"
import PropTypes from "prop-types"

const SwitchButton = (props) => {

    const {
        onClickHandler,
        isJyuniji,
        isSwitchedToAnimal,
        char
    } = props

    return (
        isJyuniji ?
            <Button
                className={styles.switch_button}
                onClick={onClickHandler}
            >
                <img
                className={styles.change_icon}
                    src={isSwitchedToAnimal
                        ? `/assets/close-button.svg`
                        : `/assets/char_switch/${char}_ph_switch.jpg`
                    }
                />
            </Button>
            : <></>
    )
}

SwitchButton.PropTypes = {
    onClickHandler: PropTypes.func,
    isJyuniji: PropTypes.bool,
    isSwitchedToAnimal: PropTypes.bool,
    char: PropTypes.string
}

SwitchButton.defaultProps = {
    onClickHandler: () => { },
    isJyuniji: true,
    isSwitchedToAnimal: false,
    char: ""
}


export default SwitchButton