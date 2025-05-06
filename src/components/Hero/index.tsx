import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        className="relative overflow-hidden mt-30 md:mt-20"
        style={{ background: "#1a303f" }}
      >
        <div className="w-full">
          <img
            src="https://ik.imagekit.io/b6iqka2sz/assets/safiz.png?updatedAt=1745153234618"
            alt="Web Banner"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
