import { ReactNode } from 'react';
import clsx from 'clsx';

type MainLayoutProps = {
  children: ReactNode;
  header: ReactNode;
  className: string;
};

const MainLayout = ({ children, header, className }: MainLayoutProps) => {
  return (
    <div className={clsx('page', className)}>
      {header}
      {children}
    </div>
  );
};

export default MainLayout;
