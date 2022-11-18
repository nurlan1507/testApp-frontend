import React,{useState, createContext} from 'react'

type ContextProviderProp ={
  children:React.ReactNode
}

const [showEditBar, setShowEditBar] = useState(false)
type IBar ={
  show:boolean
  toggle:()=>void
}

export const BarContext = createContext<IBar|null>(null)
export const BarContextProvider:React.FC<ContextProviderProp>=({children})=>{
  const bar:IBar={
    show:showEditBar,
    toggle:()=>setShowEditBar(!showEditBar)
  }
  return <BarContext.Provider value={bar||null}>{children}</BarContext.Provider>
}
