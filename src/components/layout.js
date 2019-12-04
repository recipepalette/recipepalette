/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import Container from "../components/container"
import Login from "./login"

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
          <Link sx={{ variant: `button.link` }} to="/account">
            Account
          </Link>
          <Link sx={{ variant: `button.link` }} to="/my-recipes">
            My Recipes
          </Link>
          <Login />
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
