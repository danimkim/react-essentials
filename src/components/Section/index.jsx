export default function Section({ title, children, sectionId, ...props }) {
  return (
    <section id={sectionId} {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
