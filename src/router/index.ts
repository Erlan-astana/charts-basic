import Basic from "../pages/basic";
import Example from "../pages/example";

const basic = new Basic();
const example = new Example();

export class Router {
  enableRouteChange() {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.slice(1);
      if (hash === "chart-basic") {
        basic.render();
      }
      if (hash === "chart-example") {
        example.render();
      }
    });
  }
}

export default Router;
