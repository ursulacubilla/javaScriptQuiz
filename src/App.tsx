import { Container, Stack, Typography } from '@mui/material'
import './App.css'
import { JavaScriptLogo } from './JavaScriptLogo'
import { Start } from './Start';
import { useQuestionsStore } from './store/questions';
import { Game } from './Game';

function App() {
  const questions = useQuestionsStore(state => state.questions)

  return (
    <main>
      <Container maxWidth='sm'>
    <Typography variant='h2' component='h1'>
      <Stack direction='row' gap={2} alignItems='center' justifyContent='CenterFocusStrong'>
    <JavaScriptLogo />
     JavaScript Quizz
     </Stack>
     </Typography>

   

    {questions.length === 0 && <Start />}
    {questions.length > 0 && <Game />}
     </Container>
    </main>
  )
}

export default App
