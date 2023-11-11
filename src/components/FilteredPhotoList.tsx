import { useListController } from "react-admin";
import { useParams } from "react-router-dom";
import { ImageList, ImageListItem } from "@mui/material";

const FilteredPhotoList = () => {
  const { albumId } = useParams();
  const { data } = useListController({
    resource: `/albums/${albumId}/photos`,
  });

  if (!data) return null;

  return (
    <ImageList cols={4}>
      {data.map((item) => (
        <ImageListItem key={item.id}>
          <img src={item.thumbnailUrl}></img>{" "}
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default FilteredPhotoList;
