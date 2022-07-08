export default function getItemSideBar(label, href, key, icon, children) {
  return {
    key,
    href,
    icon,
    children,
    label,
  };
}
