import { htmlToJsx } from "../../util/jsx"
import { QuartzComponentConstructor, QuartzComponentProps } from "../types"
import Header from '../../../components/Core/Navbar';

function Content({ fileData, tree }: QuartzComponentProps) {
  const content = htmlToJsx(fileData.filePath!, tree);
  const classes: string[] = fileData.frontmatter?.cssclasses ?? [];
  const classString = ["popover-hint", ...classes].join(" ");
  const menuItems = ['Home', 'About', 'Contact']
  
  return (
    <>
      <article class={classString}>{content}</article>
    </>
  );
}

export default (() => Content) satisfies QuartzComponentConstructor;
