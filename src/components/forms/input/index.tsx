import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

// const InputWithIcon = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ className, type, ...props }, ref) => {
//     return (
//       <div className="relative">
//         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
//           <svg
//             className="h-5 w-5 text-muted-foreground"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M10 12a2 2 0 100-4 2 2 0 000 4z"
//             />
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-6a6 6 0 100 12 6 6 0 000-12z"
//             />
//           </svg>
//         </div>
//         <Input
//       </div>
//     );
//   }
// );

// InputWithIcon.displayName = 'InputWithIcon';

export { Input };
