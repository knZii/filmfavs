import {MediaQuery, Container, Text, createStyles, rem, Button, ThemeIcon, SimpleGrid, ActionIcon, useMantineColorScheme} from '@mantine/core'
import {IconMovie, IconSearch, IconDeviceTv, IconSunHigh, IconMoon} from "@tabler/icons-react"
import Link from 'next/link'
const useStyles = createStyles(theme => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme == 'dark' ? theme.colors.dark[7] : theme.white
  },
  inner: {
    position: 'relative',
    paddingTop: rem(180),
    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(80)
    }

  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(35),
      lineHeight: 1.2
    }

  },
  description: {
    fontSize: rem(26),
    marginTop: rem(90),
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(17),
      marginTop: rem(35)
    }
  },
  button: {
    marginTop: rem(45),
    [theme.fn.smallerThan('sm')]: {
      marginTop: rem(30)
    }
    
  }
}))

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}
function Feature({icon: Icon, title, description} : FeatureProps) {
  return(
    <div>
      <ThemeIcon variant='light' color='indigo' size={40} radius={15}>
        <Icon size="1.1rem" stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  )
}


export default () => {
  const {colorScheme, toggleColorScheme}= useMantineColorScheme();
  const {classes} = useStyles();
  return (
    <div className={classes.wrapper}>
      <ActionIcon radius={15} variant='light' color={colorScheme =='light'?'gray.9':'teal'} size={50} mt={30} ml={30} onClick={() => toggleColorScheme()}>
        {colorScheme == 'light'?<IconMoon />:<IconSunHigh />}
      </ActionIcon>
      <Container className={classes.inner}>
      <h1 className={classes.title}><Text component='span' variant='gradient' gradient={{from: 'teal', to: 'indigo', deg: 25}}>FilmFaves</Text> Your Personalized Movie Recommendation Engine</h1>
      <Text className={classes.description} color='dimmed'>Find Your Next Favorite Movie with Filmfaves: Get Customized Movie Recommendations Based on Your Tastes and Preferences</Text>
      <MediaQuery smallerThan='sm' styles={{display: 'none'}}>
      <Button
            component={Link}
            href="/suggest"
            size="xl"
            className={classes.button}
            variant="gradient"
            gradient={{ from: 'teal', to: 'blue' }}
          >
            Find your movie !
          </Button>
      </MediaQuery>
      <MediaQuery largerThan='sm' styles={{display: 'none'}}>
      <Button
            size="md"
            className={classes.button}
            variant="gradient"
            gradient={{ from: 'teal', to: 'blue' }}
          >
            Find your movie !
          </Button>
      </MediaQuery>

      <MediaQuery smallerThan='sm' styles={{display: 'none'}}>
      <SimpleGrid cols={3} mt={100} spacing={60}>
      <Feature icon={IconMovie} title="Personalized Recommendations"  description="Highlight how MovieFavs uses user interests and preferences to provide tailored movie recommendations."/>
      <Feature icon={IconDeviceTv} title="Genre-based Filtering"  description="Highlight how MovieFavs enables users to filter movies based on genres of their choice for easy movie discovery."/>
      <Feature icon={IconSearch} title="Advanced Search"  description="Highlight how MovieFavs provides advanced search options such as actor, director, and keyword search for precise movie recommendations."/>
      </SimpleGrid>
      </MediaQuery>
      <MediaQuery largerThan='sm' styles={{display: 'none'}}>
      <SimpleGrid cols={1} mt={60} spacing={30}>
      <Feature icon={IconMovie} title="Personalized Recommendations"  description="Highlight how MovieFavs uses user interests and preferences to provide tailored movie recommendations."/>
      <Feature icon={IconDeviceTv} title="Genre-based Filtering"  description="Highlight how MovieFavs enables users to filter movies based on genres of their choice for easy movie discovery."/>
      <Feature icon={IconSearch} title="Advanced Search"  description="Highlight how MovieFavs provides advanced search options such as actor, director, and keyword search for precise movie recommendations."/>
      </SimpleGrid>
      </MediaQuery>
      </Container>
    </div>
  )
}