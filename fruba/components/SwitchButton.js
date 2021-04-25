import { Button } from "react-bootstrap"
import styles from "../styles/SwitchButton.module.css"

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
                src={isSwitchedToAnimal
                    ? `/assets/close-button.svg`
                    : `/assets/char_switch/${char}_ph_switch.jpg`
                }
            />
        </Button>
        : <></>
    )
}

export default SwitchButton