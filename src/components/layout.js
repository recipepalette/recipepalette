/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import Container from "../components/container"

const Layout = ({ children }) => (
  <div
    sx={{
      height: `100%`,
      backgroundColor: `background`,
    }}
  >
    <header
      sx={{
        borderBottom: `1px solid`,
        borderBottomColor: `border`,
      }}
    >
      <Container
        sx={{
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-between`,
        }}
      >
        <div>
          <Link to="/">Recipe Palette</Link>
        </div>
        <div sx={{ "*+*": { marginLeft: `3` } }}>
          <Link to="/account">Account</Link>
          <Link to="/my-recipes">My Recipes</Link>
        </div>
      </Container>
    </header>
    <main
      sx={{
        position: `relative`,
      }}
    >
      <Container>{children}</Container>
    </main>
    <footer
      sx={{
        borderTop: `1px solid`,
        borderTopColor: `border`,
      }}
    >
      <Container>
        <Link to="/">Recipe Palette</Link>
      </Container>
    </footer>
  </div>
)

export default Layout
