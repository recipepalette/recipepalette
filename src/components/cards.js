/** @jsx jsx */
import { jsx } from "theme-ui"
import { FiBookmark, FiHeart, FiCopy } from "react-icons/fi"

const CardSkeleton = ({ children, ...props }) => {
  return (
    <div
      sx={{
        cursor: `pointer`,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

const RecipeCard = ({ name = `Recipe Name`, heart }) => (
  <CardSkeleton
    sx={{
      display: `grid`,
      gridTemplateRows: `125px auto 32px`,
      position: `relative`,
      minHeight: 150,
      p: `3`,
      borderRadius: `1`,
      backgroundColor: `background`,
      transition: `0.3s all`,
      boxShadow: `0px 2px 4px 0px rgba(225, 227, 229, 0.75)`,
      "&:hover": {
        boxShadow: `0px 3.5px 6px 0px rgba(225, 227, 229, 0.75)`,
      },
    }}
  >
    <div
      sx={{
        height: 125,
        borderRadius: `1`,
        backgroundColor: `#DDD`,
        backgroundImage: `url(https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80)`,
        backgroundSize: `cover`,
      }}
    />
    <div
      sx={{
        mt: `2`,
      }}
    >
      <span
        sx={{
          fontSize: `3`,
        }}
      >
        {name}
      </span>
    </div>
    <div
      sx={{
        display: `flex`,
        flexDirection: `row`,
      }}
    >
      <div sx={{ display: `flex`, alignItems: `center` }}>
        <FiHeart />
        <span
          sx={{
            fontSize: `1`,
            ml: `1`,
          }}
        >
          5
        </span>
      </div>
      <div sx={{ display: `flex`, alignItems: `center`, ml: `3` }}>
        <FiCopy />
        <span
          sx={{
            fontSize: `1`,
            ml: `1`,
          }}
        >
          5
        </span>
      </div>
    </div>
    <div
      sx={{
        borderRadius: 50,
        backgroundColor: `background`,
        border: theme => `1px solid ${theme.colors.border}`,
        position: `absolute`,
        width: 36,
        height: 36,
        right: 24,
        top: 120,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      <FiBookmark size={24} />
    </div>
  </CardSkeleton>
)

const GenericCard = ({ name = `Recipe Name` }) => (
  <CardSkeleton
    sx={{
      py: `4`,
      px: `4`,
      borderRadius: `1`,
      textAlign: `center`,
      border: `border`,
      backgroundColor: `background`,
      transition: `0.3s all`,
      boxShadow: `0px 1.5px 3px 0px rgba(225, 227, 229, 0.6)`,
      "&:hover": {
        boxShadow: `0px 3.5px 6px 0px rgba(225, 227, 229, 0.6)`,
      },
    }}
  >
    {name}
  </CardSkeleton>
)

const NewCard = () => (
  <CardSkeleton
    sx={{
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      color: `border`,
      fontSize: `3`,
      py: `4`,
      px: `4`,
      borderRadius: `1`,
      textAlign: `center`,
      border: theme => `1px dashed rgba(202, 204, 206, 0.6)`,
      backgroundColor: `background`,
      transition: `0.3s all`,
      boxShadow: `0px 0 0 0px rgba(225, 227, 229, 0.6)`,
      "&:hover": {
        boxShadow: `0px 3.5px 6px 0px rgba(225, 227, 229, 0.6)`,
      },
    }}
  >
    + Add New
  </CardSkeleton>
)

export { NewCard, GenericCard, RecipeCard }
