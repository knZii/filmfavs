import {Container, createStyles, rem, Text, Center, Stepper, Group, Button, ActionIcon, useMantineColorScheme} from '@mantine/core'
import {IconMoon, IconSunHigh} from '@tabler/icons-react'
import {useState} from 'react'

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
        fontSize: rem(40),
        fontWeight: 900,
        lineHeight: 1.1,
        [theme.fn.smallerThan('sm')]: {
          fontSize: rem(35),
          lineHeight: 1.2
        }
    
      },
      stepper: {
        marginTop: rem(100)
      }
}));
export default () => {
    const {colorScheme, toggleColorScheme}= useMantineColorScheme();
    const {classes} = useStyles();

    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    return (
        <div className={classes.wrapper}>
             <ActionIcon radius={15} variant='light' color={colorScheme =='light'?'gray.9':'teal'} size={50} mt={30} ml={30} onClick={() => toggleColorScheme()}>
        {colorScheme == 'light'?<IconMoon />:<IconSunHigh />}
        </ActionIcon>
            <Container className={classes.inner}>
                <Center>
                <h1 className={classes.title}>Let's find your <Text component='span' variant='gradient' gradient={{from:'teal.4', to:'blue.7', deg:45}}>Fav</Text> movie together !</h1>
                </Center>
                <Stepper className={classes.stepper} active={active} allowNextStepsSelect={false} color='teal.6'>
                    <Stepper.Step label="Genre" description="What Genre you like?">

                    </Stepper.Step>
                    <Stepper.Step label="Mood" description="What is your mood?">

                    </Stepper.Step>
                    <Stepper.Step label="Actor/Actress" description="What actor/actress You like?">

                    </Stepper.Step>
                </Stepper>
                <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep} color='teal.6'>Next step</Button>
                </Group>
            </Container>
        </div>
    )
}