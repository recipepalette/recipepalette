/** @jsx jsx */
import { jsx } from "theme-ui"

import Title from "../components/title"
import Layout from "../components/layout"
import { NewCard, RecipeCard } from "../components/cards"

export default ({ data }) => (
  <Layout>
    <div>
      <Title>My Recipes</Title>
      <div
        sx={{
          display: `grid`,
          gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`,
          gridAutoFlow: `row`,
          gridGap: `3`,
          mb: `4`,
        }}
      >
        <NewCard />
        <RecipeCard name="Hammy's Delightful Chocolate Chip Cookies" />
        <RecipeCard name="Bread" />
        <RecipeCard name="Desserts" />
        <RecipeCard name="Breakfast" />
        <RecipeCard name="Pasta" />
      </div>
    </div>
  </Layout>
)
