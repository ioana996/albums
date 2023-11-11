import { List, Datagrid, TextField } from "react-admin";

const AlbumList = (props) => {
  return (
    <List {...props}>
      <Datagrid
        rowClick={(id) => {
          return `/albums/${id}/photos`;
        }}
      >
        <TextField source="title" />
      </Datagrid>
    </List>
  );
};

export default AlbumList;
