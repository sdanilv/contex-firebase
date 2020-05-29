import { createContext } from "react"

export  {createContext} from "react"
type AlertContextProps = {
    alertOn: (message: string) => void,
    alertOff: () => void, alert: boolean, alertMessage: string
}
export default createContext<Partial<AlertContextProps>>({})