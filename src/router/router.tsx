import { createBrowserRouter } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import AccessableRouter from "./AccessableRouter";


// create browser router
const router = createBrowserRouter([...AccessableRouter, ...PublicRouter, ...PrivateRouter]);

export default router;
