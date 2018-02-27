import React from 'react';

export default function Header() {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="text-center">WeEat</h1>
        <div className=" d-flex justify-content-center">
          <input className="form-control w-25 my-4" type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}
