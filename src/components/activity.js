import React, { useState } from "react";

import ActivityCard from "./activityCard";

function Activity() {
  const getActivityList = () => {
    return [
      {
        transNo: 1,
        name: "Name.com Inc.",
        date: "june 22",
        type: "Automatic Payment",
        amount: "-$9.89",
        icon: "https://d3ml3b6vywsj0z.cloudfront.net/website/product-images/Name.jpg",
      },
      {
        transNo: 2,
        name: "Name.com Inc.",
        date: "june 22",
        type: "Automatic Payment",
        amount: "-$9.89",
        icon: "https://d3ml3b6vywsj0z.cloudfront.net/website/product-images/Name.jpg",
      },
      {
        transNo: 3,
        name: "Name.com Inc.",
        date: "june 22",
        type: "Automatic Payment",
        amount: "-$9.89",
        icon: "https://d3ml3b6vywsj0z.cloudfront.net/website/product-images/Name.jpg",
      },
      {
        transNo: 4,
        name: "Name.com Inc.",
        date: "june 22",
        type: "Automatic Payment",
        amount: "-$9.89",
        icon: "https://d3ml3b6vywsj0z.cloudfront.net/website/product-images/Name.jpg",
      },
      {
        transNo: 5,
        name: "Name.com Inc.",
        date: "june 22",
        type: "Automatic Payment",
        amount: "-$9.89",
        icon: "https://d3ml3b6vywsj0z.cloudfront.net/website/product-images/Name.jpg",
      },
      {
        transNo: 6,
        name: "Name.com Inc.",
        date: "june 22",
        type: "Automatic Payment",
        amount: "-$9.89",
        icon: "https://d3ml3b6vywsj0z.cloudfront.net/website/product-images/Name.jpg",
      },
      {
        transNo: 7,
        name: "Name.com Inc.",
        date: "june 22",
        type: "Automatic Payment",
        amount: "-$9.89",
        icon: "https://d3ml3b6vywsj0z.cloudfront.net/website/product-images/Name.jpg",
      },
      {
        transNo: 8,
        name: "Name.com Inc.",
        date: "june 22",
        type: "Automatic Payment",
        amount: "-$9.89",
        icon: "https://d3ml3b6vywsj0z.cloudfront.net/website/product-images/Name.jpg",
      },
    ];
  };

  const [activities, setProducts] = useState(getActivityList());
  const [searchVal, setSearchVal] = useState("");

  function handleSearchClick(e) {
    const newValue = e.target.value;
    setSearchVal(newValue);
    if (newValue === "") {
      setProducts(getActivityList());
      return;
    }
    const filterBySearch = getActivityList().filter((item) => {
      return (
        item.name.includes(newValue) ||
        item.type.includes(newValue) ||
        item.date.includes(newValue) ||
        item.amount.includes(newValue)
      );
    });
    debugger;
    setProducts(filterBySearch);
  }

  return (
    <div style={{ width: "60%", margin: "80px auto 60px auto" }}>
      <div class="search-bar">
        <div style={{ display: "flex" }}>
          <i
            class="bi bi-search"
            style={{ transform: "translate(30px, 10px)" }}
          ></i>
          <input
            type="text"
            class="form-control"
            style={{ borderRadius: "50px" }}
            placeholder="            Search by name or email"
            onChange={(e) => handleSearchClick(e)}
          />
          <button
            type="button"
            style={{
              width: "40px",
              borderRadius: "50px",
              marginLeft: "20px",
              border: "0",
            }}
          >
            <i class="bi bi-download"></i>
          </button>
        </div>
      </div>

      <div style={{ margin: "10px 0", fontWeight: "500" }}>Filter by</div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          type="button"
          class="btn btn-info"
          style={{ borderRadius: "20px", color: "#253B80" }}
        >
          Date: Last 90 days
        </button>
        <button
          type="button"
          class="btn btn-light"
          style={{
            borderRadius: "20px",
            color: "#253B80",
            border: "1px solid",
          }}
        >
          Type
        </button>
        <button
          type="button"
          class="btn btn-light"
          style={{
            borderRadius: "20px",
            color: "#253B80",
            border: "1px solid",
          }}
        >
          Status
        </button>
      </div>

      <div style={{ margin: "10px 0", fontWeight: "500" }}>Completed</div>

      <div style={{ margin: "10px 0", fontWeight: "500" }}>This Week</div>

      <div>
        {activities.map((activity) => (
          <ActivityCard key={activity.index} data={activity} />
        ))}
      </div>
    </div>
  );
}

export default Activity;
