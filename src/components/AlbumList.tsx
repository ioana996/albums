import {
  List,
  Datagrid,
  TextField,
  TopToolbar,
  FilterButton,
  TextInput,
  FunctionField,
  NumberField,
} from "react-admin";

const albumsFilters = [<TextInput label="UserId" source="userId" />];

const PostListActions = () => (
  <TopToolbar>
    <FilterButton />
  </TopToolbar>
);

const AlbumList = () => {
  return (
    <List actions={<PostListActions />} filters={albumsFilters}>
      <Datagrid
        rowClick={(id) => {
          return `/albums/${id}/photos`;
        }}
      >
        <NumberField source="userId" label="User id" />
        <NumberField source="id" label="Album id" />
        <TextField source="title" label="Album title" />;
      </Datagrid>
    </List>
  );
};

export default AlbumList;
