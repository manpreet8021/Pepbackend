const Block1 = ({block}) => {
  
  return (
    <>
      <div className="col-lg-5">
        <h2 className="text-20 fw-600">{block.title}</h2>
        <p className="mt-5">{block.subtitle}</p>
        <p className="text-dark-1 mt-30 lg:mt-40 md:mt-20" dangerouslySetInnerHTML={{ __html: block.body }} />
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <img
          width={400}
          height={400}
          src={block.image}
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
    </>
  );
};

export default Block1;
