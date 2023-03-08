import React from 'react';
import {TextField} from '@mui/material';
import {useFormContext} from 'react-hook-form';

type Props = {
  name: string;
  label: string;
  noFull?: boolean;
};
export const FormField = ({name, noFull, label}: Props) => {
  const {
    register,
    formState: {errors},
  } = useFormContext();
  return (
    <TextField
      {...register(name)}
      error={!!errors?.[name]}
      helperText={errors?.[name]?.message as string}
      fullWidth={!noFull}
      label={label}
      size={'small'}
      sx={{marginBottom: '30px'}}
    />
  );
};
