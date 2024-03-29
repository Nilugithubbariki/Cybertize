import styles from "./home.module.css";
import seachIcon from "../../assets/search-11-1@2x.png";
import commentImg from "../../assets/bell-1-1@2x.png";
import userImg from "../../assets/ellipse-19@2x.png";
import arrowDownImg from "../../assets/arrowdownsigntonavigate-2-1@2x.png";
import reportImg from "../../assets/writing-1@2x.png";
import epxortImg from "../../assets/import-1@2x.png";
import skyIcon from "../../assets/sky-1@2x.png";
import userIcon from "../../assets/user-16-1@2x.png";
import rightIcon from "../../assets/rightarrow-11-1@2x.png";
import coin from "../../assets/2953383-1@2x.png";
import week from "../../assets/nextweek-1@2x.png";
import ruppe from "../../assets/rupeeindian-1@2x.png";

export default function Home() {
  const objRE = [
    { id: 1, name: "Reports", icon: reportImg },
    { id: 2, name: "Export", icon: epxortImg },
  ];
  const obj = [
    { id: 1, name: "All Customers", value: 900, color: "#FE6976" },
    { id: 2, name: "Free Trial", value: 35, color: "#19A2FB" },
    { id: 3, name: "Paid Clients", value: 288, color: "#74CDFF" },
    { id: 4, name: "Active Paid", value: 96, color: "#83B3C0" },
    { id: 5, name: "Dormant", value: 42, color: "#FF9066" },
  ];
  const tableData = [
    {
      id: 1,
      name: "Lastest Customer Onboards",
      fName: "View all customers",
      tableList: [
        { id: 1, name: "Sonali Shukla", phone: 8437897586, join: "2 mins ago" },
        { id: 2, name: "Ritika Raj", phone: 8437897586, join: "10 mins ago" },
        { id: 3, name: "Ritika Raj", phone: 8437897586, join: "1 hr ago" },
        { id: 4, name: "Ritika Raj", phone: 8437897586, join: "6 hrs ago" },
        { id: 5, name: "Ritika Raj", phone: 8437897586, join: "1 day ago" },
        { id: 6, name: "Ritika Raj", phone: 8437897586, join: "1 day ago" },
      ],
    },
    {
      id: 2,
      name: "Upcoming Follow Ups",
      fName: "View all Follow Ups",
      tableList: [
        {
          id: 1,
          name: "Sonali Shukla",
          phone: 8437897586,
          date: "27th August",
        },
        { id: 2, name: "Ritika Raj", phone: 8437897586, date: "27th August" },
        { id: 3, name: "Ritika Raj", phone: 8437897586, date: "27th August" },
        { id: 4, name: "Ritika Raj", phone: 8437897586, date: "27th August" },
        { id: 5, name: "Ritika Raj", phone: 8437897586, date: "27th August" },
        { id: 6, name: "Ritika Raj", phone: 8437897586, date: "27th August" },
      ],
    },
  ];

  const priceData = [
    {
      id: 1,
      price: "16,58,000",
      name: "Last Month Sales",
      reward: [
        { id: 1, name: "Gold", value: 4, color: "rgba(231, 251, 0, 0.58)" },
        {
          id: 2,
          name: "Platinum",
          value: 15,
          color: "rgba(238, 238, 238, 0.58)",
        },
        { id: 3, name: "Titanium", value: 12, color: "#0099FB" },
      ],
      icon: coin,
    },
    {
      id: 2,
      price: "20,00,000",
      name: "Upcoming Renewals",
      reward: [
        { id: 1, name: "Gold", value: 4, color: "rgba(231, 251, 0, 0.58)" },
        {
          id: 2,
          name: "Platinum",
          value: 15,
          color: "rgba(238, 238, 238, 0.58)",
        },
        { id: 3, name: "Titanium", value: 12, color: "#0099FB" },
      ],
      icon: week,
    },
    { id: 3, name: "Upcoming Renewal client" },
  ];
  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchContainer}>
        <div className={styles.searchBox}>
          <img src={seachIcon} className={styles.seachIcon} />
          <input type="text" placeholder="Search" className={styles.inputBox} />
        </div>
        <div className={styles.userSide}>
          <img src={commentImg} className={styles.commentImg} />
          <img src={userImg} className={styles.userImg} />
          <img src={arrowDownImg} className={styles.arrowDownImg} />
        </div>
      </div>
      <div className={styles.dashboard}>
        <div className="">
          <span className={styles.dashboardText}>Dashboard</span>
        </div>
        <div className={styles.reportExport}>
          {objRE.map((obj) => (
            <div className={styles.report} key={obj.id}>
              <img src={obj.icon} className={styles.icon} />
              <span className={styles.text}>{obj.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.good}>
        <span className={styles.goodText}>Good Afternoon, Nilanchala</span>
        <img src={skyIcon} className={styles.goodIcon} />
      </div>
      <div className={styles.customer}>
        {obj.map((obj) => (
          <div className={styles.box} key={obj.id}>
            <div className={styles.box4} style={{ background: obj.color }}>
              <div className={styles.contentText}>
                <div className={styles.iconUser}>
                  <img src={userIcon} className={styles.userIcon} />
                </div>
                <div className={styles.userText}>
                  <span className={styles.userTextHeader}>{obj.name}</span>
                  <span className={styles.userTextValue}>{obj.value}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.graph}></div>
      <div className={styles.tableContainer}>
        {tableData.map((obj) => (
          <div className={styles.tableData} key={obj.id}>
            <span className={styles.headerText}>{obj.name}</span>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>
                    {obj.tableList?.[0].join !== undefined
                      ? "Joined On"
                      : "Date"}
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {obj.tableList.map((obj) => (
                  <tr key={obj.id}>
                    <td>{obj.name}</td>
                    <td>{obj.phone}</td>
                    <td>{obj.join !== undefined ? obj.join : obj.date}</td>
                    <td>
                      <span className={styles.viewMore}>View More</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <span className={styles.viewMore}>
                <span>{obj.fName}</span>
                <img src={rightIcon} className={styles.rightIcon} />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.money}>
        {priceData.map((obj) => (
          <>
            {obj.price !== undefined ? (
              <div className={styles.moneyData} key={obj.id}>
                <div className={styles.moneySide}>
                  <div className={styles.moneyContainer}>
                    <div className={styles.moneyContainerFirst}>
                      <img src={ruppe} className={styles.ruppeIcon} />
                      <div className={styles.valueTextPrice}>
                        <span className={styles.valueText}>{obj.price}</span>
                        <span className={styles.valueTextPrice}>
                          {obj.name}
                        </span>
                      </div>
                    </div>
                    <div className={styles.moneyContainerSecond}>
                      <div className={styles.moneyImage}>
                        <img src={obj.icon} className={styles.moneyIcon} />
                      </div>
                      <div className={styles.moneyText}>
                        {obj.reward?.map((item) => (
                          <div className={styles.reward} key={item.id}>
                            <span className={styles.moneyValueName}>
                              {item.name}
                            </span>
                            <span
                              className={styles.moneyValueText}
                              style={{ background: item.color }}
                            >
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.renewal}>
                <span className={styles.renewalHeader}>{obj.name}</span>
                <div></div>
                <span className={styles.renewalsee}>see all</span>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
