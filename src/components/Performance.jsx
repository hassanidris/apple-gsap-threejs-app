import { performanceImages } from "../constants";

const Performance = () => {
  return (
    <section id="performance">
      <h2>Next-level graphics performance. Game on.</h2>
      <div className="wrapper">
        {performanceImages.map(({ id, src }) => (
          <img key={id} src={src} alt={id} />
        ))}
      </div>
    </section>
  );
};

export default Performance;
