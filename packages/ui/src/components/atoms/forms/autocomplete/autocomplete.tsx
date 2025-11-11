import * as PopoverPrimitive from "@radix-ui/react-popover";
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";
import { inputVariants } from "../input/input";

export interface AutocompleteOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface AutocompleteProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "value" | "onChange"> {
  options: AutocompleteOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  size?: "sm" | "default" | "lg";
  className?: string;
  inputClassName?: string;
  emptyMessage?: string;
  filterFunction?: (option: AutocompleteOption, searchTerm: string) => boolean;
  allowCustomValue?: boolean;
}

function defaultFilter(option: AutocompleteOption, searchTerm: string): boolean {
  return option.label.toLowerCase().includes(searchTerm.toLowerCase());
}

const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue,
      onValueChange,
      placeholder = "Selecione uma opção...",
      disabled = false,
      size = "default",
      className,
      inputClassName,
      emptyMessage = "Nenhum resultado encontrado.",
      filterFunction = defaultFilter,
      allowCustomValue = false,
      id,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(controlledValue || defaultValue || "");
    const [selectedValue, setSelectedValue] = React.useState<string | undefined>(
      controlledValue || defaultValue
    );

    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : selectedValue;
    const currentInputValue = isControlled ? controlledValue || "" : inputValue;

    // Sincroniza o estado interno quando o valor controlado muda
    React.useEffect(() => {
      if (isControlled) {
        setInputValue(controlledValue || "");
      }
    }, [controlledValue, isControlled]);

    const filteredOptions = React.useMemo(() => {
      if (!currentInputValue.trim()) {
        return options;
      }
      return options.filter((option) => filterFunction(option, currentInputValue));
    }, [options, currentInputValue, filterFunction]);

    const selectedOption = React.useMemo(() => {
      return options.find((option) => option.value === currentValue);
    }, [options, currentValue]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      setOpen(true);

      if (!isControlled) {
        // Se não está controlado, atualiza o valor local
        if (allowCustomValue) {
          setSelectedValue(newValue);
          onValueChange?.(newValue);
        } else {
          // Se não permite valor customizado, limpa a seleção se não encontrar match exato
          const matchingOption = options.find((opt) => opt.label === newValue);
          if (matchingOption) {
            setSelectedValue(matchingOption.value);
            onValueChange?.(matchingOption.value);
          } else {
            setSelectedValue(undefined);
            onValueChange?.(undefined);
          }
        }
      } else {
        // Se está controlado, apenas notifica a mudança
        if (allowCustomValue) {
          onValueChange?.(newValue);
        } else {
          const matchingOption = options.find((opt) => opt.label === newValue);
          if (matchingOption) {
            onValueChange?.(matchingOption.value);
          } else {
            onValueChange?.(undefined);
          }
        }
      }
    };

    const handleSelectOption = (optionValue: string) => {
      const option = options.find((opt) => opt.value === optionValue);
      if (option && !option.disabled) {
        if (!isControlled) {
          setSelectedValue(option.value);
          setInputValue(option.label);
        }
        onValueChange?.(option.value);
        setOpen(false);
      }
    };

    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      e.preventDefault();
      if (!isControlled) {
        setSelectedValue(undefined);
        setInputValue("");
      }
      onValueChange?.(undefined);
      setOpen(false);
    };

    const handleInputFocus = () => {
      if (!disabled) {
        setOpen(true);
      }
    };

    const handleInputBlur = () => {
      // Delay para permitir clique no item
      setTimeout(() => {
        if (!allowCustomValue && selectedOption) {
          // Restaura o label do item selecionado se não permite valor customizado
          if (!isControlled) {
            setInputValue(selectedOption.label);
          }
        }
        setOpen(false);
      }, 200);
    };

    const displayValue = selectedOption?.label || currentInputValue;

    return (
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <div className={cn("relative w-full", className)}>
          <PopoverPrimitive.Trigger asChild>
            <input
              ref={ref}
              id={id}
              value={displayValue}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder={placeholder}
              disabled={disabled}
              className={cn(inputVariants({ size }), "pr-8", inputClassName)}
              {...props}
            />
          </PopoverPrimitive.Trigger>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
            {currentValue && !disabled && (
              <button
                type="button"
                onClick={handleClear}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className="text-muted-foreground hover:text-foreground rounded-sm p-1 opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring pointer-events-auto"
              >
                <XIcon className="size-4" />
                <span className="sr-only">Limpar</span>
              </button>
            )}
            <ChevronDownIcon
              className={cn(
                "size-4 text-muted-foreground transition-transform",
                open && "rotate-180"
              )}
            />
          </div>
          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              className={cn(
                "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-[300px] min-w-(--radix-popover-trigger-width) w-full overflow-x-hidden overflow-y-auto rounded-md border shadow-md"
              )}
              align="start"
              sideOffset={4}
              onOpenAutoFocus={(e) => {
                // Previne o foco automático no popover, mantendo o foco no input
                e.preventDefault();
              }}
            >
              {filteredOptions.length > 0 ? (
                <div className="p-1">
                  {filteredOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelectOption(option.value)}
                      disabled={option.disabled}
                      className={cn(
                        "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none transition-colors",
                        currentValue === option.value && "bg-accent text-accent-foreground",
                        option.disabled && "pointer-events-none opacity-50"
                      )}
                    >
                      <span className="absolute right-2 flex size-3.5 items-center justify-center">
                        {currentValue === option.value && <CheckIcon className="size-4" />}
                      </span>
                      {option.label}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="py-6 text-center text-sm text-muted-foreground">{emptyMessage}</div>
              )}
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        </div>
      </PopoverPrimitive.Root>
    );
  }
);

Autocomplete.displayName = "Autocomplete";

export { Autocomplete };
