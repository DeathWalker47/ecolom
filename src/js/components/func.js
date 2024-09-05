import { burger } from "../functions/burger";
import TransferElements from "transfer-elements";
import GraphModal from "graph-modal";

new TransferElements({
  sourceElement: document.querySelector(".btn-call"),
  // sourceElement: document.querySelector(".btn-call"),
  breakpoints: {
    768: {
      targetElement: document.querySelector(".nav"),
      targetPosition: 1,
    },
  },
});

const modal = new GraphModal();
