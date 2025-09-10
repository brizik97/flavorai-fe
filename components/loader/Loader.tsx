import { CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <div className="fixed left-0 top-0 z-[999999] flex h-screen w-full items-center justify-center bg-white">
      <CircularProgress />
    </div>
  );
};

export default Loader;
