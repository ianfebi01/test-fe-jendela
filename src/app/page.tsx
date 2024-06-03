import { Button, Typography } from '@mui/material'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
        <Typography variant="h1" fontWeight={500}>
          Form Pemesanan
        </Typography>

        <form
          style={{
            display: 'flex',
            alignItems: 'start',
            gap: '1rem',
            flexDirection: 'column',
            marginTop: '1rem',
            width: '100%',
          }}
        >
          <Button
            variant="contained"
            disableElevation
            fullWidth
            type="submit"
            sx={{
              marginTop: '2rem',
            }}
          >
            Submit
          </Button>
        </form>
      </>
    </main>
  )
}
