import classNames from "classnames";

interface ContentBlockProps {
  sectionClassName?: string;
  sectionIDName?: string;
  containerClassName?: string;
  rowClassName?: string;
  columnClassName?: string;
  children: React.ReactNode;
  background?: React.ReactNode;
}

export default function ContentBlock({
  sectionClassName = "",
  sectionIDName = "",
  containerClassName = "mx-auto px-4 max-w-7xl pt-5",
  rowClassName = "flex justify-center",
  columnClassName = "lg:w-10/12 text-center relative",
  children,
  background,
}: ContentBlockProps) {
  return (
    <section className={classNames(sectionClassName)} id={sectionIDName}>
      {background}
      <div className={classNames(containerClassName)}>
        <div className={classNames(rowClassName)}>
          <div
            className={classNames(columnClassName)}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
