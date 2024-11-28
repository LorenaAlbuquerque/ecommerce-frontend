import React from 'react';
import ReservaList from '../components/Reserva/ReservaList';
import ReservaForm from '../components/Reserva/ReservaForm';

const ReservaPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <ReservaForm />
        </div>
        <div className="col-md-6">
          <ReservaList />
        </div>
      </div>
    </div>
  );
};

export default ReservaPage;
