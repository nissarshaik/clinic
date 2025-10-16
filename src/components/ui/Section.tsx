import React from 'react';
import { cn } from '../../utils/cn';
import Container from './Container';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  withContainer?: boolean;
};

const Section: React.FC<SectionProps> = ({
  children,
  className,
  containerClassName,
  id,
  withContainer = true,
}) => {
  const content = withContainer ? (
    <Container className={containerClassName}>{children}</Container>
  ) : (
    children
  );

  return (
    <section id={id} className={cn('py-12 md:py-16 lg:py-20', className)}>
      {content}
    </section>
  );
};

export default Section;