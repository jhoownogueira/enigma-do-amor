import { WarningCircle } from "@phosphor-icons/react";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  $type: "text" | "password" | "email" | "number" | "tel" | "url";
  $name?: string;
  $placeholder?: string;
  $id?: string;
  $withLabel?: boolean;
  $size: "sm" | "md" | "lg";
  $alert?: boolean;
  $error?: string;
}

const InputEnigma = forwardRef<HTMLInputElement, InputProps>(
  ({ $type, $name, $id, $withLabel, $placeholder, $size, $alert, $error, ...props }, ref) => {
    return (
      <fieldset className="w-full flex flex-col gap-1">
        {$withLabel && (
          <label htmlFor={$id} className="text-[14px] text-white">
            {$name}
          </label>
        )}
        <input
          ref={ref}
          type={$type}
          id={$id}
          {...props}
          placeholder={$placeholder}
          className={`${
            $size === "sm"
              ? "min-h-[28px] max-h-[28px]"
              : $size === "md"
                ? "min-h-[32px] max-h-[32px]"
                : $size === "lg"
                  ? "min-h-[48px] max-h-[48px]"
                  : ""
          } w-full bg-black px-3 text-white rounded-md border ${
            $alert ? "border-red-500" : "border-white/10"
          } outline-none text-sm hover:border-[#48E6E7] focus:border-[#48E6E7] placeholder:text-sm placeholder:text-gray-400 transition-all`}
        />
        {$alert ? (
          <label
            htmlFor={$id}
            className="w-full flex items-center justify-start gap-1 text-[10px] font-bold text-primary_600"
          >
            <WarningCircle size={12} />
            {$error}
          </label>
        ) : null}
      </fieldset>
    );
  },
);

export default InputEnigma;
