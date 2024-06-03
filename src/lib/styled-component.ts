import { Box, Paper, styled } from '@mui/material'

export const CustomPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(4),
  borderRadius: '16px',
  ...theme.typography.body2,
  textAlign: 'center',
}))

export const CustomBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
}))
