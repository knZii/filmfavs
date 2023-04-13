import {Container, Text, createStyles, rem, Button} from '@mantine/core'


const useStyles = createStyles(theme => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme == 'dark' ? theme.colors.dark : theme.white
  },
  inner: {
    position: 'relative',
    paddingTop: rem(200),
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,
  },
  description: {
    fontSize: rem(26),
    marginTop: rem(90)
  },
  button: {
    marginTop: rem(45)
  }
}))

export default () => {
  const {classes} = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container className={classes.inner}>
      <h1 className={classes.title}><Text component='span' variant='gradient' gradient={{from: 'teal', to: 'indigo', deg: 25}}>FilmFaves</Text> Your Personalized Movie Recommendation Engine</h1>
      <Text className={classes.description} color='dimmed'>Find Your Next Favorite Movie with Filmfaves: Get Customized Movie Recommendations Based on Your Tastes and Preferences</Text>
      <Button
            size="xl"
            className={classes.button}
            variant="gradient"
            gradient={{ from: 'teal', to: 'blue' }}
          >
            Find your movie !
          </Button>
      </Container>
    </div>
  )
}