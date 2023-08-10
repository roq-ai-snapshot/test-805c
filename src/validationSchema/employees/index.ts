import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  email: yup.string().required(),
  name: yup.string().required(),
  organization_id: yup.string().nullable(),
});
