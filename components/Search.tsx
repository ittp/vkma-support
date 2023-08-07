import { usePlatform } from "@vkontakte/vkui";
import React, { useState } from "react";

import Search from "@vkontakte/vkui/dist/components/Search";


export default function SearchComponent() {
  const platform = usePlatform();

  const [search, setSearch] = React.useState("");

  const platform = usePlatform();

  const [search, setSearch] = React.useState("");

  const beforeChange = (e) => {
    setSearch(e.target.value);
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const usersFiltered = users.filter(
    ({ name }) => name.toLowerCase().indexOf(search.toLowerCase()) > -1
  );

  return <Search onChange={onChange} />;
}
