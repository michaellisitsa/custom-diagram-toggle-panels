export async function initialize(getStoredParams, setStoredParams) {
    document.getElementById("group")?.addEventListener("click", (event) => {
        const storedParams = getStoredParams();
        const elements = document.getElementsByClassName("panel");
        let includesTarget = Array.from(elements).includes(
            event.target as Element,
        );
        if (includesTarget) {
            const idx = (event.target as Element).id;
            let newRemovedPanels: number[] = Array.from(elements).map(
                (el) => 0,
            );
            let maxPanelsIdx = newRemovedPanels.length - 1;
            if (storedParams.removedPanels) {
                const storedParamsMaxIndex =
                    storedParams.removedPanels.length - 1;
                if (storedParamsMaxIndex > maxPanelsIdx) {
                    newRemovedPanels.splice(
                        0,
                        maxPanelsIdx + 1,
                        ...storedParams.removedPanels.slice(
                            0,
                            maxPanelsIdx + 1,
                        ),
                    );
                } else {
                    newRemovedPanels.splice(
                        0,
                        storedParamsMaxIndex + 1,
                        ...storedParams.removedPanels,
                    );
                }
            }
            newRemovedPanels[idx] = newRemovedPanels[idx] === 1 ? 0 : 1;
            setStoredParams({
                removedPanels: newRemovedPanels,
            });
        }
    });
}

export async function render(params, getStoredParams) {
    document
        .getElementById("svg")
        ?.setAttribute("viewBox", `0 0 500 ${50 + 25 * params.panelsX.length}`);
    const storedParams = getStoredParams();
    if (!!params.panelsX) {
        const el = document.getElementById("toggle");
        const group = document.getElementById("group");
        group?.replaceChildren(
            ...params.panelsX.map((panel, idx) => {
                const thisPanel = el?.cloneNode(true) as SVGElement;
                thisPanel?.setAttribute("id", `${idx}`);
                thisPanel?.setAttribute("class", `panel`);
                thisPanel?.setAttribute("y", (idx * 25).toString());
                if (storedParams.removedPanels?.[idx] === 1) {
                    thisPanel?.setAttribute("fill", "red");
                } else {
                    thisPanel?.setAttribute("fill", "green");
                }
                return thisPanel;
            }),
        );
    }
}

export async function params() {
    return [{ key: "panelsX", type: "Array<number>" }];
}

export async function storedParams() {
    return [
        // // EXAMPLE (USER INTERACTION)
        { key: "removedPanels", type: "Array<number>" },
    ];
}
