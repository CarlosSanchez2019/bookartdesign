window.onscroll = () => {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      document.querySelector('.subir').className = "test";
    } else {
      document.querySelector('.subir').className = "";
    }
  }