const PropertyHighlights2 = ({highlight}) => {
  const highlightsContent = [
    {
      id: 1,
      icon: "icon-city",
      text: `In London City Centre`,
    },
    {
      id: 2,
      icon: "icon-airplane",
      text: `Airport transfer`,
    },
    {
      id: 3,
      icon: "icon-bell-ring",
      text: `Front desk [24-hour]`,
    },
    {
      id: 4,
      icon: "icon-tv",
      text: `Premium TV channels`,
    },
  ];

  return (
    <div className="row y-gap-20 pt-30">
      {highlight.map((item, i) => (
        <div className="col-lg-3 col-6" key={i}>
          <div className="text-center">
            <i className={`text-24 text-blue-1`} />
            <div className="text-15 lh-1 mt-10">{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyHighlights2;
