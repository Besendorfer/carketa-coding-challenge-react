import {
  Button,
  MenuItem,
  TextField
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { stateList } from '../../../utils/RepresentativesForm.utils';
import './RepresentativesForm.css';

type RepresentativesFormProps = {
  onStateSelectorChange: (state: string) => void;
  onTypeSelectorChange: (type: string) => void;
};

const RepresentativesForm = (props: RepresentativesFormProps) => {
  const { onStateSelectorChange, onTypeSelectorChange } = props;

  const formik = useFormik({
    initialValues: {
      state: '',
      type: '',
    },
    validationSchema: yup.object({
      state: yup
        .string()
        .required('State is required'),
      type: yup
        .string()
        .required('Representative type is required')
    }),
    onSubmit: (values) => {
      onStateSelectorChange(values.state);
      onTypeSelectorChange(values.type);
    },
  });

  return (
    <div className="RepresentativesForm__container">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          select
          size="small"
          className="RepresentativesForm__container__selector"
          label="State"
          id="representative-state-selector"
          name="state"
          onChange={formik.handleChange}
          error={formik.touched.state && Boolean(formik.errors.state)}
          helperText={formik.touched.state && formik.errors.state}
        >
          {/* No need to set the key here, as it will default to index, and that's good enough */}
          {stateList?.map((state: string[]) => <MenuItem value={state[0]}>{state[1]}</MenuItem>) ?? null}
        </TextField>
        <TextField
          select
          size="small"
          className="RepresentativesForm__container__selector"
          label="Type"
          id="representative-type-selector"
          name="type"
          onChange={formik.handleChange}
          error={formik.touched.type && Boolean(formik.errors.type)}
          helperText={formik.touched.type && formik.errors.type}
        >
          <MenuItem value="Representatives">Representatives</MenuItem>
          <MenuItem value="Senators">Senators</MenuItem>
        </TextField>
        <Button
          sx={{ pt: 1, pb: 1 }}
          color="primary"
          variant="contained"
          type="submit">Find</Button>
      </form>
    </div>
  );
};

export default RepresentativesForm;