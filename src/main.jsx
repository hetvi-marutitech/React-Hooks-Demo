import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LineComponent from './Components/LineComponent.jsx'
import UseStateHook from './Components/UseStateHook.jsx'
import UseEffectHook from './Components/UseEffectHook.jsx'
import UseRefHook from './Components/UseRefHook.jsx'
import SetContext from './Components/UseContextHook/SetContext.jsx'
import UseReducerHook from './Components/UseReducerHook.jsx'
import UseMemoHook from './Components/UseMemoHook.jsx'
import UseLayoutEffect from './Components/useLayoutEffect.jsx'
import UseInsertionEffect from './Components/useInsertionEffectHook.jsx'
import ToggleMessage from './Components/CustomHook/ToggleMessage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <LineComponent />
    <UseStateHook />
    <LineComponent />
    <UseEffectHook />
    <LineComponent />
    <UseRefHook />
    <LineComponent />
    <SetContext />
    <LineComponent />
    <UseReducerHook />
    <LineComponent />
    <UseMemoHook />
    <LineComponent />
    <UseLayoutEffect />
    <LineComponent />
    <UseInsertionEffect />
    <LineComponent />
    <ToggleMessage />
  </StrictMode>,
)
