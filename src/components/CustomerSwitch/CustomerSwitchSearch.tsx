import {
  useRef,
  type FormEvent,
} from "react";

import { Input, IconButton, Icon } from "@faststore/ui";

export type CustomerSwitchSearchProps = {
  onSearch?: (term: string) => void
};

export const CustomerSwitchSearch = ({
  onSearch
}: CustomerSwitchSearchProps) => {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = inputRef.current?.value;
    onSearch?.(inputValue || "");
  };

  return (
      <form
        data-fs-customer-switch-search
        onSubmit={handleSubmit}
        role="search"
      >
        <IconButton
          data-fs-customer-switch-search-button
          type="submit"
          aria-label="Submit Search"
          icon={<Icon name="MagnifyingGlass" />}
          size="small"
        />
        <Input
          data-fs-customer-switch-search-input
          placeholder="Search"
          ref={inputRef}
        />
      </form>
  );
};
