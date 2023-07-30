import React from "react";
import VendorAside from "./VendorAside";
import VendorInfo from "./VendorInfo";
import VendorTopnav from "./VendorTopnav";

function VendorBoard() {
  return (
    <div>
      <div className="container">
        <div className="user-container">
          <aside className="user-side">
            <VendorAside />
          </aside>
          <main>
            <VendorTopnav />

            <VendorInfo />
          </main>
        </div>
      </div>
    </div>
  );
}

export default VendorBoard;
