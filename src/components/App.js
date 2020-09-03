import React from 'react'
import { render } from 'react-dom'
import Layout from './layout/layout'

export default function App() {
  return (
    <Layout>
      <h1>What Up</h1>
    </Layout>
  )
}

render(React.createElement(App), document.getElementById('root'))
