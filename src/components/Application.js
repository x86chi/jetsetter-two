import React from "react";
import { inject, observer } from "mobx-react";

import NewItem from "./NewItem";
import Items from "./Items";

const UnpackedItems = inject("itemsList")(
  observer(({ itemList }) => (
    <Items title="Unpacked Items" items={itemList.unpackedItems} />
  ))
);

const PackedItems = inject("itemsList")(
  observer(({ itemList }) => (
    <Items title="Unpacked Items" items={itemList.packedItems} />
  ))
);

const Application = () => {
  return (
    <div className="Application">
      <NewItem />
      <UnpackedItems />
      <PackedItems />
      <button className="button full-width">Mark All As Unpacked</button>
    </div>
  );
};

export default Application;
