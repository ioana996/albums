import { List, Datagrid, TextField, NumberField } from "react-admin";
import { PostListActions, albumsFilters } from "./utils/Filters";

const AlbumList = () => {
  return (
    <List actions={<PostListActions />} filters={albumsFilters}>
      <Datagrid rowClick={(id) => `/albums/${id}/photos`}>
        <NumberField source="userId" label="User id" />
        <NumberField source="id" label="Album id" />
        <TextField source="title" label="Album title" />;
      </Datagrid>
    </List>
  );
};

export default AlbumList;
