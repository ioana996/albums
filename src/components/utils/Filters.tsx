import { TopToolbar, FilterButton, TextInput } from "react-admin";

export const albumsFilters = [<TextInput label="UserId" source="userId" />];

export const PostListActions = () => (
  <TopToolbar>
    <FilterButton />
  </TopToolbar>
);
