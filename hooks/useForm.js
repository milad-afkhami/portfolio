import {
  useForm as useHookForm,
  UseFormProps as UseHookFormProps,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface UseFormProps extends UseHookFormProps {
  schema: Object;
}
export const useForm = (props: UseFormProps) =>
  useHookForm({
    ...props,
    ...(props.schema ? { resolver: yupResolver(props.schema) } : {}),
  });
