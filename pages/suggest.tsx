import {Container, createStyles, rem, Text, Center, Stepper, Group, Button, ActionIcon, useMantineColorScheme, MultiSelect, Flex, NativeSelect} from '@mantine/core'
import {IconMoon, IconSunHigh} from '@tabler/icons-react'
import {useState} from 'react'

const useStyles = createStyles(theme => ({
    wrapper: {
        position: 'relative',
        boxSizing: 'border-box',
        backgroundColor: theme.colorScheme == 'dark' ? theme.colors.dark[7] : theme.white,
        height: '90vh'
      },
      inner: {
        position: 'relative',
        paddingTop: rem(180),
        height: '100%',
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
      },
      inputselect: {
        marginTop: rem(70),
        marginBottom: rem(30),
        width: '70%',
        
      },
      themechange: {
        position: 'absolute',
        top: rem(35),
        left: rem(30),
        [theme.fn.smallerThan('sm')]: {
        top: rem(10),
        left: rem(5),
        }
      }
}));
export default () => {
    const {colorScheme, toggleColorScheme}= useMantineColorScheme();
    const {classes} = useStyles();

    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const [favgenres, setFavgenres] = useState(Array<string>);
    const [favactor, setFavactor] = useState(Array<string>);
    const [mood, setMood] = useState('');
    const actors = ["actor1", "actor2", "actor3"]
    const genres = [
      {value: 'action', label: 'Action'},
      {value: 'comedy', label: 'Comedy'},
      {value: 'horror', label: 'Horror'}]
    return (
        <div className={classes.wrapper}>
             <ActionIcon className={classes.themechange} radius={15} variant='light' color={colorScheme =='light'?'gray.9':'teal'} size={50} onClick={() => toggleColorScheme()}>
        {colorScheme == 'light'?<IconMoon />:<IconSunHigh />}
        </ActionIcon>
            <Container className={classes.inner} >
                <Flex direction='column' justify='space-between' style={{height: '70%'}}>
                  <Flex direction='column'>
                    <Center>
                      <h1 className={classes.title}>Let's find your <Text component='span' variant='gradient' gradient={{from:'teal.4', to:'blue.7', deg:45}}>Fav</Text> movie together !</h1>
                    </Center>
                  <Stepper breakpoint='sm' className={classes.stepper} active={active} allowNextStepsSelect={false} color='teal.6'>
                      <Stepper.Step label="Genre" description="What Genre you like?">
                        <Center>
                        <MultiSelect value={favgenres} onChange={setFavgenres}  transitionProps={{ duration: 150, transition: 'pop-top-left', timingFunction: 'ease' }} variant='filled' className={classes.inputselect} searchable nothingFound="Nothing found!"  placeholder='Select genres you like up to 3!' data={genres} maxSelectedValues={3}/>
                        </Center>
                      </Stepper.Step>
                      <Stepper.Step label="Mood" description="What is your mood?">
                        <Center>
                        <NativeSelect value={mood} onChange={event => setMood(event.currentTarget.value)}  data={["Bad", "Good"]}  variant='filled' className={classes.inputselect}/>
                        </Center>
                      </Stepper.Step>
                      <Stepper.Step label="Actor/Actress" description="What actor/actress You like?">
                      <Center>
                        <MultiSelect value={favactor} onChange={setFavactor}  transitionProps={{ duration: 150, transition: 'pop-top-left', timingFunction: 'ease' }} variant='filled' className={classes.inputselect} searchable nothingFound="Nothing found!"  placeholder='Select Acotrs you like up to 3!' data={actors} maxSelectedValues={3}/>
                        </Center>
                      </Stepper.Step>
                  </Stepper>
                  </Flex>
                  <Group position="center" mt="xl">
                  <Button variant="default" onClick={prevStep}>Back</Button>
                  <Button onClick={nextStep} color='teal.6'>Next step</Button>
                  </Group>
                </Flex>
            </Container>
        </div>
    )
}