const getHeaderOffset = (): number => {
  const header = document.querySelector(".site-header") as HTMLElement | null;
  if (!header) return 0;
  return header.getBoundingClientRect().height + 10;
};

const scrollToWithOffset = (selector: string): void => {
  const target = document.querySelector(selector) as HTMLElement | null;
  if (!target) return;

  const top =
    window.scrollY +
    target.getBoundingClientRect().top -
    getHeaderOffset();

  window.scrollTo({
    top,
    behavior: "smooth"
  });
};

const nextButtons = document.querySelectorAll(
  "[data-next-target]"
) as NodeListOf<HTMLElement>;

nextButtons.forEach((button: HTMLElement) => {
  button.addEventListener("click", () => {
    const targetSelector = button.getAttribute("data-next-target");
    if (!targetSelector) return;

    scrollToWithOffset(targetSelector);
  });
});
