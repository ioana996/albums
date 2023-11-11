import { Admin, Resource } from "react-admin";
import AlbumList from "./components/AlbumList";
import FilteredPhotoList from "./components/FilteredPhotoList";
import { dataProvider } from "./dataProvider";
import { Route } from "react-router-dom";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="albums" list={AlbumList}>
      <Route path=":albumId/photos" element={<FilteredPhotoList />} />
    </Resource>
  </Admin>
);
