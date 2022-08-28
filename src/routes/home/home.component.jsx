import { Outlet } from "react-router-dom";

import CategoriesList from "../../components/directory/directory.component";

function Home() {

  return (
    <>
        <Outlet />
        <CategoriesList />
    </>
  );
}

export default Home;