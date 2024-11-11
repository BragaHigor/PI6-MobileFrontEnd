import React, { useState } from "react";
import { useRouter, usePathname } from "expo-router";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../ui/Input";

type SearchInputProps = {
   defaultValue?: string;
   hideOnSearch?: boolean;
};

export const SearchInput = ({
   defaultValue,
   hideOnSearch,
}: SearchInputProps) => {
   const router = useRouter();
   const pathname = usePathname();
   const [searchInput, setSearchInput] = useState(defaultValue ?? "");

   const handleSearchEnter = () => {
      if (searchInput) {
         router.push({
            pathname: "/search",
            params: { q: searchInput },
         });
      }
   };

   if (hideOnSearch && pathname === "/search") return null;

   return (
      <Input
         placeholder="Buscar"
         icon={faMagnifyingGlass}
         filled
         value={searchInput}
         onChangeText={setSearchInput}
         onSubmitEditing={handleSearchEnter}
      />
   );
};
