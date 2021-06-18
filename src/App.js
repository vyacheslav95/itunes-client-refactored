import React from "react"
import './App.css'
import Layout from "./components/hoc/Layout/Layout"
import Music from "./components/Music/Music"

function App() {
  return (
    <div className="App">
      <Layout>
        <Music/>
      </Layout>
    </div>
  )
}

export default App
