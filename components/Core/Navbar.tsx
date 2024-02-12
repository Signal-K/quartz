import { QuartzComponentConstructor, QuartzComponentProps } from "../../quartz/components/types";
import style from "./styles/Header.scss";

interface HeaderOptions {
  menuItems: string[]; // Array of menu items
}

const defaultOptions: HeaderOptions = {
  menuItems: [],
};

export default ((opts?: Partial<HeaderOptions>) => {
  const options: HeaderOptions = { ...defaultOptions, ...opts };

  function Header(props: QuartzComponentProps) {
    const { cfg } = props;
    const { menuItems } = options;

    function toggleMobileMenu() {
      const mobileMenu = document.querySelector('.mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.toggle('show');
      }
    }

    return (
      <header class="header" style={style}>
        <div class="logo">Your Logo</div>
        <nav class="menu">
          {menuItems.map((item, index) => (
            <div class="menu-item" key={index}>
              {item}
            </div>
          ))}
        </nav>
        {/* <div class="mobile-menu" onclick={toggleMobileMenu}>
          ☰
          <div class="menu">
            {menuItems.map((item, index) => (
              <div class="menu-item" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div> */}
      </header>
    );
  }

  Header.css = style;
  return Header;
}) satisfies QuartzComponentConstructor;
