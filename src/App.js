import { Suspense } from "react";
import { CircularProgress } from '@mui/material';

import Routes from "./routes";
import Views from "./views";

const App = () => {
    return (
      <>
        <Views>
          <Suspense fallback={<CircularProgress />}>
            <Routes />
          </Suspense>
        </Views>
      </>
    );
}

export default App;
