import React, { useState } from "react";

import { Voter } from "../models/voters";

import "./VoterViewRow.css";

export type VoterViewRowProps = {
  voter: Voter;
  onEditVoter: (voterId: number) => void;
  onDeleteVoter: (voterId: number) => void;
  onIdSelected:(id:number,checked:boolean) => void;
};

export function VoterViewRow(props: VoterViewRowProps) {


  const deleteVoter = () => {
    props.onDeleteVoter(props.voter.id);
  };


  const handleChange = (event: { target: { checked: any; }; }) => {
    if(event.target.checked)
       props.onIdSelected(props.voter.id,event.target.checked);
};

  return (
    <tr>
      <td>
      <input type="checkbox" onChange={handleChange}/>
      </td>
      <td className="col-body">{props.voter.id}</td>
      <td className="col-body">{props.voter.firstName}</td>
      <td className="col-body">{props.voter.lastName}</td>
      <td className="col-body">{props.voter.dob}</td>
      <td className="col-body">{props.voter.email}</td>
      <td className="col-body">{props.voter.phone}</td>
      <td className="col-body">{props.voter.county}</td>
      <td className="col-body">{props.voter.address}</td>
      <td>
        <button type="button" onClick={() => props.onEditVoter(props.voter.id)}>
          Edit
        </button>
        <button type="button" onClick={deleteVoter}>
          Delete
        </button>
      </td>
    </tr>
  );
}
