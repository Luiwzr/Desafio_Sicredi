function changeNavOptionIcon(element, beforeIcon, afterIcon) {
  const beforeIconElement = [...element.children].filter((children) => {
    return children.classList.contains(beforeIcon);
  })[0];
  if (!beforeIconElement) return;
  beforeIconElement.classList.replace(beforeIcon, afterIcon);
}

function selectNavOption(event) {
  const navOption = event.currentTarget;

  if (!navOption.classList.contains("nav_option")) return;

  if (!navOption.classList.contains("nav_active")) {
    const currentActiveNavOption =
      document.getElementsByClassName("nav_active")[0];
    currentActiveNavOption.classList.remove("nav_active");
    changeNavOptionIcon(currentActiveNavOption, "bi-dash", "bi-plus");

    const currentActiveSubmenuNav = currentActiveNavOption.nextElementSibling;
    if (currentActiveSubmenuNav) {
      currentActiveSubmenuNav.style.display = "none";
      currentActiveSubmenuNav.style.visibility = "hidden";
    }

    navOption.classList.add("nav_active");
    changeNavOptionIcon(navOption, "bi-plus", "bi-dash");

    const submenuNav = navOption.nextElementSibling;
    if (submenuNav != null) {
      submenuNav.style.display = "block";
      submenuNav.style.visibility = "visible";
    }
  }
}

function openAndCloseMenu(event) {
  if (event.currentTarget.id == "menu_button") {
    document.getElementById("menu_nav_container").style.visibility = "visible";
    document.getElementById("menu_nav_overlay").style.visibility = "visible";

    document.querySelector(".nav_active").nextElementSibling.style.display = "block"
  }

  if (event.currentTarget.id == "close_menu_nav") {
    document.getElementById("menu_nav_container").style.visibility = "hidden";
    document.getElementById("menu_nav_overlay").style.visibility = "hidden";
    
    document.querySelector(".nav_active").nextElementSibling.style.display = "none";
  }
}
