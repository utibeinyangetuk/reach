import React from "react";
import AppViews from "./views/AppViews";
import DeployerViews from "./views/DeployerViews";
import AttacherViews from "./views/AttacherViews";
import { renderDom, renderView } from "./views/render";
import "./index.css";
import * as backend from "./build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
const reach = loadStdlib(process.env);

const handToInt = { ROCK: 0, PAPER: 1, SCISSORS: 2 };
const intToOutcome = ["Bob wins!", "Draw!", "Alice wins!"];
const { standard } = reach;
const defaults = { defaultFundAmt: "10", defaultWager: "3", standardUnit };

class App extends React.Components {
    constructor(props) {
        super(props)
        this.state = {view: 'ConnectAccount', ...defaults}
    }

    async componentDidMount() {
        const acc = await reach.getDefaultAccount();
        const balAtomic = await reach.balanceOf(acc)
        const bal = reach.formatCurrency(balAtomic, 4)
    }
}