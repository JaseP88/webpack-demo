import { groupBy } from "lodash-es"
import people from "./people"

const managerGroups = groupBy(people, "manager");

const root = document.createElement("div");
root.innerHTML = `<pre>${JSON.stringify(people, null, 2)}</pre>`;
document.body.appendChild(root);