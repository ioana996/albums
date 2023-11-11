import { List, Datagrid, ImageField } from "react-admin";
import { useParams } from "react-router-dom";

const PhotosList = () => {
  const { albumId } = useParams();

  return (
    <List resource="photos" filter={{ albumId }}>
      <Datagrid rowClick="show">
        <ImageField source="thumbnailUrl" />
      </Datagrid>
    </List>
  );
};

export default PhotosList;
