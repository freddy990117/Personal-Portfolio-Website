import { useNavigate, Outlet } from "react-router-dom";

import "./Layout.css";

const navs = [
  { name: "Resume", path: "Resume" },
  { name: "Project", path: "Project" },
  { name: "Contact", path: "Contact" },
];

const navFooter = [
  { type: "contact", name: "Phone :", data: "0988-XXX-XXX" },
  { type: "contact", name: "Email :", data: "freddy990117@gmail.com" },
  {
    type: "social",
    name: "Social Media :",
    icons: [
      {
        class: "fa-brands fa-github fa-2x",
        url: "https://github.com/freddy990117",
      },
      {
        class: "fa-brands fa-instagram fa-2x",
        url: "https://www.instagram.com",
      },
    ],
  },
  { type: "CopyRight", name: "© 2025 Powered by Freddy" },
];

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="l-header">
      <div className="title">
        <h2>Freddy</h2>
        <p>Edit</p>
      </div>
      <div className="navBar-header">
        {navs.map((nav, index) => (
          <div
            key={index}
            className="nav-header"
            onClick={() => navigate(nav.path)}
          >
            {nav.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="l-footer">
      <div className="navBar-footer">
        {/* 透過 map 顯示出表單的內容 */}
        {navFooter.map((nav, index) => (
          <div key={index} className="nav-footer">
            <h4>{nav.name}</h4>
            {/* 如果有 data，直接顯示 */}
            {nav.data && <span>{nav.data}</span>}

            {/* 如果是社交媒體類型，渲染圖標 */}
            {nav.type === "social" && (
              <div className="social-icons">
                {nav.icons.map((icon, idx) => (
                  <i
                    key={idx}
                    className={icon.class}
                    onClick={() => {
                      window.open(icon.url, "_blank");
                    }}
                  ></i>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// 如果設定 Main 在 Layout.jsx 內，會導致所有 Component 都會顯示 Main 的內容，
// 所以要建立一個 Homepage.jsx 來存放 Main 的內容
// const Main = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="l-main">
//       <div className="main-info">
//         <div className="main-picture">
//           <img src="./Picture/Picture.png" />
//         </div>
//         <div className="main-aboutme">
//           <div className="info">
//             <h1>Hello</h1>
//             <h3>A Bit About Me</h3>
//             <p>
//               Hi, I'm Freddy, a front-end developer. I'm passionate about
//               developing web applications and always eager to learn new
//               technologies. I'm always looking for new challenges and
//               opportunities to grow.
//             </p>
//           </div>

//           <div className="navBar-main">
//             {navs.map((nav, index) => (
//               <div
//                 key={index}
//                 className="nav-main"
//                 // 因為key 的 index 是專門用於識別列表中的每個子項，以優化 React 的渲染性能，但它不會自動轉換為 DOM 的屬性，
//                 // 這就是為什麼無法直接用 key 的值來控制樣式。
//                 data-index={index}
//                 onClick={() => navigate(nav.path)}
//                 style={{ cursor: "pointer" }}
//               >
//                 {nav.name}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      {/* <Main /> */}
      <div className="outlet-containter">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
