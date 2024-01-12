import React, { useEffect } from "react";

const Remito = ({
  expandirRemito,
  setExpandirRemito,
  idRemito,
  setRemitoIndividual,
  remitoIndividual,
}) => {
  return (
    <>
      {expandirRemito && (
        <div>
          <h1>remitoIndividual.remito</h1>
        </div>
      )}
    </>
  );
};

export default Remito;
