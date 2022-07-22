import React from "react";

export default function Card(props) {
    let badgeText;
    console.log(props.stats.rating.toFixed(1));
    if (props.openSpots == 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.stats.rating.toFixed(1)}</span>
                <span className="gray">({props.stats.reviewCount}) *</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price} /</span> person</p>
        </div>
    )
};

/*
{
img: "katie-zaferes.png"
, rating: "5.0"
, reviewCount: 6
, country: "USA"
, title: "Life Lessons with Katie Zaferes"
, price: 136
}
*/