const PropertyHighlights2 = ({highlight}) => {
  return (
    <div className="row y-gap-20 pt-30">
      {highlight.map((item, i) => (
        <div className="col-lg-3 col-6" key={i}>
          <div className="text-center">
            <i className={`${item?.icon} text-24 text-blue-1`} />
            <div className="text-15 lh-1 mt-10">{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyHighlights2;
