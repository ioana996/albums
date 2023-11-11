import {
  List,
  Datagrid,
  TextField,
  TopToolbar,
  FilterButton,
  TextInput,
} from "react-admin";

const albumsFilters = [<TextInput label="UserId" source="userId" />];

const PostListActions = () => (
  <TopToolbar>
    <FilterButton />
  </TopToolbar>
);

const AlbumList = (props) => {
  return (
    <List {...props} actions={<PostListActions />} filters={albumsFilters}>
      <Datagrid
        rowClick={(id) => {
          return `/albums/${id}/photos`;
        }}
      >
        <TextField source="userId" label="User id" />
        <TextField source="id" label="Album id" />
        <TextField source="title" label="Album title" />
      </Datagrid>
    </List>
  );
};

export default AlbumList;
