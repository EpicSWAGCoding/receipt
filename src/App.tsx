// @ts-nocheck
import { Box, Button, Paper, TextField, createTheme } from '@mui/material'
import { MouseEventHandler, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './index.css'

function App() {
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')
  const [ls, setLs] = useState('')
  const [itog, setItog] = useState('')
  const [name, setName] = useState('')
  // {
  //   "PAY_ID": "e05acc96-1949-741b-a002-30e901fda8fa",
  //   "PAY_ACTION": "REG",
  //   "PAY_DATE": "2020-01-30 10:16:27",
  //   "PAY_EMAIL": "",
  //   "PAY_LS": "724144",
  //   "PAY_ITOG":"17359",
  //   "PAY_NAME": "Оплата водопотребления л/с 724144"
  // }

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    if (!id || !email || !ls || !itog || !name) return
    const REQ = {
      PAY_ID: id,
      PAY_ACTION: 'REG',
      PAY_DATE: new Date(),
      PAY_EMAIL: email,
      PAY_LS: ls,
      PAY_ITOG: itog,
      PAY_NAME: name,
    }

    console.log(`${JSON.stringify(REQ)}`)
    axios
      .get(`https://pay.pay-ok.org/demo/?REQ=${JSON.stringify(REQ)}`)
      .then((response) => console.log(response))
  }

  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Box>
        <Paper
          sx={{
            width: 400,
            padding: 3,
          }}
          elevation={2}
        >
          <form
            style={{
              rowGap: 20,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <TextField
              label={'ID'}
              required
              value={id}
              onChange={({ target: { value } }) => setId(value)}
              color={'secondary'}
            />
            <TextField
              label={'Email'}
              required
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
              color={'secondary'}
            />
            <TextField
              label={'Personal account'}
              required
              value={ls}
              onChange={({ target: { value } }) => setLs(value)}
              color={'secondary'}
            />
            <TextField
              label={'Price'}
              required
              value={itog}
              onChange={({ target: { value } }) => setItog(value)}
              color={'secondary'}
            />
            <TextField
              label={'Name'}
              required
              value={name}
              onChange={({ target: { value } }) => setName(value)}
              color={'secondary'}
            />
            <Button
              onClick={handleSubmit}
              variant={'contained'}
              type={'submit'}
              color={'secondary'}
            >
              Отправить
            </Button>
          </form>
        </Paper>
        <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 5}}>
          <Button variant={'contained'} color={'secondary'}>
            <Link to={`receipt?id=${id}`} style={{textDecoration: 'none', color: 'white'}}>Получить чек</Link>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default App
