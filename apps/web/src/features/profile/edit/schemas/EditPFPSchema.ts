import * as Yup from 'yup';

export const EditPFPSchema = Yup.object().shape({
  pfp: Yup.mixed().required("Add JPG/Jpeg/PNG file"),
});