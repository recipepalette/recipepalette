/** @jsx jsx */
import { jsx } from "theme-ui"

const Container = ({ children, ...props }) => (
  <div
    sx={{
      p: `4`,
      maxWidth: 960,
      margin: `0 auto`,
    }}
    {...props}
  >
    {children}
  </div>
)

export default Container
