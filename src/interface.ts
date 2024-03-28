export async function initialize(getStoredParams, setStoredParams) {
    // EXAMPLE (USER INTERACTION)
    /*
    document.getElementById("svg")?.addEventListener("click", (event) => {
        if (event.target === document.getElementById("circle")) {
            setStoredParams({
                circleBorder:
                    getStoredParams().circleBorder === "red" ? "black" : "red",
            });
        }
    });
    */
}

export async function render(params, getStoredParams) {
    const storedParams = getStoredParams();
    if (!!params.circleFill) {
        document
            .getElementById("circle")
            ?.setAttribute("fill", params.circleFill);
    }

    if (!!params.rectFill) {
        document.getElementById("rect")?.setAttribute("fill", params.rectFill);
    }

    if (!!params.triangleFill) {
        document
            .getElementById("triangle")
            ?.setAttribute("fill", params.triangleFill);
    }

    // EXAMPLE (USER INTERACTION)
    /*
    if (!!storedParams.circleBorder) {
        document
            .getElementById("circle")
            ?.setAttribute("stroke", storedParams.circleBorder);
    }
    */
}

export async function params() {
    return [
        { key: "circleFill", type: "string" },
        { key: "rectFill", type: "string" },
        { key: "triangleFill", type: "string" },
    ];
}

export async function storedParams() {
    return [
        // // EXAMPLE (USER INTERACTION)
        // { key: "circleBorder", type: "string" }
    ];
}
