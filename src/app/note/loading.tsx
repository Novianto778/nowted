import { Loader } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <Loader className="h-10 w-10" />
      </div>
      <p className="mt-2">Loading...</p>
    </div>
  );
}
