import { useContext } from 'react'
import { AppContext } from '../app/Provider'


const A = ({}) => {
    const [state, setState] = useContext(AppContext)
    return(
        <>
            <input type = "text"  onChange = {(e) => setState({...state, a: e.target.value})}/>
            <input type = "text"  onChange = {(e) => setState({...state, b: e.target.value})}/>
        </>
    )
}

export default A