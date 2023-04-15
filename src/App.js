import React,{createContext, useState} from 'react'
import store from './common/utils/store'
export const TextContext = createContext()
TextContext.displayName = "App"
export default function App(){

const [text,setText] = useState('')
    return (
       <TextContext.Provider value={text}>
        <div>
            This is default boilerplate app
            <textarea onChange={e => setText(e.target.value)}></textarea>
        </div>
       </TextContext.Provider>

    )
}