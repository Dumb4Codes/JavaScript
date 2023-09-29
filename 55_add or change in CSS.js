const head = document.createElement("h1");
head.textContent = "This is my Title";
document.body.append(head);

const title = document.querySelector("h1");
title.style.backgroundColor = "#222222";
title.style.border = "3px solid";
title.style.textAlign = "center";
title.style.display = "block";
title.style.fontFamily = "Arial";
title.style.fontStyle = "italic";
title.style.fontWeight = "1000";
title.style.webkitTextStroke = "2px rgb(20, 200, 250)";
title.style.color = "transparent"