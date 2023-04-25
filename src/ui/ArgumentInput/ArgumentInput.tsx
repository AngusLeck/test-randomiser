import { Controller, useFormContext } from "react-hook-form";
import {
  FunctionalComponent,
  FunctionalComponentProps,
} from "../Lego/FunctionalComponent";
import { IntegerInput } from "./NumberInput";
import { ArgumentType, Argument, ValueType } from "./ArgumentType";
import { TextInput } from "./TextInput";

interface ArgumentInputProps<T extends ArgumentType> {
  argument: Argument<T>;
}

export function ArgumentInput<T extends ArgumentType>({
  argument,
  ...props
}: FunctionalComponentProps<ArgumentInputProps<T>>) {
  const { control } = useFormContext();
  const Input = ArgumentInputComponent(argument.__type_name__);

  return (
    <Controller
      control={control}
      name={argument.name}
      defaultValue={argument.default}
      rules={{ required: "Required", validate: argument.validate }}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <Input
            {...props}
            onChange={onChange}
            value={value}
            label={argument.label}
            error={error?.message}
          />
        );
      }}
    />
  );
}

interface RenderProps<V> {
  value: V;
  onChange: (value: V | null) => void;
  label: string;
  error?: string;
}

type ArgumentInputComponentType<T extends ArgumentType> = FunctionalComponent<
  RenderProps<ValueType<T>>
>;

// TODO: implement StringInput
const ArgumentInputComponentMap: {
  [T in ArgumentType]?: ArgumentInputComponentType<T>;
} = { integer: IntegerInput, string: TextInput };

function ArgumentInputComponent<T extends ArgumentType>(
  type: T
): ArgumentInputComponentType<T> {
  return ArgumentInputComponentMap[type] ?? (() => null);
}
