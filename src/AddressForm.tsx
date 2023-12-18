import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { MouseEventHandler, useState } from 'react'
import axios from 'axios'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function AddressForm() {
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')
  const [ls, setLs] = useState('')
  const [itog, setItog] = useState('')
  const [name, setName] = useState('')

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
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="ID"
            name="ID"
            label="ID"
            fullWidth
            value={id}
            onChange={({ target: { value } }) => setId(value)}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Email"
            name="Email"
            label="Email"
            fullWidth
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            autoComplete="email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Personal account"
            name="Personal account"
            label="Personal account"
            value={ls}
            onChange={({ target: { value } }) => setLs(value)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Price"
            name="Price"
            label="Price"
            value={itog}
            onChange={({ target: { value } }) => setItog(value)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Name"
            name="Name"
            label="Name"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
        <Button
          onClick={handleSubmit}
          variant="standard"
          sx={{ mt: 3, ml: 1 }}
          type={'submit'}
          color={'secondary'}
        >
          Отправить
        </Button>
        <Button variant={'contained'} color={'secondary'}>
          <Link to={`receipt?id=${id}`} style={{textDecoration: 'none', color: 'white'}}>Получить чек</Link>
        </Button>
      </Grid>
    </React.Fragment>
  );
}