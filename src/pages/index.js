/** @jsx jsx */
import { jsx } from "theme-ui"

import Title from "../components/title"
import Layout from "../components/layout"
import { GenericCard } from "../components/cards"

export default ({ data }) => (
  <Layout>
    <div
      sx={{
        textAlign: `center`,
        mt: `6`,
      }}
    >
      <Title>The best way to keep track of recipes</Title>
      <input
        sx={{ px: `3`, py: `2`, mb: `6`, fontSize: `3`, minWidth: `75%` }}
        placeholder="Find a recipe..."
      />
    </div>
    <h2>Explore Recipes</h2>
    <div
      sx={{
        display: `grid`,
        gridTemplateColumns: `repeat(auto-fit, minmax(175px, 1fr))`,
        gridAutoFlow: `row`,
        gridGap: `2`,
        mb: `4`,
      }}
    >
      <GenericCard name="Appetizers" />
      <GenericCard name="Bread" />
      <GenericCard name="Desserts" />
      <GenericCard name="Breakfast" />
      <GenericCard name="Pasta" />
    </div>
  </Layout>
)
