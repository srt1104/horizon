import { type FieldPath, type Control } from "react-hook-form";
import { z } from "zod";

import { authFormSchema } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = authFormSchema("sign-up");

interface CustomFormField {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

export default function CustomFormField({
  control,
  name,
  label,
  placeholder,
}: CustomFormField) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <FormControl className="flex w-full flex-col">
            <Input
              type={name === "password" ? "password" : "text"}
              placeholder={placeholder}
              className="input-class"
              {...field}
            />
          </FormControl>
          <FormMessage className="form-message" />
        </FormItem>
      )}
    />
  );
}
