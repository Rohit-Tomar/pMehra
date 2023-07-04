function ActivityCard(props) {
  return (
    <div
      style={{
        border: "0.01px solid",
        borderRadius: "20px",
        fontWeight: "500",
        margin: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          margin: "15px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <img
              style={{
                height: "40px",
                width: "40px",
                objectFit: "fill",
                borderRadius: "20px",
              }}
              src={props.data.icon}
              alt=""
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontWeight: "600" }}>{props.data.name}</div>
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "10px" }}>{props.data.date}</div>
              {props.data.type}
            </div>
          </div>
        </div>
        <div style={{ fontWeight: "600" }}>{props.data.amount}</div>
      </div>
    </div>
  );
}

export default ActivityCard;
