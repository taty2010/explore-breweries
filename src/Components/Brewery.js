import React from "react";
import Avatar from "boring-avatars";
import randomcolor from "randomcolor";
const Brewery = (props) => {
  let color = randomcolor({
    count: 3,
    hue: "blue"
  });
  let color1 = randomcolor({
    count: 2,
    hue: "red"
  });
  return (
    <div className="brewWrapper">
      {/* <a href={props.list.website_url}> */}
      {/* <div className='brewItems'> */}
      {/* <i class="fas fa-beer"></i> */}
      <Avatar
        size={50}
        variant="pixel"
        colors={[color[0], color[1], color[2], color1[0], color1[1]]}
      />
      <div className="name-loc">
        <ul>
          <li>
            <h2>{props.list.name}</h2>
          </li>
          <li>{props.list.city}</li>
          <li>{props.list.state}</li>
          {/* <li>{props.list.country}</li> */}
        </ul>
      </div>
      <ul className="info">
        <li>{props.list.street}</li>
        {props.list.website_url ? (
          <li>
            <a href={props.list.website_url}>
              <i className="fas fa-globe"></i>
            </a>
          </li>
        ) : (
          ""
        )}
        {props.list.phone ? (
          <li>
            <a href={`tel:${props.list.phone}`}>
              <i className="fas fa-phone"></i>
            </a>
          </li>
        ) : (
          ""
        )}
      </ul>
      {/* </div> */}
      {/* </a> */}
    </div>
  );
};

export default Brewery;
