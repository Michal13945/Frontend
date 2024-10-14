const CarProfile = ({ id, brand, year, regNumber }) => {
  return (
    <div className="panel">
      <h3>Car ID: {id}</h3>
      <p>Brand: {brand}</p>
      <p>Year: {year}</p>
      <p>Registration Number: {regNumber}</p>
    </div>
  );
};

export default CarProfile;
