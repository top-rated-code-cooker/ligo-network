import { useRef, useState } from "react";
import { usePopper } from "react-popper";
import "./navbar.css";
import "./responsive.css";
// import axios from "axios";

// interface NavItemProps {
//   text: string;
//   to: string;
// }

// function NavItem(props: NavItemProps) {
//   return (

//     <a className="nav-item text-decoration-none font-hind g-bg-text-gradient" href={props.to ?? '#'}>
//       {props.text == "Social Campaign" &&
//         <span className="nav-text nav-special">Epoch 2</span>}
//       <span className="nav-text">{props.text}</span>
//     </a>
//   );
// }

// function MenuItem(props: NavItemProps) {
//   return (
//     <a className="menu-item">
//       <span className="text">{props.text}</span>
//     </a>
//   );
// }

// function GasPopover() {
//   const [visible, setVisible] = useState(false);
//   const referenceElement = useRef(null);
//   const popperElement = useRef(null);
//   const arrowElement = useRef(null);
//   const [feerate, setFeerate] = useState({ hourFee: 0, halfHourFee: 0, fastestFee: 0 });
//   const { styles, attributes } = usePopper(
//     referenceElement.current,
//     popperElement.current,
//     {
//       modifiers: [
//         { name: "arrow", options: { element: arrowElement.current } },
//       ],
//     }
//   );

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data } = await axios.get(`https://mempool.space/api/v1/fees/recommended`);
//         setFeerate(data);
//       } catch (error) {
//         console.log("Server responded with:", error);
//       }
//     };

//     fetchData(); // fetch data immediately
//     const intervalId = setInterval(fetchData, 5000); // fetch data every 30 seconds

//     // clean up the interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <>
//       <button
//         className="pill"
//         ref={referenceElement}
//         onMouseEnter={() => setVisible(true)}
//         onMouseLeave={() => setVisible(false)}
//       >
//         <i className="iconfont icon-gas1"></i>
//         <span>{feerate.halfHourFee}</span>
//       </button>
//       <div
//         className={`gas-popover popover ${visible ? "is-visible" : "hidden"}`}
//         style={styles.popper}
//         ref={popperElement}
//         {...attributes.popper}
//       >
//         <div className="arrow" style={styles.arrow} ref={arrowElement}></div>
//         <div className="popover-content">
//           <div className="gas-list">
//             <div className="gas-item">
//               <i className="nav-rate-icon iconfont icon-bike"></i>
//               <span className="nav-rate-text">Low: {feerate.hourFee} sats/vB</span>
//             </div>
//             <div className="gas-item">
//               <i className="nav-rate-icon iconfont icon-plane1"></i>
//               <span className="nav-rate-text">Medium: {feerate.halfHourFee} sats/vB</span>
//             </div>
//             <div className="gas-item">
//               <i className="nav-rate-icon iconfont icon-flashlight-line"></i>
//               <span className="nav-rate-text">High: {feerate.fastestFee} sats/vB</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// interface InfoPopoverProps extends PropsWithChildren {
//   title: string;
// }

// function InfoPopover({ title, children }: InfoPopoverProps) {
//   const [visible, setVisible] = useState(false);
//   const referenceElement = useRef(null);
//   const popperElement = useRef(null);
//   const arrowElement = useRef(null);
//   const { styles, attributes } = usePopper(
//     referenceElement.current,
//     popperElement.current,
//     {
//       modifiers: [
//         { name: "arrow", options: { element: arrowElement.current } },
//       ],
//     }
//   );

//   return (
//     <>
//       <div
//         ref={referenceElement}
//         onMouseEnter={() => setVisible(true)}
//         onMouseLeave={() => setVisible(false)}
//       >
//         {children}
//       </div>
//       <div
//         className={`info-popover popover ${visible ? "is-visible" : "hidden"}`}
//         style={styles.popper}
//         ref={popperElement}
//         {...attributes.popper}
//       >
//         <div className="arrow" style={styles.arrow} ref={arrowElement}></div>
//         <span className="popover-content">{title}</span>
//       </div>
//     </>
//   );
// }

// interface ExtraItemProps {
//   title: string;
//   icon: string;
// }

// function ExtraItem({ title, icon }: ExtraItemProps) {
//   return (
//     <div className="additional-item">
//       <i className={`iconfont gn-icon-click ${icon}`}></i>
//       <span>{title}</span>
//     </div>
//   );
// }

// function EllipsisPopover() {
//   const [visible, setVisible] = useState(false);
//   const referenceElement = useRef(null);
//   const popperElement = useRef(null);
//   const { styles, attributes } = usePopper(
//     referenceElement.current,
//     popperElement.current
//   );

//   function onNightToggle() { }

//   return (
//     <>
//       <button
//         className="more-btn"
//         ref={referenceElement}
//         onClick={() => setVisible(!visible)}
//         onBlur={() => setVisible(false)}
//       >
//         <i className="iconfont icon-more"></i>
//       </button>
//       <div
//         className={`more-popover popover ${visible ? "is-visible" : "hidden"}`}
//         style={styles.popper}
//         ref={popperElement}
//         {...attributes.popper}
//       >
//         <div className="popover-content">
//           <div>
//             <div className="night-mode">
//               <i className="iconfont gn-icon-click icon-dark"></i>
//               <span>Night Mode</span>
//               <SwitchButton
//                 className="toggle"
//                 onUpdate={onNightToggle}
//                 defaultVal={true}
//               />
//             </div>
//             <ExtraItem title="About" icon="icon-info-circle-filled" />
//             <ExtraItem title="API" icon="icon-soundmian" />
//             <ExtraItem title="Twitter" icon="icon-twitter1" />
//             <ExtraItem title="Discord" icon="icon-discord-fill" />
//             <ExtraItem title="Documentation" icon="icon-book-filled" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

interface AddressPopoverProps {
  address: string;
  disconnectWallet: () => void;
}

function AddressPopover({ address, disconnectWallet }: AddressPopoverProps) {
  const [visible, setVisible] = useState(false);
  const referenceElement = useRef(null);
  const popperElement = useRef(null);
  const { styles, attributes } = usePopper(
    referenceElement.current,
    popperElement.current
  );

  return (
    <>
      <button
        className="address-btn"
        ref={referenceElement}
        onClick={() => setVisible(!visible)}
        onBlur={() => setVisible(false)}
      >
        <div className="wrapper">
          <span>{address.slice(0, 4) + "..." + address.slice(-4)}</span>
          <i
            className="addr-arrow-icon iconfont icon-chevron-down"
            style={{
              transform: visible ? "rotate(180deg)" : "rotateY(0)",
            }}
          ></i>
        </div>
      </button>
      <div
        className={`address-popover popover ${visible ? "is-visible" : "hidden"}`}
        style={styles.popper}
        ref={popperElement}
        {...attributes.popper}
      >
        <div className="popover-content">
          <div className="addr-menu-list">
            <div className="addr-menu-item">Orders</div>
            <div className="addr-menu-item">Sign In on Mobile</div>
            <button className="addr-menu-item" onClick={disconnectWallet}>
              Disconnect
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// interface SwitchButtonProps {
//   className?: string;
//   defaultVal?: boolean;
//   onUpdate?: (newVal: boolean) => void;
// }

// interface MenuControlToggleProps extends SwitchButtonProps {
//   text: string;
// }

// function SwitchButton({ className, defaultVal, onUpdate }: SwitchButtonProps) {
//   const [value, setValue] = useState(!!defaultVal);

//   function handleSwitch() {
//     setValue(!value);
//     onUpdate?.(!value);
//   }

//   return (
//     <label
//       className={`switch ${className} ${value ? "on" : "off"}`}
//       onClick={handleSwitch}
//     ></label>
//   );
// }

// function MenuControlToggle({ text, onUpdate }: MenuControlToggleProps) {
//   return (
//     <a className="menu-item">
//       <span className="text">{text}</span>
//       <SwitchButton onUpdate={onUpdate} />
//     </a>
//   );
// }

// interface SideNavProps {
//   open: boolean;
// }

// function SideNav({ open }: SideNavProps) {
//   return (
//     <aside
//       className="sidenav"
//       style={{
//         display: open ? "" : "none",
//       }}
//     >
//       <div className="wrapper">
//         <div className="menu-links">
//           <MenuItem text="Discover" to="" />
//           <MenuItem text="Portfolio" to="" />
//           <MenuItem text="Inscriptions" to="" />
//           <MenuItem text="Index" to="" />
//           <MenuItem text="Mint" to="" />
//           <MenuItem text="Rewards" to="" />
//           <MenuItem text="About" to="" />
//           <MenuItem text="Documentation" to="" />
//         </div>

//         <MenuControlToggle text="Dark Mode" />
//         <MenuItem text="Install Our App" to="" />
//       </div>
//     </aside>
//   );
// }

interface NavbarProps {
  isConnected: boolean;
  accountAddress: string;
  onClickConnectButton: () => void;
  OnWalletDisconnect: () => void;
  modalOpened: boolean;
}

export default function Navbar({
  isConnected,
  accountAddress,
  onClickConnectButton,
  OnWalletDisconnect,
  modalOpened
}: NavbarProps) {
  // const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="header z-30 sticky top-0 dark:bg-darkmode-theme-light">
      <nav className="navbar mainContainer">
        <div className="order-0">
          <a className="navbar-brand inline-block">
              <img src="ligo-green.png" className="logo-class"/>
          </a>
        </div>
        <input id="nav-toggle" type="checkbox" className="hidden"></input>
        <label htmlFor="nav-toggle" 
        className="order-3 cursor-pointer flex items-center lg:hidden text-dark dark:text-white lg:order-1">
          <svg id="show-button" className="h-6 fill-current block" viewBox="0 0 20 20">
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path></svg>
            <svg id="hide-button" className="h-6 fill-current hidden" viewBox="0 0 20 20">
            <title>Menu Close</title>
            <polygon points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2" transform="rotate(45 10 10)"></polygon></svg></label>
            <ul 
            id="nav-menu"
             className="navbar-nav order-3 hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8">
              <li className="nav-item">
                <a className="nav-link block  font-light active text-[16px]" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link block  font-light false text-[16px]" href="/whitepaper">Whitepaper</a>
              </li>
              <li className="nav-item">
                <a className="nav-link block  font-light false text-[16px]" href="/staking">Wallet</a>
              </li>
              <li className="nav-item">
                <a className="nav-link block  font-light false text-[16px]" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link block  font-light false text-[16px]" href="/explorer">Explorer</a>
              </li>
              <li className="mt-4 inline-block lg:hidden">
                <a className="customizer btn btn-outline-primary btn-sm hidden lg:inline-block normal-case" href="/staking">Earn $iGO</a>
              </li>
            </ul>
            <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
              <a className="customizer border border-solid btn btn-outline-primary btn-sm hidden lg:inline-block normal-case" href="/staking">Earn $iGO</a>
            </div>
      </nav>

    </header>
  );
}
