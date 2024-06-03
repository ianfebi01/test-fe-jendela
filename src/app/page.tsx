'use client'
import { AppContext } from '@/context/AppContext'
import { CustomBox, CustomPaper } from '@/lib/styled-component'
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import Link from 'next/link'
import { useContext } from 'react'
import * as yup from 'yup'

export default function Home() {
  const { dispatch } = useContext(AppContext)
  const schema = yup.object({
    sourceOrder: yup.string().required().label('Sumber Pesanan'),
    name: yup.string().min(2).max(50).required().label('Nama'),
    phone: yup
      .string()
      .matches(/^[0-9]\d*$/, 'Phone number is not valid, should be 08xxxxxxxxx')
      .required()
      .label('Nomor Hp'),
    qty: yup
      .string()
      .matches(
        /^\d*$/,
        ({ label }: { label: string }) => `${label} must be number only`
      )
      .required()
      .label('Jumlah Roti'),
    desc: yup.string().required().label('Keterangan'),
  })
  const formik = useFormik({
    initialValues: {
      sourceOrder: '',
      name: '',
      phone: '',
      qty: '',
      desc: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch({
        type: 'set_order',
        payload: values,
      })
    },
  })
  return (
    <main>
      <CustomBox>
        <Container
          fixed
          sx={{
            minHeight: 'inherit',
            maxWidth: '400px !important',
          }}
        >
          <Box
            display="flex"
            alignItems={'center'}
            width="100%"
            minHeight={'inherit'}
            overflow={'hidden'}
          >
            <CustomPaper variant="outlined">
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'start'}
                gap={2}
              >
                <Typography variant="h5" fontWeight={500}>
                  Form Pemesanan
                </Typography>

                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col gap-4 w-full"
                >
                  <FormControl
                    error={
                      formik.errors.sourceOrder && formik.touched.sourceOrder
                        ? true
                        : false
                    }
                    size="small"
                  >
                    <InputLabel id="sourceOrder">Sumber Pesanan</InputLabel>
                    <Select
                      labelId="sourceOrder"
                      id="sourceOrder"
                      label="Sumber Pesanan"
                      name="sourceOrder"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.sourceOrder}
                      className="text-left"
                    >
                      <MenuItem value="">
                        <p>None</p>
                      </MenuItem>
                      <MenuItem value={'Whatsapp'}>WhatsApp</MenuItem>
                      <MenuItem value={'Call'}>Call</MenuItem>
                      <MenuItem value={'Email'}>Email</MenuItem>
                    </Select>
                    <FormHelperText>{formik.errors.sourceOrder}</FormHelperText>
                  </FormControl>
                  <TextField
                    id="name"
                    label="Nama"
                    placeholder="Masukkan Nama"
                    name="name"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    size="small"
                    error={
                      formik.errors.name && formik.touched.name ? true : false
                    }
                    helperText={formik.errors.name}
                  />
                  <TextField
                    id="phone"
                    label="Nomor Hp"
                    placeholder="Masukkan Nomor Hp"
                    name="phone"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    size="small"
                    error={
                      formik.errors.phone && formik.touched.phone ? true : false
                    }
                    helperText={formik.errors.phone}
                  />
                  <TextField
                    id="qty"
                    label="Jumlah Roti"
                    placeholder="Masukkan Jumlah Roti"
                    name="qty"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    size="small"
                    value={formik.values.qty}
                    error={
                      formik.errors.qty && formik.touched.qty ? true : false
                    }
                    helperText={formik.errors.qty}
                  />
                  <TextField
                    id="desc"
                    label="Keterangan"
                    placeholder="Masukkan Keterangan"
                    name="desc"
                    variant="outlined"
                    className="w-full"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.desc}
                    size="small"
                    error={
                      formik.errors.desc && formik.touched.desc ? true : false
                    }
                    helperText={formik.errors.desc}
                  />
                  <Button
                    variant="contained"
                    disableElevation
                    fullWidth
                    type="submit"
                    size="small"
                  >
                    Submit
                  </Button>
                </form>
                <Button
                  LinkComponent={Link}
                  href="/admin"
                  variant="text"
                  className="w-full"
                  size="small"
                >
                  Halaman Admin
                </Button>
              </Box>
            </CustomPaper>
          </Box>
        </Container>
      </CustomBox>
    </main>
  )
}
