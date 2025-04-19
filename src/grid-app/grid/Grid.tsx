import { Fragment, useCallback, useMemo, useRef, useState } from "react";
import "./grid.css";
const gridBox = [
  [1, 0, 1],
  [1, 1, 0],
  [1, 0, 1],
];

function GridWrapper() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [selectStack, setSelectStack] = useState<Array<string>>([]);
  const timeIntervalRef = useRef<NodeJS.Timer>(null);

  const selectableCount = useMemo(() => {
    let count = 0;
    gridBox.forEach((gridList) => {
      gridList.forEach((item) => {
        if (item) {
          count = count + 1;
        }
      });
    });
    return count;
  }, []);

  //   useEffect(() => {}, [selected]);

  const handleClick = useCallback(
    (index1: number, index2: number) => {
      if (timeIntervalRef.current) {
        clearInterval(timeIntervalRef.current);
      }
      if (!selected[`${index1}:${index2}`]) {
        selected[`${index1}:${index2}`] = true;
        setSelected({ ...selected });
        selectStack.push(`${index1}:${index2}`);
        setSelectStack([...selectStack]);
      }

      if (selectableCount === selectStack.length) {
        timeIntervalRef.current = setInterval(() => {
          const removedKey = selectStack.pop();
          if (removedKey) {
            selected[removedKey] = false;
          }
          setSelected({ ...selected });
          setSelectStack([...selectStack]);
        }, 1000);

        if (
          !Object.keys(selected).length &&
          !selectStack.length &&
          timeIntervalRef
        ) {
          clearInterval(timeIntervalRef.current);
        }
      }
    },
    [selectStack, selected]
  );

  return (
    <div className="grid-wrapper">
      {gridBox.map((girdList, index1) => (
        <div key={index1} className="grid-row">
          {girdList.map((gridItem, index2) => (
            <Fragment key={`${index1} + ${index2}`}>
              <button
                className={
                  !gridItem
                    ? "grid-disable"
                    : selected[`${index1}:${index2}`]
                    ? "grid-selected"
                    : "grid-selecteable"
                }
                onClick={() => handleClick(index1, index2)}
                disabled={!gridItem}
              >
                {gridItem}
              </button>
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GridWrapper;
