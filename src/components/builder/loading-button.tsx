import { forwardRef } from 'react';
import { cn } from '@utils/index';
import { useFormStatus } from 'react-dom';
import { type ButtonProps, buttonVariants } from '@components/ui/button';
import { Slot } from '@radix-ui/react-slot';
import { RefreshCwIcon } from 'lucide-react';

interface LoadingButtonProps extends ButtonProps {
  asChild?: boolean;
  icon?: React.ReactNode;
}

const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ className, variant, size, asChild = false, icon, ...props }, ref) => {
    const { pending } = useFormStatus();
    const Component = asChild ? Slot : 'button';

    const commonProps = {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      disabled: pending,
      ...props,
    };

    const renderContent = () => (
      <>
        {pending && <RefreshCwIcon className="mr-2 animate-spin" />}
        {icon && <div className="mr-2">{icon}</div>}
        {props.title}
      </>
    );

    return <Component {...commonProps}>{renderContent()}</Component>;
  },
);

LoadingButton.displayName = 'LoadingButton';

export { LoadingButton };
