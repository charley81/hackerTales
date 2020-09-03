/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core'
import React from 'react'

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        * + * {
          margin-top: 1rem;
        }

        html,
        body {
          font-family: 'Raleway', sans-serif;
          line-height: 1.4;
          font-size: 1.2rem;
          color: #555;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #222;
          line-height: 1.1.%;

          + * {
            margin-top: 0.5rem;
          }
        }

        strong {
          color: #222;
        }

        li {
          margin-top: 0.25rem;
        }
      `}
    />
    <header></header>
    <main>{children}</main>
  </>
)

export default Layout
